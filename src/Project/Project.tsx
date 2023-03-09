import React, { useState } from "react";
import styles from "./Project.module.scss";
import HoveredLine from "../Components/HoveredLine/HoveredLine";
import SingleProjectPreview from "../Components/SingleProjectPreview/SingleProjectPreview";
import { IconType } from "react-icons/lib/esm/iconBase";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";

interface Props {
  name: string;
  backgroundImg: string;
  liveView: string;
  technologiesIcons: IconType[];
  description: string;
  githubLink: string;
}

const Project = ({
  name,
  backgroundImg,
  liveView,
  technologiesIcons,
  description,
  githubLink,
}: Props) => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  return (
    <div className={styles.div}>
      <section
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className={styles.background}
      >
        <div className={styles.content}>
          <div className={styles.text_content}>
            <h2 className={styles.name}>{name}</h2>
            <a
              onMouseEnter={() => setIsLinkHovered(true)}
              onMouseLeave={() => setIsLinkHovered(false)}
              target="_blank"
              href={liveView}
              className={styles.view_live}
              rel="noreferrer"
            >
              VIEW LIVE
            </a>
            <HoveredLine isLinkHovered={isLinkHovered} />
          </div>

          <motion.div
            animate={{
              y: [-10, 10, -10, -10],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              times: [3, 2, 3, 2, 3],
              repeat: Infinity,
            }}
          >
            <AiOutlineArrowDown className={styles.arrow} />
          </motion.div>
        </div>
      </section>
      <SingleProjectPreview
        technologiesIcons={technologiesIcons}
        description={description}
        liveView={liveView}
        githubLink={githubLink}
      />
    </div>
  );
};

export default Project;
