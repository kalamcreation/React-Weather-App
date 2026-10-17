"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import BackgroundFX from "@/components/BackgroundFX";
import { Send, User, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const fields = [
    { name: "name", label: "Name", type: "text", icon: User, placeholder: "John Doe" },
    { name: "email", label: "Email", type: "email", icon: Mail, placeholder: "john@example.com" },
  ];

  // Common input classes for both light and dark mode
  const inputClass = "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-cyan-500 focus:border-transparent transition-all";

  return (
    <>
      <BackgroundFX />
      {/* Container width max-w-6xl but form max-w-xl for better professional look */}
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-center gradient-text mb-3"
        >
          Get in Touch
        </motion.h1>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-10">
          Have a question or feedback? We'd love to hear from you.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          // Added max-w-xl mx-auto and increased padding & shadow
          className="glass rounded-3xl p-6 md:p-10 space-y-6 max-w-xl mx-auto w-full shadow-xl dark:shadow-none"
        >
          {fields.map(({ name, label, type, icon: Icon, placeholder }) => (
            <div key={name}>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                <Icon className="h-4 w-4 text-sky-600 dark:text-cyan-400" /> {label}
              </label>
              <input
                name={name}
                type={type}
                value={form[name]}
                onChange={handleChange}
                required
                placeholder={placeholder}
                className={inputClass}
              />
            </div>
          ))}

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
              <MessageSquare className="h-4 w-4 text-sky-600 dark:text-cyan-400" /> Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              placeholder="Write your message here..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-lg"
          >
            <Send className="h-5 w-5" /> Send Message
          </button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center text-emerald-600 dark:text-emerald-400 text-sm font-medium bg-emerald-50 dark:bg-emerald-500/10 py-2 rounded-lg"
            >
              ✅ Thank you! Your message has been sent.
            </motion.p>
          )}
        </motion.form>
      </div>
    </>
  );
}