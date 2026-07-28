import { FiGithub, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-foreground font-semibold">Patryk Mikołajczak</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:512476919"
            className="text-foreground-secondary hover:text-accent-gold transition-colors"
            aria-label="Telefon"
          >
            <FiPhone className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Pamade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary hover:text-accent-gold transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="mailto:kontakt@mikolajczakpatryk.pl"
            className="text-foreground-secondary hover:text-accent-gold transition-colors"
            aria-label="Email"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-foreground-secondary/60 text-xs text-center sm:text-right">
          &copy; {year} Patryk Mikołajczak. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
