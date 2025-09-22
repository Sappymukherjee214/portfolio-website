"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you can connect to an API or email service
    console.log({ name, email, message });
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="max-w-4xl mx-auto py-20 px-6" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Me</h2>

      {submitted && (
        <div className="mb-6 text-green-600 font-semibold text-center">
          Thank you! Your message has been sent.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-md"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
        </div>

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center text-gray-600 dark:text-gray-400">
        <p>Email: <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">your.email@example.com</a></p>
        <p>Phone: <a href="tel:+911234567890" className="text-blue-500 hover:underline">+91 12345 67890</a></p>
      </div>
    </section>
  );
}