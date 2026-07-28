import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const baseUrl = "https://mikolajczakpatryk.pl";

export const metadata: Metadata = {
  title: {
    default: "Strony internetowe i aplikacje webowe — Patryk Mikołajczak",
    template: "%s | Patryk Mikołajczak",
  },
  description:
    "Szukasz kogoś, kto stworzy stronę internetową lub aplikację webową? Jestem Patryk Mikołajczak, web developer. Zobacz moje portfolio i napisz!",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  keywords: [
    "strony internetowe",
    "tworzenie stron internetowych",
    "aplikacje webowe",
    "web developer",
    "portfolio",
    "Patryk Mikołajczak",
    "Next.js",
    "React",
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Patryk Mikołajczak — Portfolio",
    title: "Strony internetowe i aplikacje webowe — Patryk Mikołajczak",
    description:
      "Szukasz kogoś, kto stworzy stronę internetową lub aplikację webową? Sprawdź moje portfolio.",
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Patryk Mikołajczak — tworzę strony internetowe i aplikacje webowe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strony internetowe i aplikacje webowe — Patryk Mikołajczak",
    description:
      "Szukasz kogoś, kto stworzy stronę internetową lub aplikację webową? Sprawdź moje portfolio.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Patryk Mikołajczak",
            jobTitle: "Twórca stron internetowych",
            url: baseUrl,
            email: "kontakt@mikolajczakpatryk.pl",
            image: `${baseUrl}/images/patryk.webp`,
            sameAs: [
              "https://github.com/Pamade",
            ],
            knowsAbout: [
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "Tworzenie stron internetowych",
            ],
            description:
              "Tworzę nowoczesne strony internetowe i aplikacje webowe. Student informatyki z portfolio opartym o React i Next.js.",
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Patryk Mikołajczak — Portfolio",
            url: baseUrl,
            description:
              "Portfolio web developera. Tworzenie stron internetowych i aplikacji webowych.",
          }}
        />
        {children}
      </body>
    </html>
  );
}
