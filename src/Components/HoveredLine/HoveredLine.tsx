import React from "react";
import { motion } from "framer-motion";
const HoveredLine = ({ isLinkHovered }: { isLinkHovered: boolean }) => {
  return isLinkHovered ? (
    <motion.div
      className="line"
      style={{ margin: "0 auto" }}
      viewport={{ once: true, amount: 0.8 }}
      initial={{ width: 0 }}
      whileInView={{ width: "30%" }}
      transition={{ duration: 0.4 }}
    />
  ) : (
    <motion.div
      className="line"
      style={{ margin: "0 auto" }}
      viewport={{ once: true, amount: 0.8 }}
      initial={{ width: 0 }}
      whileInView={{ width: 0 }}
      transition={{ duration: 0.4 }}
    />
  );
};

export default HoveredLine;
