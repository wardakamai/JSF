<?php
/**
 * JSF Logistics — enquiry form handler for cPanel hosting.
 *
 * Receives the Contact and Laboratory forms and emails them to info@jsf-logistics.com
 * through Private Email's SMTP server (mail.privateemail.com), logged in as a real mailbox.
 * Returns JSON to the site's JavaScript, or a plain HTML page when JavaScript is off.
 *
 * The mailbox login lives in jsf-mail-config.php in the account's home folder, one level
 * ABOVE this website folder, so it can never be downloaded. Format:
 *
 *   <?php return ['user' => 'info@jsf-logistics.com', 'pass' => 'mailbox password'];
 */

declare(strict_types=1);

// ─── Settings ────────────────────────────────────────────────────────────────
const MAIL_TO        = 'info@jsf-logistics.com';
const MAIL_FROM_NAME = 'JSF Logistics website';
const SMTP_HOST      = 'ssl://mail.privateemail.com:465';
const SMTP_CONFIG    = __DIR__ . '/../jsf-mail-config.php';
const MIN_SECONDS    = 3;    // forms sent faster than this are treated as bots
const RATE_LIMIT     = 5;    // max messages per IP address...
const RATE_WINDOW    = 3600; // ...per hour
const ALLOWED_HOSTS  = ['jsf-logistics.com', 'www.jsf-logistics.com'];
// ─────────────────────────────────────────────────────────────────────────────

header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

$wantsJson = stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;

function respond(bool $ok, string $message, int $status = 200): void
{
    global $wantsJson;
    http_response_code($status);
    if ($wantsJson) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $message]);
        exit;
    }
    header('Content-Type: text/html; charset=utf-8');
    $title = $ok ? 'Message sent' : 'Message not sent';
    $safe  = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    echo "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"robots\" content=\"noindex\">"
       . "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>{$title} | JSF Logistics B.V.</title>"
       . "<style>body{font-family:system-ui,sans-serif;background:#f3f6f1;color:#12261a;max-width:36rem;margin:15vh auto;padding:0 1rem;line-height:1.6}"
       . "a{color:#1b7a38;font-weight:700}</style></head><body><h1>{$title}</h1><p>{$safe}</p>"
       . "<p><a href=\"/contact\">Back to the contact page</a></p></body></html>";
    exit;
}

function field(string $name, int $max): string
{
    $value = trim((string)($_POST[$name] ?? ''));
    $value = str_replace("\0", '', $value);
    return function_exists('mb_substr') ? mb_substr($value, 0, $max) : substr($value, 0, $max);
}

/**
 * Minimal SMTP client (SSL + AUTH LOGIN). Throws RuntimeException with the server's reply on failure.
 */
function smtpSend(string $user, string $pass, string $to, string $data): void
{
    $sock = @stream_socket_client(SMTP_HOST, $errno, $errstr, 20);
    if (!$sock) {
        throw new RuntimeException("connect failed: {$errno} {$errstr}");
    }
    stream_set_timeout($sock, 20);

    $read = function () use ($sock): string {
        $reply = '';
        while (($line = fgets($sock, 1024)) !== false) {
            $reply .= $line;
            if (strlen($line) < 4 || $line[3] === ' ') break;
        }
        return $reply;
    };
    $cmd = function (?string $line, int $expect) use ($sock, $read): void {
        if ($line !== null) fwrite($sock, $line . "\r\n");
        $reply = $read();
        if ((int)substr($reply, 0, 3) !== $expect) {
            throw new RuntimeException('SMTP ' . ($line === null ? 'greeting' : strtok($line, ' ')) . ' failed: ' . trim($reply));
        }
    };

    try {
        $cmd(null, 220);
        $cmd('EHLO jsf-logistics.com', 250);
        $cmd('AUTH LOGIN', 334);
        $cmd(base64_encode($user), 334);
        $cmd(base64_encode($pass), 235);
        $cmd("MAIL FROM:<{$user}>", 250);
        $cmd("RCPT TO:<{$to}>", 250);
        $cmd('DATA', 354);
        // Dot-stuffing: lines starting with "." must be doubled.
        $cmd(preg_replace('/^\./m', '..', $data) . "\r\n.", 250);
        fwrite($sock, "QUIT\r\n"); // message is already accepted; don't fail on the goodbye
    } finally {
        fclose($sock);
    }
}

function oneLine(string $value): string
{
    // Strip line breaks so the value can't inject extra mail headers.
    return trim(preg_replace('/[\r\n\t]+/', ' ', $value) ?? '');
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, 'Please use the form on the contact page.', 405);
}

// Only accept submissions coming from our own site.
$origin = $_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '';
$originHost = strtolower((string)parse_url($origin, PHP_URL_HOST));
if ($originHost !== '' && !in_array($originHost, ALLOWED_HOSTS, true)) {
    respond(false, 'This form can only be sent from jsf-logistics.com.', 403);
}

