import styles from "./SingleProjectPreview.module.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { IconType } from "react-icons/lib/esm/iconBase";
import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import MenuBottom from "../MenuBottom/MenuBottom";
import MotionBottomToTopSlide from "../MotionBottomToTopSlide/MotionBottomToTopSlide";

interface Props {
  technologiesIcons: IconType[];
  description: string;
  githubLink: string;
  liveView: string;
}

const SingleProjectPreview = ({
  technologiesIcons,
  description,
  githubLink,
  liveView,
}: Props) => {
  const displayTechnologiesIcons = technologiesIcons.map((Item) => (
    <Item key={String(Item)} className={styles.icon} />
  ));

  return (
    <section className={styles.section}>
      <div>
        <SectionHeading
          className={styles.heading}
          name="TECHNOLOGIES"
          widthLine={30}
        />
        <MotionBottomToTopSlide className={styles.technologies_container}>
          {displayTechnologiesIcons}
        </MotionBottomToTopSlide>
      </div>
      <div>
        <SectionHeading
          className={styles.heading}
          name="DESCRIPTION"
          widthLine={30}
        />
        <MotionBottomToTopSlide className={styles.technologies_container}>
          <p className={styles.description}>{description}</p>
        </MotionBottomToTopSlide>
      </div>
      <div>
        <SectionHeading
          className={styles.heading}
          name="CODE AND LIVE"
          widthLine={30}
        />
        <MotionBottomToTopSlide className={styles.technologies_container}>
          <div className={styles.code_and_live_container}>
            <a target="_blank" href={githubLink} rel="noreferrer">
              <AiFillGithub className={`${styles.icon} ${styles.code_icon}`} />
            </a>
            <a target="_blank" href={liveView} rel="noreferrer">
              <TbWorldWww className={`${styles.icon} ${styles.code_icon}`} />
            </a>
          </div>
        </MotionBottomToTopSlide>
      </div>
      <MenuBottom variation="project" />
    </section>
  );
};

export default SingleProjectPreview;
