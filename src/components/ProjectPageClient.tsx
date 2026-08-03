"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import JsonLd from "./JsonLd";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectPageClient({ project }: Props) {
  const [imgError, setImgError] = useState(false);
  const otherProject = projects.find((p) => p.slug !== project.slug);
  const paragraphs = project.description.split("\n\n");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: project.name,
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          description: project.tagline,
          url: `https://mikolajczakpatryk.pl/projekty/${project.slug}`,
          author: {
            "@type": "Person",
            name: "Patryk Mikołajczak",
          },
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary hover:text-accent-gold transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              Powrót do portfolio
            </Link>
            <span className="text-sm font-medium text-accent-gold">
              {project.name}
            </span>
          </div>
        </div>

        {/* Hero with image */}
        <section className="relative h-[50vh] sm:h-[60vh] flex items-end overflow-hidden">
          {/* Background image or gradient fallback */}
          {!imgError ? (
            <Image
              src={project.imageUrl}
              alt={`Zrzut ekranu projektu ${project.name}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/15 to-accent-blue/15" />
          )}

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 pb-10 sm:pb-16 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl font-bold text-foreground mb-3"
            >
              {project.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl text-foreground-secondary mb-4"
            >
              {project.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-accent-gold border border-accent-gold/30"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
          {/* O projekcie */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">O projekcie</h2>
            <div className="space-y-4 text-foreground-secondary leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.section>

          {/* Technologie */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Zastosowane technologie
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="bg-surface border border-border rounded-xl p-4"
                >
                  <span className="text-accent-gold font-semibold text-sm block mb-1">
                    {tech}
                  </span>
                  <span className="text-foreground-secondary text-sm">
                    {project.techDescriptions[tech] || ""}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Linki */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Linki</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-gold text-background font-semibold rounded-xl hover:brightness-110 transition-all duration-200"
              >
                <FiExternalLink className="w-4 h-4" />
                Zobacz live
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-medium rounded-xl hover:bg-surface transition-all duration-200"
                >
                  <FiGithub className="w-4 h-4" />
                  Kod na GitHubie
                </a>
              )}
            </div>
          </motion.section>

          {/* CTA + inny projekt */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center py-12 border-t border-border"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">
              Podobają Ci się takie projekty?
            </h3>
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gold text-background font-semibold rounded-xl hover:brightness-110 transition-all duration-200 mb-6"
            >
              Opowiedz o swoim
            </Link>

            {otherProject && (
              <div className="mt-8">
                <p className="text-foreground-secondary text-sm mb-2">
                  Zobacz też:
                </p>
                <Link
                  href={`/projekty/${otherProject.slug}`}
                  className="inline-flex items-center gap-1.5 text-accent-gold hover:text-accent-gold/80 transition-colors font-medium"
                >
                  {otherProject.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            )}
          </motion.section>
        </div>
      </div>
    </>
  );
}
