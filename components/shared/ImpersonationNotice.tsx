'use client';

import { useEffect, useRef } from 'react';
import { company } from '@/lib/site';

// Bump the version to show the notice again to visitors who already dismissed it.
const STORAGE_KEY = 'jsf-impersonation-notice-v1';

export default function ImpersonationNotice() {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    let dismissed = false;
    try { dismissed = localStorage.getItem(STORAGE_KEY) === 'dismissed'; } catch { /* storage blocked */ }
    if (dismissed) return;
    // Open after the page has painted so it never delays the main content.
    const id = setTimeout(() => ref.current?.showModal(), 700);
    return () => clearTimeout(id);
  }, []);

  function close() {
    try { localStorage.setItem(STORAGE_KEY, 'dismissed'); } catch { /* storage blocked */ }
    ref.current?.close();
  }

  return (
    <dialog
      ref={ref}
      className="notice"
      aria-labelledby="notice-title"
      aria-describedby="notice-body"
      onCancel={close}
      onClick={e => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="notice-inner">
        <p className="notice-tag">Fraud warning</p>
        <h2 id="notice-title">jsf-logistics.nl is not JSF Logistics B.V.</h2>
        <div id="notice-body">
          <p>
            A company using the domain <strong className="nowrap">jsf-logistics.nl</strong> is impersonating us. They are not
            part of JSF Logistics B.V. and are not our affiliate or partner.
          </p>
          <ul className="ticks">
            <li>Our only website is <strong className="nowrap">jsf-logistics.com</strong>.</li>
            <li>We only email from addresses ending in <strong className="nowrap">@jsf-logistics.com</strong>.</li>
            <li>Don&apos;t send payments, documents or personal details to anyone using <span className="nowrap">jsf-logistics.nl</span>.</li>
          </ul>
          <p className="muted small">
            Received a message you&apos;re unsure about? Forward it to{' '}
            <a className="link nowrap" href={`mailto:${company.email}?subject=Suspicious%20message%20(jsf-logistics.nl)`}>{company.email}</a>{' '}
            or call <a className="link nowrap" href={company.phoneHref}>{company.phone}</a> to check it with us.
          </p>
        </div>
        <button type="button" className="btn btn--ink" onClick={close} autoFocus>I understand</button>
      </div>
    </dialog>
  );
}
