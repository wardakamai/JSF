# JSF Logistics B.V. — website

Next.js site exported as plain static files for cPanel hosting. The contact and laboratory forms are
sent by a small PHP script (`public/send.php`) to info@jsf-logistics.com, through Private Email's SMTP
server (mail.privateemail.com) using a real mailbox login.

## Work on the site

```bash
npm install
npm run dev          # http://localhost:3000 (forms can't send here: PHP only runs on the server)
```

Content that appears on several pages (terminals, services, address, phone) lives in `lib/site.ts`.

## Deploy to cPanel

```bash
npm run package      # builds ./out and zips it to jsf-logistics-cpanel.zip
```

1. In cPanel, open **File Manager → public_html**. Back up and remove the old site files if any.
2. Upload `jsf-logistics-cpanel.zip` and choose **Extract**. `index.html`, `.htaccess`, `send.php`,
   `_next/` and `images/` must end up directly inside `public_html`.
   (Turn on **Settings → Show Hidden Files** to see `.htaccess`.)
3. Make sure SSL is active for jsf-logistics.com (**SSL/TLS Status → Run AutoSSL**). The `.htaccess`
   redirects everything to `https://jsf-logistics.com`.
4. Test the forms on `/contact` and `/laboratory` and check that the email arrives at info@jsf-logistics.com.

### Form email login
`send.php` reads the mailbox login from `/home/jansckte/jsf-mail-config.php`. That file sits outside the
website folder so it can never be downloaded, and it is not part of this repo:

```php
<?php
return [
    'user' => 'info@jsf-logistics.com',
    'pass' => 'mailbox password',
];
```

If you change the mailbox password in Private Email, update it in this file too (cPanel → File Manager →
home folder). If the form shows "could not send", the reason is logged in `error_log` inside the website
folder (blocked from public access by `.htaccess`).

### If the site shows "too many redirects"
Your host (or Cloudflare) terminates HTTPS before Apache. Replace the first rule block in `.htaccess` with:

```apache
RewriteCond %{HTTP:X-Forwarded-Proto} !https [OR]
RewriteCond %{HTTP_HOST} ^www\. [NC]
RewriteCond %{HTTP_HOST} ^(?:www\.)?(.+)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [R=301,L,NE]
```

## Images

Pages load pre-compressed WebP files from `public/images/opt/` (480, 960 and 1600px wide) through
`lib/image-loader.ts`. When you add or replace a photo in `public/images/`, create the three sizes too:

```bash
cd public/images
for w in 480 960 1600; do sips -s format png --resampleWidth $w photo.jpg --out /tmp/p.png && cwebp -q 72 /tmp/p.png -o opt/photo-$w.webp; done
```

## SEO checklist after launch
- Submit `https://jsf-logistics.com/sitemap.xml` in Google Search Console.
- When a page's content changes, update its date in `app/sitemap.ts`.
