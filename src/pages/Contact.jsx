// src/pages/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Burada isteğe göre e-posta servisi çağırabilirsin
    setSent(true);
  };

  return (
    <section className="contact container">
      <h2>İletişim</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Ad Soyad"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Mail"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Mesajınız"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Gönder</button>
      </form>

      {/* 4.1 Onay Modal */}
      {sent && (
        <div className="thanks-backdrop">
          <div className="thanks-modal">
            <div className="icon-check">✓</div>
            <h3>Teşekkürler!</h3>
            <p>Mesajınız başarıyla gönderildi.</p>
            <button onClick={() => setSent(false)}>Tamam</button>
          </div>
        </div>
      )}
    </section>
);
}
