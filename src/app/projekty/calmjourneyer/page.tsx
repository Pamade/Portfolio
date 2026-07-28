import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectPageClient from "@/components/ProjectPageClient";

const project = projects.find((p) => p.slug === "calmjourneyer");

export const metadata: Metadata = {
  title: "CalmJourneyer — aplikacja webowa do medytacji",
  description:
    "CalmJourneyer to aplikacja webowa do medytacji z AI, timerem i statystykami. Zobacz case study projektu z React, TypeScript i Node.js.",
  alternates: {
    canonical: "https://mikolajczakpatryk.pl/projekty/calmjourneyer",
  },
  openGraph: {
    title: "CalmJourneyer — aplikacja webowa do medytacji | Patryk Mikołajczak",
    description:
      "Aplikacja webowa do medytacji z AI generującą unikalne sesje. React, TypeScript, Node.js, PostgreSQL.",
  },
};

export default function CalmJourneyerPage() {
  if (!project) return null;
  return <ProjectPageClient project={project} />;
}
