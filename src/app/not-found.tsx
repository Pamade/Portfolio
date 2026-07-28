import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl sm:text-9xl font-bold text-accent-gold mb-4">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl text-foreground font-semibold mb-3">
          Strona nie znaleziona
        </h2>
        <p className="text-foreground-secondary mb-8 max-w-md mx-auto">
          Wygląda na to, że ta strona nie istnieje. Może została przeniesiona lub
          usunięta.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gold text-background font-semibold rounded-xl hover:brightness-110 transition-all duration-200"
        >
          Wróć do strony głównej
        </Link>
      </div>
    </div>
  );
}
