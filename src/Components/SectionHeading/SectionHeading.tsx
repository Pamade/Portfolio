import React, { useState } from "react";
import styles from "./SectionHeading.module.scss";
import { motion } from "framer-motion";

interface Props {
  name: string;
  alignItems: "flex-start" | "flex-end";
}

const SectionHeading = ({ name, alignItems }: Props) => {
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

  return (
    <section className={styles.section}>
      <div style={{ alignItems }} className={styles.container}>
        <div className={styles.text_container}>
          {isAnimationCompleted && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.8 }}
              whileInView={{ width: "100%" }}
            >
              <p className={styles.p}>
                <span>{name}</span>
              </p>
            </motion.div>
          )}
        </div>
        <motion.div
          className={styles.line}
          viewport={{ once: true, amount: 0.8 }}
          style={{ alignItems }}
          initial={{ width: 0 }}
          whileInView={{ width: "30%" }}
          onAnimationComplete={() => setIsAnimationCompleted(true)}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default SectionHeading;
