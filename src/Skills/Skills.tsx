import SectionHeading from "../Components/SectionHeading/SectionHeading";
import styles from "./Skills.module.scss";
import { FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import MotionBottomToTopSlide from "../Components/MotionBottomToTopSlide/MotionBottomToTopSlide";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const SkillsLogos = [
  FaReact,
  FaNodeJs,
  FaSass,
  SiTypescript,
  SiMysql,
  FaJava
];

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <SectionHeading name="Skills" alignItems="flex-start" widthLine={30} />
      <MotionBottomToTopSlide className={styles.logos_container}>
        {SkillsLogos.map((Logo) => (
          <Logo key={String(Logo)} className={styles.logo} />
        ))}
      </MotionBottomToTopSlide>
    </section>
  );
};

export default Skills;
