import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/xrewlkpa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-12 text-center">
            Get In <span className="text-accent">Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary rounded-lg p-8 border border-secondary">
              <h3 className="text-2xl font-bold text-textPrimary mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-textSecondary">
                  <span className="text-accent mr-3 text-xl">📧</span>
                  <div>
                    <p className="text-sm text-textSecondary">Email</p>
                    <a href="mailto:sufyankhan.01127@gmail.com" className="text-textPrimary hover:text-accent transition-colors">sufyankhan.01127@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center text-textSecondary">
                  <span className="text-accent mr-3 text-xl">📱</span>
                  <div>
                    <p className="text-sm text-textSecondary">Phone</p>
                    <a href="tel:+917795031127" className="text-textPrimary hover:text-accent transition-colors">+91-7795031127</a>
                  </div>
                </div>
                <div className="flex items-center text-textSecondary">
                  <span className="text-accent mr-3 text-xl">📍</span>
                  <div>
                    <p className="text-sm text-textSecondary">Location</p>
                    <p className="text-textPrimary">Humnabad, Karnataka, India</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-bold text-textPrimary mb-4">Social Links</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/sufyankhan1127" target="_blank" rel="noopener noreferrer" className="bg-secondary text-textSecondary hover:text-accent px-4 py-2 rounded border border-secondary hover:border-accent transition-all">GitHub</a>
                  <a href="https://linkedin.com/in/mohd-sufyan-khan-1127sk" target="_blank" rel="noopener noreferrer" className="bg-secondary text-textSecondary hover:text-accent px-4 py-2 rounded border border-secondary hover:border-accent transition-all">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-lg p-8 border border-secondary">
              <h3 className="text-2xl font-bold text-textPrimary mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-textSecondary text-sm mb-2">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-secondary border border-secondary rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-accent transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-textSecondary text-sm mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-secondary border border-secondary rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-accent transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-textSecondary text-sm mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full bg-secondary border border-secondary rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full bg-accent hover:bg-accentHover text-primary font-bold py-3 rounded-lg transition-colors duration-300 disabled:opacity-50">
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-center mt-2">✅ Message sent successfully!</motion.p>}
                {status === 'error' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-center mt-2">❌ Something went wrong. Try again!</motion.p>}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;