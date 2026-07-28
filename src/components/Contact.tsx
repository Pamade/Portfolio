"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiPhone, FiMail } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silent fallback — otwórz klienta poczty
      form.setAttribute("action", "mailto:kontakt@mikolajczakpatryk.pl");
      form.submit();
    }
  };

  return (
    <section id="kontakt" className="py-20 sm:py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          title="Zacznijmy rozmowę"
          subtitle="Masz pomysł na stronę? Napisz — doradzę bez zobowiązań."
          align="center"
        />

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 p-8 bg-surface border border-accent-gold/30 rounded-xl text-center"
          >
            <p className="text-accent-gold font-semibold text-lg mb-2">
              Wiadomość wysłana!
            </p>
            <p className="text-foreground-secondary">
              Dziękuję. Odpiszę w ciągu 24 godzin.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 mt-10">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Imię i nazwisko"
                required
                className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-foreground placeholder-foreground-secondary/50 focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/30 transition-all duration-200"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Adres email"
                required
                className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-foreground placeholder-foreground-secondary/50 focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/30 transition-all duration-200"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Opisz swój projekt — kilka zdań wystarczy"
                rows={5}
                required
                className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-foreground placeholder-foreground-secondary/50 focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/30 transition-all duration-200 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent-gold text-background font-semibold rounded-xl hover:brightness-110 transition-all duration-200 shadow-lg shadow-accent-gold/20"
            >
              <FiSend className="w-4 h-4" />
              Wyślij wiadomość — odpowiem w 24h
            </button>
          </form>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-3 mt-8"
        >
          <p className="text-foreground-secondary text-sm">
            — lub skontaktuj się bezpośrednio —
          </p>
          <a
            href="tel:512476919"
            className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-gold/80 transition-colors"
          >
            <FiPhone className="w-4 h-4" />
            512 476 919
          </a>
          <a
            href="mailto:kontakt@mikolajczakpatryk.pl"
            className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-gold/80 transition-colors"
          >
            <FiMail className="w-4 h-4" />
            kontakt@mikolajczakpatryk.pl
          </a>
        </motion.div>
      </div>
    </section>
  );
}
