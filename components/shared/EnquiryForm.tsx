'use client';

import { useState } from 'react';
import { company, services } from '@/lib/site';

type Kind = 'contact' | 'lab';
type Status = { state: 'idle' } | { state: 'sending' } | { state: 'sent' } | { state: 'error'; message: string };

const ENDPOINT = '/send.php';

export default function EnquiryForm({ kind }: { kind: Kind }) {
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const [startedAt] = useState(() => Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('elapsed', String(Math.round((Date.now() - startedAt) / 1000)));
    setStatus({ state: 'sending' });
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.ok) {
        form.reset();
        setStatus({ state: 'sent' });
      } else {
        setStatus({ state: 'error', message: json?.error ?? 'The message could not be sent.' });
      }
    } catch {
      setStatus({ state: 'error', message: 'The message could not be sent. Check your connection and try again.' });
    }
  }

  if (status.state === 'sent') {
    return (
      <div className="form-status" role="status">
        <h3>{kind === 'lab' ? 'Analysis request sent' : 'Message sent'}</h3>
        <p className="muted">
          {kind === 'lab'
            ? 'Our lab team will reply within 4 business hours.'
            : 'Thank you. Our team will reply to your enquiry within 24 hours.'}
        </p>
      </div>
    );
  }

  const sending = status.state === 'sending';

  return (
    <form className="form" action={ENDPOINT} method="post" onSubmit={onSubmit}>
      <input type="hidden" name="form" value={kind} />
      <div className="hp" aria-hidden="true">
        <label>Leave this field empty<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="form-2">
        <div className="field">
          <label htmlFor={`${kind}-name`}>Full name</label>
          <input id={`${kind}-name`} name="name" type="text" required autoComplete="name" maxLength={120} />
        </div>
        <div className="field">
          <label htmlFor={`${kind}-company`}>Company</label>
          <input id={`${kind}-company`} name="company" type="text" required autoComplete="organization" maxLength={160} />
        </div>
      </div>

      <div className="form-2">
        <div className="field">
          <label htmlFor={`${kind}-email`}>Email address</label>
          <input id={`${kind}-email`} name="email" type="email" required autoComplete="email" maxLength={160} />
        </div>
        {kind === 'contact' ? (
          <div className="field">
            <label htmlFor="contact-phone">Phone number <span className="opt">(optional)</span></label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} />
          </div>
        ) : (
          <div className="field">
            <label htmlFor="lab-sample">Sample type</label>
            <input id="lab-sample" name="sample" type="text" required placeholder="e.g. VLSFO, crude oil, methanol" maxLength={160} />
          </div>
        )}
      </div>

      {kind === 'contact' && (
        <div className="field">
          <label htmlFor="contact-service">Service you&apos;re interested in <span className="opt">(optional)</span></label>
          <select id="contact-service" name="service" defaultValue="">
            <option value="">Choose a service</option>
            {services.map(s => <option key={s.anchor} value={s.title}>{s.title}</option>)}
            <option value="Other">Other</option>
          </select>
        </div>
      )}

      <div className="field">
        <label htmlFor={`${kind}-message`}>
          {kind === 'lab' ? <>Analysis requirements <span className="opt">(optional)</span></> : 'Your message'}
        </label>
        <textarea
          id={`${kind}-message`}
          name="message"
          rows={5}
          required={kind === 'contact'}
          maxLength={5000}
          placeholder={kind === 'lab'
            ? 'Test parameters, number of samples, urgency'
            : 'Product, volumes, preferred terminal and timing'}
        />
      </div>

      {status.state === 'error' && (
        <div className="form-status is-error" role="alert">
          <p>{status.message} You can also email <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
        </div>
      )}

      <div>
        <button type="submit" className="btn btn--primary" disabled={sending}>
          {sending ? 'Sending…' : kind === 'lab' ? 'Send analysis request' : 'Send message'}
        </button>
      </div>
    </form>
  );
}
