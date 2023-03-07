import React, { useRef, useEffect, useState } from "react";
import ujcappSmall from "../../images/ujcapp-small.JPG";
import styles from "./SingleWork.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  description: string;
}

const SingleWork = ({ name, description }: Props) => {
  const [isAtVerticalCenter, setIsAtVerticalCenter] = useState(false);

  const refPosition = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const { isIntersecting, boundingClientRect } = entry;
      console.log(boundingClientRect);
      const { top, bottom } = boundingClientRect;
      const windowHeight = window.innerHeight;

      setIsAtVerticalCenter(
        isIntersecting && top < windowHeight / 2 && bottom > windowHeight / 2
      );
    });
    if (refPosition.current) {
      observer.observe(refPosition.current);
    }
    const handleScroll = () => {
      if (refPosition.current) {
        const { top, bottom } = refPosition.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        setIsAtVerticalCenter(
          top < windowHeight / 2 && bottom > windowHeight / 2
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={refPosition} className={styles.section}>
      {isAtVerticalCenter && (
        <div className={styles.div}>
          <motion.div
            // style={{ position: "fixed", top: "50%", color: "red" }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 5 }}
            transition={{ duration: 0.5 }}
            // viewport={{ once: true, amount: 0.8 }}
            whileInView={{ width: "100%" }}
          >
            <h3>{name}</h3>
            <p>{description}</p>
            <Link to={`/${name.toLowerCase()}`}>VIEW PROJECT</Link>
          </motion.div>
        </div>
      )}
      <div className={styles.background}></div>
    </div>
  );
};

export default React.memo(SingleWork);
