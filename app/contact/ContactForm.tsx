'use client';

import { useState } from 'react';
import Script from 'next/script';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length >= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    if (digits.length >= 3) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    if (digits.length > 0) return `(${digits}`;
    return '';
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData((s) => ({ ...s, phone: formatPhoneNumber(value) }));
    } else {
      setFormData((s) => ({ ...s, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Client-side validations to match your current behavior
    if (formData.message.length > 500) {
      setSubmitStatus('Message cannot exceed 500 characters.');
      setIsSubmitting(false);
      return;
    }
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      setSubmitStatus('Please enter a valid 10-digit phone number.');
      setIsSubmitting(false);
      return;
    }

    try {
      const form = e.currentTarget;
      // IMPORTANT: serialize the entire form so the hidden cf-turnstile-response is included
      const fd = new FormData(form);

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: fd,
      });
      const json = await res.json().catch(() => ({} as any));

      if (!res.ok || !json?.ok) {
        setSubmitStatus(json?.error || 'Failed to send message. Please try again.');
        // @ts-ignore - Turnstile global is injected by the script
        if (window.turnstile) window.turnstile.reset();
      } else {
        setSubmitStatus('Message sent successfully! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        form.reset();
        // @ts-ignore
        if (window.turnstile) window.turnstile.reset();
      }
    } catch {
      setSubmitStatus('Failed to send message. Please try again.');
      // @ts-ignore
      if (window.turnstile) window.turnstile.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
      {/* Load Cloudflare Turnstile once */}
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

      <form onSubmit={handleSubmit} id="contact" className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="(570) 787-3029"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Legal Matter Subject *
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
            >
              <option value="">Select one:</option>
              <option value="Civil Law">Civil Law</option>
              <option value="Criminal Defense">Criminal Defense</option>
              <option value="Family Law">Family Law</option>
              <option value="Landlord/Tenant">Landlord/Tenant</option>
              <option value="Business Law">Business Law</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Estate Planning">Estate Planning</option>
              <option value="Contract Law">Contract Law</option>
              <option value="Personal Injury">Personal Injury</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              maxLength={500}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-vertical"
              placeholder="Please describe your legal matter..."
            />
            <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
          </div>

          {/* Cloudflare Turnstile widget: auto-injects hidden cf-turnstile-response into this form */}
          <div className="mt-2">
            <div className="cf-turnstile" data-sitekey={SITE_KEY} data-theme="light" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>

      {submitStatus && (
        <div
          className={`mt-4 p-4 rounded-lg ${
            submitStatus.includes('successfully') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {submitStatus}
        </div>
      )}
    </div>
  );
}
