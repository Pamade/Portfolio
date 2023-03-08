import styles from "./Works.module.scss";
import SingleWork from "../Components/SingleWork/SingleWork";
import ujccap from "../images/ujccap.JPG";
import brainQuest from "../images/brainQuest.JPG";
import gameFinder from "../images/gameFinder.JPG";

const Works = () => {
  return (
    <section className={styles.section}>
      <SingleWork
        description="Fullstack web app"
        name="UJCCAP"
        backgroundImg={ujccap}
      />
      <SingleWork
        description="React app"
        name="BRAIN QUEST"
        backgroundImg={brainQuest}
      />
      <SingleWork
        description="REACT APP"
        name="GAME FINDER"
        backgroundImg={gameFinder}
      />
    </section>
  );
};

export default Works;
