"use client";

import { motion } from "framer-motion";

interface Props {
  number?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeading({
  number,
  title,
  subtitle,
  align = "left",
}: Props) {
  const alignClass =
    align === "center"
      ? "items-center text-center"
      : align === "right"
        ? "items-end text-right"
        : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${alignClass} mb-8 sm:mb-12`}
    >
      {number && (
        <span className="text-sm font-mono text-accent-blue mb-1">
          {number}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
        {title}
      </h2>
      <div className="w-8 h-0.5 bg-accent-gold mt-3 rounded-full" />
      {subtitle && (
        <p className="text-foreground-secondary text-sm sm:text-base mt-3 max-w-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
