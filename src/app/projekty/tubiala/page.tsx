import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectPageClient from "@/components/ProjectPageClient";

const project = projects.find((p) => p.slug === "tubiala");

export const metadata: Metadata = {
  title: "TuBiała.pl — portal informacyjny Białej Podlaskiej | Patryk Mikołajczak",
  description:
    "TuBiała.pl to portal miejski Białej Podlaskiej zbudowany w Next.js, TypeScript i Prisma. Zobacz case study największego projektu w portfolio.",
  alternates: {
    canonical: "https://mikolajczakpatryk.pl/projekty/tubiala",
  },
  openGraph: {
    title: "TuBiała.pl — portal informacyjny Białej Podlaskiej",
    description:
      "W pełni funkcjonalny portal miejski: newsy, ogłoszenia, MZK, NFZ, mapa, pogoda. Next.js, Prisma, PostgreSQL.",
  },
};

export default function TubialaPage() {
  if (!project) return null;
  return <ProjectPageClient project={project} />;
}
