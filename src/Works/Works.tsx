import styles from "./Works.module.scss";
import SingleWork from "../Components/SingleWork/SingleWork";

export interface LoadedComponentsData {
  name: string;
  description: string;
  position: number;
}

const Works = () => {
  return (
    <section className={styles.section}>
      <SingleWork description="Fullstack web app" name="UJCCAP" />
      <SingleWork description="description 2" name="2" />
      <SingleWork description="description 3" name="3" />
    </section>
  );
};

export default Works;
