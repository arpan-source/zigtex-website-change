import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ChevronRight } from 'lucide-react';

export const LeadFormModal = ({ isOpen, onClose, title = "Get Started with Zigtex" }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020108]/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg glass-card p-8 md:p-12 border-brand/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#e5e6e6]/50 hover:text-[#e5e6e6] transition-colors rounded-full hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <div className="mb-8">
                    <h2 className="font-heading text-3xl md:text-4xl text-[#e5e6e6] mb-3 leading-tight">
                      {title}
                    </h2>
                    <p className="font-body text-[#e5e6e6]/60 text-sm leading-relaxed">
                      Enter your details below and our team will get in touch to set up your infrastructure.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="lead-name" className="text-[10px] uppercase tracking-widest font-bold text-[#e5e6e6]/40 ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        id="lead-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        aria-describedby="name-helper"
                        className="w-full bg-[#0a061c]/50 border border-[#e5e6e6]/10 rounded-xl px-5 py-4 focus:border-brand/50 focus:ring-1 focus:ring-brand/50 outline-none transition-all placeholder:text-[#e5e6e6]/20 text-[#e5e6e6]"
                      />
                      <p id="name-helper" className="sr-only">Please enter your full name.</p>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="lead-email" className="text-[10px] uppercase tracking-widest font-bold text-[#e5e6e6]/40 ml-1">Work Email</label>
                      <input
                        required
                        type="email"
                        id="lead-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        aria-describedby="email-helper"
                        className="w-full bg-[#0a061c]/50 border border-[#e5e6e6]/10 rounded-xl px-5 py-4 focus:border-brand/50 focus:ring-1 focus:ring-brand/50 outline-none transition-all placeholder:text-[#e5e6e6]/20 text-[#e5e6e6]"
                      />
                      <p id="email-helper" className="sr-only">We will use this email to contact you regarding your request.</p>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="lead-company" className="text-[10px] uppercase tracking-widest font-bold text-[#e5e6e6]/40 ml-1">Company Name</label>
                      <input
                        required
                        type="text"
                        id="lead-company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full bg-[#0a061c]/50 border border-[#e5e6e6]/10 rounded-xl px-5 py-4 focus:border-brand/50 focus:ring-1 focus:ring-brand/50 outline-none transition-all placeholder:text-[#e5e6e6]/20 text-[#e5e6e6]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="lead-message" className="text-[10px] uppercase tracking-widest font-bold text-[#e5e6e6]/40 ml-1">Tell us more (Optional)</label>
                      <textarea
                        id="lead-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="What are your outbound goals?"
                        aria-describedby="message-helper"
                        className="w-full bg-[#0a0a0a]/50 border border-[#e5e6e6]/10 rounded-xl px-5 py-4 focus:border-brand/50 focus:ring-1 focus:ring-brand/50 outline-none transition-all placeholder:text-[#e5e6e6]/20 text-[#e5e6e6] resize-none"
                      />
                      <p id="message-helper" className="sr-only">Briefly describe your requirements or goals.</p>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 bg-[#e5e6e6] text-[#020108] font-bold py-4 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-3 group"
                    >
                      <span className="text-[12px] uppercase tracking-widest">Submit Request</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-10 h-10 text-brand" />
                  </div>
                  <h2 className="font-heading text-4xl text-[#e5e6e6] mb-4">You’re on the list.</h2>
                  <p className="font-body text-[#e5e6e6]/60 leading-relaxed max-w-xs">
                    One of our delivery experts will personally review your request. Expect to hear from us within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
