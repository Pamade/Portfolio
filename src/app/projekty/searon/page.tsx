import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectPageClient from "@/components/ProjectPageClient";

const project = projects.find((p) => p.slug === "searon");

export const metadata: Metadata = {
  title: "Searon — serwis jachtów i skuterów wodnych | Patryk Mikołajczak",
  description:
    "Searon to profesjonalna strona serwisu jachtów MERCURY Marine. Zobacz case study projektu z React i TypeScript.",
  alternates: {
    canonical: "https://mikolajczakpatryk.pl/projekty/searon",
  },
  openGraph: {
    title: "Searon — serwis jachtów i skuterów wodnych | Patryk Mikołajczak",
    description:
      "Strona serwisu jachtów z React i TypeScript. Responsywny design i optymalizacja SEO.",
  },
};

export default function SearonPage() {
  if (!project) return null;
  return <ProjectPageClient project={project} />;
}
