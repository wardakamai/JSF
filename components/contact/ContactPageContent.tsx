'use client';

import { useState } from 'react';
import PageHero from '@/components/shared/PageHero';
import SectionReveal from '@/components/shared/SectionReveal';

const serviceOptions = [
  'Oil Storage', 'Marine Shipping', 'Product Blending',
  'Laboratory Testing', 'Road Transportation', 'Pipeline Facilitation', 'Other',
];

const contactDetails = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    label: 'Head Office',
    lines: ['Luchthavenweg 81 Unit 2.28a', '5657 EA, Eindhoven', 'Netherlands'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    lines: ['info@jsf-logistics.com', 'storage@jsf-logistics.com'],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.001 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
      </svg>
    ),
    label: 'Phone',
    lines: ['+32 678 954-564'],
  },
];

const terminals = [
  { flag: '🇳🇱', city: 'Rotterdam', desc: 'Netherlands, Europe' },
  { flag: '🇺🇸', city: 'Houston', desc: 'Texas, USA' },
  { flag: '🇸🇬', city: 'Jurong', desc: 'Singapore' },
  { flag: '🇦🇪', city: 'Fujairah', desc: 'UAE' },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--jsf-700)',
  border: '1px solid rgba(93,214,44,0.2)',
  borderRadius: '8px',
  padding: '0.875rem 1rem',
  color: '#ffffff',
  fontSize: '14px',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'border-color 0.2s',
};

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(v => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Start a Storage"
        highlight="Conversation."
        subtitle="We respond to every enquiry within 24 hours. Whether you need storage, shipment, sourcing, or simply want to understand your options — we're here."
      />

      <section className="section-pad" style={{ background: 'var(--jsf-900)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="contact-grid">

            {/* Form */}
            <SectionReveal>
              {submitted ? (
                <div style={{ background: 'var(--jsf-700)', borderRadius: '16px', padding: '3rem', textAlign: 'center', border: '1px solid rgba(93,214,44,0.2)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', color: 'var(--jsf-100)', marginBottom: '0.75rem' }}>Message Sent!</h3>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>Thank you for reaching out. Our team will respond to your enquiry within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', color: 'var(--jsf-100)', marginBottom: '0.25rem' }}>Send Us a Message</h2>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', marginBottom: '0.5rem' }}>Fill in the form below and a member of our team will be in touch shortly.</p>

                  {/* Name / Company — stacks on mobile */}
                  <div className="form-grid-2">
                    {[
                      { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Your full name' },
                      { label: 'Company *', name: 'company', type: 'text', placeholder: 'Your company' },
                    ].map(f => (
                      <div key={f.name}>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{f.label}</label>
                        <input
                          required type={f.type} name={f.name}
                          value={form[f.name as keyof typeof form]}
                          onChange={handleChange} placeholder={f.placeholder}
                          style={inputStyle}
                          onFocus={e => (e.target.style.borderColor = 'rgba(93,214,44,0.55)')}
                          onBlur={e => (e.target.style.borderColor = 'rgba(93,214,44,0.2)')}
                        />
                      </div>
                    ))}
                  </div>

                  {[
                    { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'your@company.com' },
                    { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+1 (000) 000-0000' },
                  ].map(f => (
                    <div key={f.name}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{f.label}</label>
                      <input
                        type={f.type} name={f.name}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange} placeholder={f.placeholder}
                        required={f.name === 'email'}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'rgba(93,214,44,0.55)')}
                        onBlur={e => (e.target.style.borderColor = 'rgba(93,214,44,0.2)')}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Service Interest</label>
                    <select
                      name="service" value={form.service} onChange={handleChange}
                      style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Your Message *</label>
                    <textarea
                      required name="message" value={form.message} onChange={handleChange}
                      placeholder="Describe your requirements, volumes, product type, preferred terminal, or any other details..."
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(93,214,44,0.55)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(93,214,44,0.2)')}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      padding: '0.9rem',
                      background: 'var(--jsf-100)',
                      color: 'var(--jsf-900)',
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: '14px',
                      letterSpacing: '0.05em',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#e8ff60')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'var(--jsf-100)')}
                  >
                    SEND MESSAGE →
                  </button>
                </form>
              )}
            </SectionReveal>

            {/* Contact details */}
            <SectionReveal delay={0.15}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {contactDetails.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', background: 'var(--jsf-700)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(93,214,44,0.1)', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--jsf-300)', flexShrink: 0, marginTop: '2px' }}>{c.icon}</div>
                    <div>
                      <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.12em', marginBottom: '0.375rem' }}>{c.label}</p>
                      {c.lines.map(l => <p key={l} style={{ fontSize: '14px', color: '#ffffff', lineHeight: 1.65 }}>{l}</p>)}
                    </div>
                  </div>
                ))}

                <div style={{ background: 'var(--jsf-700)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(93,214,44,0.1)' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.12em', marginBottom: '1rem' }}>TERMINAL LOCATIONS</p>
                  <div className="form-grid-2">
                    {terminals.map(t => (
                      <div key={t.city} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.25rem' }}>{t.flag}</span>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--jsf-100)' }}>{t.city}</div>
                          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{t.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: 'rgba(93,214,44,0.05)', border: '1px solid rgba(93,214,44,0.2)', borderRadius: '12px', padding: '1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.5rem' }}>⚡</span>
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--jsf-100)' }}>Fast Response Guaranteed</p>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginTop: '0.2rem' }}>We respond to every enquiry within 24 hours, Monday–Sunday.</p>
                  </div>
                </div>
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>
    </>
  );
}
