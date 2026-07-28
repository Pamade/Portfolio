"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "React", Icon: FaReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Prisma", Icon: SiPrisma },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Figma", Icon: SiFigma },
  { name: "Java", Icon: FaJava },
];

export default function Skills() {
  return (
    <section className="py-20 sm:py-32 px-4 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Technologie, których używam"
          subtitle="Narzędzia, które stosuję na co dzień"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-8">
            {skills.map(({ name, Icon }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-foreground-secondary" />
                <span className="text-xs text-foreground-secondary text-center">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-foreground-secondary/60 text-sm text-center mt-10 max-w-lg mx-auto">
            Ale wybór technologii zawsze dopasowuję do projektu.
            Liczy się efekt, nie framework.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
