"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Link
        href={`/projekty/${project.slug}`}
        className="group block bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent-gold/30 hover:shadow-[0_0_30px_-5px_rgba(251,224,148,0.15)] transition-all duration-300"
      >
        {/* Image with gradient overlay */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-accent-gold/10 to-accent-blue/10">
          <Image
            src={project.imageUrl}
            alt={`${project.name} — ${project.tagline}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              {project.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <p className="text-foreground-secondary text-sm mb-4 line-clamp-2">
            {project.tagline}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-surface-hover text-foreground-secondary border border-border">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-gold group-hover:gap-2.5 transition-all duration-200">
            Zobacz projekt
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
