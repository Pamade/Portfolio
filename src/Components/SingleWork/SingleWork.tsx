import React, { useRef, useEffect, useState } from "react";
import styles from "./SingleWork.module.scss";
import GrowingText from "../GrowingText/GrowingText";

import { useNavigate } from "react-router-dom";
import HoveredLine from "../HoveredLine/HoveredLine";
interface Props {
  name: string;
  description: string;
  backgroundImg: string;
}

const SingleWork = ({ name, description, backgroundImg }: Props) => {
  const [isAtVerticalCenter, setIsAtVerticalCenter] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [isGoToProjectClicked, setIsGoToProjectClicked] = useState(false);
  const navigate = useNavigate();
  const refPosition = useRef<HTMLDivElement>(null);
  const windowHeight = window.innerHeight;

  const formula = (top: number, bottom: number) => {
    const halfOfWindow = windowHeight / 2;
    return top - 30 < halfOfWindow && bottom + 50 > halfOfWindow;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const { isIntersecting, boundingClientRect } = entry;
      const { top, bottom } = boundingClientRect;
      if (isIntersecting) {
      }
      setIsAtVerticalCenter(formula(top, bottom));
    });
    if (refPosition.current) {
      observer.observe(refPosition.current);
    }

    const handleScroll = () => {
      if (refPosition.current) {
        const { top, bottom } = refPosition.current.getBoundingClientRect();
        setIsAtVerticalCenter(formula(top, bottom));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const nameRedefine = name.split(" ").join("-").toLowerCase();
    setIsGoToProjectClicked(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      navigate(`/${nameRedefine}`);
    }, 800);
  };

  return (
    <div ref={refPosition} className={styles.section}>
      {isAtVerticalCenter && (
        <div className={styles.div}>
          <h3 className={styles.name}>
            <GrowingText text={name} />
          </h3>
          <div className={styles.description}>
            <GrowingText text={description} />
          </div>
          <div
            onMouseEnter={() => setIsLinkHovered(true)}
            onMouseLeave={() => setIsLinkHovered(false)}
            onClick={handleClick}
            className={styles.link}
          >
            <GrowingText text={"VIEW PROJECT"} />
          </div>
          <HoveredLine isLinkHovered={isLinkHovered} />
        </div>
      )}
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className={`${
          isAtVerticalCenter
            ? `${styles.background} ${styles.background_gray}`
            : styles.background
        } ${
          name === "BRAIN QUEST" && isAtVerticalCenter ? styles.middle : null
        }`}
      ></div>

      <div
        className={`${
          isGoToProjectClicked ? styles.bg_full_window : styles.bg_full_hidden
        }`}
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>
    </div>
  );
};

export default SingleWork;
