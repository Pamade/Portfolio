import React, { useState } from "react";
import styles from "./Project.module.scss";
import HoveredLine from "../Components/HoveredLine/HoveredLine";
interface Props {
  name: string;
  backgroundImg: string;
}
const Project = ({ name, backgroundImg }: Props) => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  return (
    <div className={styles.div}>
      <section
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className={styles.background}
      >
        <div className={styles.content}>
          <h2 className={styles.name}>{name}</h2>
          <a
            onMouseEnter={() => setIsLinkHovered(true)}
            onMouseLeave={() => setIsLinkHovered(false)}
            target="_blank"
            href="https://ujccap-client.vercel.app/"
            className={styles.view_live}
            rel="noreferrer"
          >
            VIEW LIVE
          </a>
          <HoveredLine isLinkHovered={isLinkHovered} />
        </div>
      </section>
      {/* <section>//here div for technologies //description //go back</section> */}
    </div>
  );
};

export default Project;
