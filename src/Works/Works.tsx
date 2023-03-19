import styles from "./Works.module.scss";
import SingleWork from "../Components/SingleWork/SingleWork";
import ujccap from "../images/ujccap.JPG";
import brainQuest from "../images/brainQuest.JPG";
import gameFinder from "../images/gameFinder.JPG";
import digitalAgency from "../images/digitalAgency.JPG";

const Works = () => {
  return (
    <section id="work" className={styles.section}>
      <SingleWork
        description="Fullstack web app"
        name="UJCCAP"
        backgroundImg={ujccap}
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
        description="React app"
        name="GAME FINDER"
        backgroundImg={gameFinder}
      />
    </section>
  );
};

export default Works;
