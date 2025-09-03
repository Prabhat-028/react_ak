import React, { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Demo-only: replace with your backend call or service (e.g., Formspree)
    alert(`Thanks, ${form.name}! We'll get back to you at ${form.email}.`);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main className="contact-page" role="main">
      <section className="hero" aria-label="Contact intro">
        <h1>Contact Us</h1>
        <p>
          Questions, ideas, or feedback? Drop us a note—we'd love to hear from
          you.
        </p>
      </section>

      <section className="content-grid" aria-label="Contact methods and form">
        <div className="card social-card" aria-label="Social links">
          <h2>Connect</h2>
          <ul className="social-list">
            <li>
              <a
                className="social-link"
                href="mailto:hello@example.com"
                aria-label="Send us an email"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg"
                  alt="Email icon"
                  className="icon"
                  loading="lazy"
                />
                hello@example.com
              </a>
            </li>
            <li>
              <a
                className="social-link"
                href="https://www.linkedin.com/company/example"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Visit our LinkedIn page"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
                  alt="LinkedIn logo"
                  className="icon"
                  loading="lazy"
                />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="social-link"
                href="https://www.instagram.com/example"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Visit our Instagram profile"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
                  alt="Instagram logo"
                  className="icon"
                  loading="lazy"
                />
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="card form-card" aria-label="Contact form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help?"
              required
            />

            <button type="submit" className="btn">
              Send
            </button>
          </form>
        </div>
      </section>

      <footer className="footnote" aria-label="Additional info">
        <p>
          Prefer email? <a href="mailto:hello@example.com">hello@example.com</a>
        </p>
      </footer>
    </main>
  );
}
