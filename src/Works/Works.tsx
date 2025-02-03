import styles from "./Works.module.scss";
import SingleWork from "../Components/SingleWork/SingleWork";
import aksim from "../images/test.PNG"
import brainQuest from "../images/brainQuest.JPG";
import digitalAgency from "../images/digitalAgency.JPG";
import mogo from "../images/mogo.PNG";

const Works = () => {
  return (
    <section id="work" className={styles.section}>
      <SingleWork
        description="Fullstack web app"
        name="Aksim"
        backgroundImg={aksim}
      />
      <SingleWork
        description="React tailwind app"
        name="Digital Agency"
        backgroundImg={digitalAgency}
      />
      <SingleWork
        description="React app"
        name="BRAIN QUEST"
        backgroundImg={brainQuest}
      />
      <SingleWork
        description="Static web site"
        name="MoGo"
        backgroundImg={mogo}
      />
    </section>
  );
};

export default Works;
