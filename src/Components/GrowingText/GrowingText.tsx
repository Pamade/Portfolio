import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const GrowingText = ({ text }: { text: string }) => {
  const [revealedLetters, setRevealedLetters] = useState(0);
  useEffect(() => {
    if (revealedLetters < text.length) {
      const timeoutId = setTimeout(() => {
        setRevealedLetters((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [revealedLetters, text.length]);

  return (
    <>
      {text.split("").map((letter, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: "100%" }}
          animate={index < revealedLetters ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, delay: index * 0.01 }}
          style={{ display: "inline-block" }}
        >
          {letter}
        </motion.div>
      ))}
    </>
  );
};
export default GrowingText;
