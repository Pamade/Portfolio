import React from "react";
import styles from "./SingleProjectPreview.module.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { IconType } from "react-icons/lib/esm/iconBase";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import MenuBottom from "../MenuBottom/MenuBottom";

interface Props {
  technologiesIcons: IconType[];
  description: string;
  githubLink: string;
  liveView: string;
}

const MotionBottomToTopSlide = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className={styles.technologies_container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

const SingleProjectPreview = ({
  technologiesIcons,
  description,
  githubLink,
  liveView,
}: Props) => {
  const displayTechnologiesIcons = technologiesIcons.map((Item) => (
    <Item className={styles.icon} />
  ));

  return (
    <section className={styles.section}>
      <div>
        <SectionHeading
          className={styles.heading}
          name="TECHNOLOGIES"
          widthLine={30}
        />
        <MotionBottomToTopSlide>
          {displayTechnologiesIcons}
        </MotionBottomToTopSlide>
      </div>
      <div>
        <SectionHeading
          className={styles.heading}
          name="DESCRIPTION"
          widthLine={30}
        />
        <MotionBottomToTopSlide>
          <p className={styles.description}>{description}</p>
        </MotionBottomToTopSlide>
      </div>
      <div>
        <SectionHeading
          className={styles.heading}
          name="CODE AND LIVE"
          widthLine={30}
        />
        <MotionBottomToTopSlide>
          <div className={styles.code_and_live_container}>
            <a target="_blank" href={githubLink} rel="noreferrer">
              {" "}
              <AiFillGithub className={`${styles.icon} ${styles.code_icon}`} />
            </a>
            <a target="_blank" href={liveView} rel="noreferrer">
              <TbWorldWww className={`${styles.icon} ${styles.code_icon}`} />
            </a>
          </div>
        </MotionBottomToTopSlide>
      </div>
      <MenuBottom />
    </section>
  );
};

export default SingleProjectPreview;
