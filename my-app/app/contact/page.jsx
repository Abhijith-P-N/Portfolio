'use client';
import './contact.css'
import { useState } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message. Try again later.');
    }
  };

  return (
    <section className="section" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit" className="btn filled" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {submitted && <p className="success-message">Thanks! I'll get back to you soon.</p>}
      </form>

      <div className="social-profiles">
        <h3>Or connect with me on</h3>
        <div className="social-icons">
          <a 
            href="https://www.instagram.com/a_b_h_i_ji_th_?igsh=dGdqZzQxc3lwcnMw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon instagram"
          >
            <FaInstagram className="icon" />
            <span>Instagram</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/abhijith-pn-41a3b0327/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon linkedin"
          >
            <FaLinkedin className="icon" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}