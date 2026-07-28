"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="O mnie" subtitle="Poznaj osobę stojącą za projektami" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mt-8"
        >
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-accent-gold/30">
              <Image
                src="/images/patryk.png"
                alt="Patryk Mikołajczak — twórca stron internetowych"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 128px, 160px"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 space-y-4 text-foreground-secondary text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-foreground">Nazywam się Patryk Mikołajczak.</strong>{" "}
              Studiuję informatykę w Warszawie, a na co dzień zajmuję się{" "}
              <strong className="text-foreground">tworzeniem stron internetowych</strong>{" "}
              i aplikacji webowych.
            </p>
            <p>
              Specjalizuję się w nowoczesnych technologiach takich jak React, Next.js,
              TypeScript i Node.js. Każdy projekt traktuję indywidualnie — od pomysłu,
              przez projekt, aż po wdrożenie.
            </p>
            <p>
              Lubię, kiedy technologia służy ludziom. Dlatego stawiam na prostotę,
              czytelność i realne efekty.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
