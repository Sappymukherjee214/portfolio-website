'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function ContactSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (_) {
      setStatus('error');
      console.error(_);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4">
      <div className="max-w-xl mx-auto bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white dark:text-white">
          Get In Touch
        </h2>
        <p className="text-center text-white dark:text-white mt-2 mb-8">
          Please contact me directly at{' '}
          <a href="mailto:mukherjeesaptarshi289@gmail.com" className="font-semibold underline">
            mukherjeesaptarshi289@gmail.com
          </a>{' '}
          or through this form.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-white dark:text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md dark:bg-zinc-800 dark:border-zinc-700 focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="hello@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-white dark:text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md dark:bg-zinc-800 dark:border-zinc-700 focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="Hello! What's up?"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center gap-2 bg-slate-700 dark:bg-slate-50 text-white dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Submit'}
              <ArrowRight size={20} />
            </button>
          </div>
          {status === 'success' && <p className="text-center text-green-600 mt-4">Message sent successfully!</p>}
          {status === 'error' && <p className="text-center text-red-600 mt-4">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}