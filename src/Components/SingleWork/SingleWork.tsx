import React, { useRef, useEffect, useState } from "react";
import ujcappSmall from "../../images/ujcapp-small.JPG";
import styles from "./SingleWork.module.scss";
import GrowingText from "../GrowingText/GrowingText";
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

      const { top, bottom } = boundingClientRect;
      const windowHeight = window.innerHeight;

      setIsAtVerticalCenter(
        isIntersecting &&
          top - 100 < windowHeight / 2 &&
          bottom + 70 > windowHeight / 2
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
          top - 100 < windowHeight / 2 && bottom + 70 > windowHeight / 2
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
          <h3 className={styles.name}>
            <GrowingText text={name} />
          </h3>
          <p className={styles.description}>
            <GrowingText text={description} />
          </p>
          <Link to={`/${name.toLowerCase()}`} className={styles.link}>
            <GrowingText text={"VIEW PROJECT"} />
          </Link>
        </div>
      )}
      <div
        className={`${
          isAtVerticalCenter
            ? `${styles.background} ${styles.background_gray}`
            : styles.background
        }`}
      ></div>
    </div>
  );
};

export default React.memo(SingleWork);
