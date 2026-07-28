export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  techDescriptions: Record<string, string>;
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  ogImageUrl: string;
}

export const projects: Project[] = [
  {
    slug: "tubiala",
    name: "TuBiała.pl",
    tagline: "Portal informacyjny Białej Podlaskiej",
    description: `TuBiała.pl to w pełni funkcjonalny portal miejski dla Białej Podlaskiej — od zera zaprojektowany, zbudowany i wdrożony przeze mnie. To największy i najbardziej złożony projekt w moim portfolio.

Platforma łączy w sobie: system zarządzania treścią (artykuły, kategorie), ogłoszenia lokalne, oferty pracy, wydarzenia, rozkład jazdy MZK na żywo, kolejki NFZ, interaktywną mapę, prognozę pogody, trasy rowerowe oraz katalog miejsc i usług.

Architektura oparta o Next.js 14 (App Router), Prisma + PostgreSQL, NextAuth v5, Stripe do płatności, Leaflet do map, Tailwind CSS z autorskim systemem designu. Portal jest w pełni responsywny, zoptymalizowany pod SEO i dostępny na tubiala.pl.`,
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Stripe", "React"],
    techDescriptions: {
      "Next.js": "App Router, Server Components, API Routes, middleware",
      TypeScript: "Cały projekt — od bazy po interfejs",
      Prisma: "ORM z PostgreSQL, migracje, seedowanie",
      PostgreSQL: "Relacyjna baza danych dla całego portalu",
      "Tailwind CSS": "Autorski system designu (kolory, cienie, typografia)",
      Stripe: "Checkout sessions, webhooki, subskrypcje reklam",
      React: "Server & Client Components, Suspense, Error Boundaries",
    },
    liveUrl: "https://tubiala.pl",
    githubUrl: "",
    imageUrl: "/images/tubiala.webp",
    ogImageUrl: "/images/tubiala-og.webp",
  },
  {
    slug: "calmjourneyer",
    name: "CalmJourneyer",
    tagline: "Aplikacja webowa do medytacji z AI",
    description: `CalmJourneyer to aplikacja webowa, która wykorzystuje sztuczną inteligencję do generowania unikalnych sesji medytacyjnych. Użytkownik wybiera cel (sen, redukcja stresu, koncentracja), czas trwania, pozycję i preferowany głos — a AI tworzy spersonalizowany scenariusz.

Projekt wymagał zaprojektowania i zbudowania pełnego stacka: od interfejsu użytkownika w React i TypeScript, przez backend w Spring Boot (Java), po bazę MySQL. Zintegrowałem płatności Stripe, wysyłkę e-maili przez SendGrid, generowanie audio przez UnrealSpeech oraz komunikację z modelem Gemini 2.5 Pro.

Szczególną uwagę poświęciłem UX: oddychający interfejs, automatyczny dobór kolorów i dźwięków tła do charakteru sesji, czytelny dashboard z historią i statystykami. Aplikacja jest w pełni responsywna i dostępna.`,
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "MySQL", "Stripe", "AI"],
    techDescriptions: {
      React: "Szybki, komponentowy interfejs z płynnymi animacjami",
      TypeScript: "Bezpieczeństwo typów przy rozbudowanej logice biznesowej",
      Java: "Solidny, wydajny backend w Spring Boot",
      "Spring Boot": "REST API, autoryzacja, integracja z zewnętrznymi API",
      MySQL: "Relacyjna baza danych dla użytkowników, sesji i statystyk",
      Stripe: "Subskrypcje i płatności online",
      AI: "Generowanie treści przez Gemini 2.5 Pro + synteza mowy UnrealSpeech",
    },
    liveUrl: "https://clientcalmjournyertoshowcase.vercel.app/",
    githubUrl: "https://github.com/Pamade/CalmJourneyer_client/",
    imageUrl: "/images/calmjourneyer.jpg",
    ogImageUrl: "/images/calmjourneyer.jpg",
  },
  {
    slug: "searon",
    name: "Searon",
    tagline: "Profesjonalny serwis jachtów i skuterów wodnych",
    description: `Searon to autoryzowany serwis MERCURY Marine specjalizujący się w serwisie silników zaburtowych i stacjonarnych, detailingu ceramicznym oraz kompleksowej obsłudze jachtów motorowych i żaglowych.

Strona została zaprojektowana z myślą o przejrzystości i profesjonalizmie — klient ma szybki dostęp do zakresu usług, danych kontaktowych i informacji o marce. Zastosowałem nowoczesny, czysty design z naciskiem na czytelność i szybkie ładowanie.

Interfejs zbudowany w React z TypeScript, responsywny i zoptymalizowany pod kątem SEO. To strona wizytówka, która buduje zaufanie i zachęca do kontaktu.`,
    technologies: ["React", "TypeScript", "Sass"],
    techDescriptions: {
      React: "Nowoczesny, komponentowy interfejs użytkownika",
      TypeScript: "Statyczne typowanie dla stabilności i łatwiejszego utrzymania",
      Sass: "Rozbudowane style z modulem, zmiennymi i mixinami",
    },
    liveUrl: "https://searon.pl",
    githubUrl: "",
    imageUrl: "/images/searon.jpg",
    ogImageUrl: "/images/searon.jpg",
  },
];
