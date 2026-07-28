"use client";

import { motion } from "framer-motion";
import { FiGlobe, FiCode, FiRefreshCw, FiMessageCircle } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: FiGlobe,
    title: "Strona wizytówka / firmowa",
    description:
      "Nowoczesna, responsywna strona, która przedstawi Twoją firmę w najlepszym świetle i przyciągnie klientów.",
  },
  {
    icon: FiCode,
    title: "Aplikacja webowa",
    description:
      "Dedykowane narzędzia i platformy dopasowane do potrzeb Twojego biznesu — od pomysłu do wdrożenia.",
  },
  {
    icon: FiRefreshCw,
    title: "Modernizacja istniejącej strony",
    description:
      "Poprawa wydajności, SEO, bezpieczeństwa i wyglądu obecnej strony bez potrzeby budowania od zera.",
  },
  {
    icon: FiMessageCircle,
    title: "Konsultacja i doradztwo",
    description:
      "Nie jesteś pewien, co będzie najlepszym rozwiązaniem? Doradzę bez zobowiązań.",
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Czym mogę Ci pomóc"
          subtitle="Konkretne rozwiązania dla Twojego biznesu"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-surface border border-border rounded-xl p-6 hover:bg-surface-hover transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center mb-4 group-hover:bg-accent-gold/20 transition-colors">
                <service.icon className="w-5 h-5 text-accent-gold" />
              </div>
              <h3 className="text-foreground font-semibold text-base sm:text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