$kind    = field('form', 20) === 'lab' ? 'lab' : 'contact';
$name    = oneLine(field('name', 120));
$company = oneLine(field('company', 160));
$email   = oneLine(field('email', 160));
$phone   = oneLine(field('phone', 40));
$service = oneLine(field('service', 80));
$sample  = oneLine(field('sample', 160));
$message = field('message', 5000);
$elapsed = (int)field('elapsed', 10);

// Spam checks: hidden honeypot field filled in, or form sent impossibly fast.
// Answer "ok" so bots don't learn they were caught.
if (field('website', 200) !== '' || (isset($_POST['elapsed']) && $elapsed < MIN_SECONDS)) {
    respond(true, 'Thank you. Your message has been sent.');
}

$missing = [];
if ($name === '')    $missing[] = 'full name';
if ($company === '') $missing[] = 'company';
if ($email === '')   $missing[] = 'email address';
if ($kind === 'contact' && trim($message) === '') $missing[] = 'message';
if ($kind === 'lab' && $sample === '')            $missing[] = 'sample type';
if ($missing) {
    respond(false, 'Please fill in your ' . implode(', ', $missing) . '.', 422);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Please enter a valid email address, like name@company.com.', 422);
}

// Simple per-IP rate limit stored in the server's temp folder.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = rtrim(sys_get_temp_dir(), '/') . '/jsf_form_' . hash('sha256', $ip);
$now = time();
$hits = [];
if (is_readable($rateFile)) {
    $hits = array_filter(
        array_map('intval', explode(',', (string)file_get_contents($rateFile))),
        fn (int $t) => $t > $now - RATE_WINDOW
    );
}
if (count($hits) >= RATE_LIMIT) {
    respond(false, 'Too many messages were sent from your connection. Please try again in an hour.', 429);
}
$hits[] = $now;
@file_put_contents($rateFile, implode(',', $hits), LOCK_EX);

// Build the email.
$subject = $kind === 'lab'
    ? "Lab analysis request: {$sample} ({$company})"
    : 'Website enquiry' . ($service !== '' ? ": {$service}" : '') . " ({$company})";

$lines = [
    $kind === 'lab' ? 'New sample analysis request from jsf-logistics.com/laboratory' : 'New enquiry from jsf-logistics.com/contact',
    '',
    "Name:     {$name}",
    "Company:  {$company}",
    "Email:    {$email}",
];
if ($phone !== '')   $lines[] = "Phone:    {$phone}";
if ($service !== '') $lines[] = "Service:  {$service}";
if ($sample !== '')  $lines[] = "Sample:   {$sample}";
$lines[] = '';
$lines[] = $kind === 'lab' ? 'Analysis requirements:' : 'Message:';
$lines[] = trim($message) !== '' ? $message : '(none)';
$lines[] = '';
$lines[] = '—';
$lines[] = 'Sent ' . gmdate('Y-m-d H:i') . " UTC from IP {$ip}. Reply to this email to answer {$name} directly.";

$body = implode("\r\n", $lines);
$body = preg_replace("/\r?\n/", "\r\n", $body);

$config = is_readable(SMTP_CONFIG) ? include SMTP_CONFIG : null;
if (!is_array($config) || empty($config['user']) || empty($config['pass']) || $config['pass'] === 'PASTE-MAILBOX-PASSWORD-HERE') {
    error_log('[jsf send.php] mailbox login missing: create ' . SMTP_CONFIG);
    respond(false, 'The server could not send your message right now.', 500);
}
$from = (string)$config['user'];

$encode = fn (string $v): string => '=?UTF-8?B?' . base64_encode($v) . '?=';

$headers = [
    'Date: ' . date('r'),
    'Message-ID: <' . bin2hex(random_bytes(12)) . '@jsf-logistics.com>',
    'From: ' . $encode(MAIL_FROM_NAME) . ' <' . $from . '>',
    'To: <' . MAIL_TO . '>',
    'Reply-To: ' . $encode($name) . ' <' . $email . '>',
    'Subject: ' . $encode($subject),
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    'X-Mailer: JSF-Logistics-Website',
];
$data = implode("\r\n", $headers) . "\r\n\r\n" . rtrim(chunk_split(base64_encode($body), 76, "\r\n"));

try {
    smtpSend($from, (string)$config['pass'], MAIL_TO, $data);
} catch (Throwable $e) {
    error_log('[jsf send.php] ' . $e->getMessage() . ' (enquiry from ' . $email . ')');
    respond(false, 'The server could not send your message right now.', 500);
}

respond(true, $kind === 'lab'
    ? 'Thank you. Our lab team will reply within 4 business hours.'
    : 'Thank you. Our team will reply to your enquiry within 24 hours.');
