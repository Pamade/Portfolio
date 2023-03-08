import styles from "./DesktopLayout.module.scss";
import Navigation from "../../Navigation/Navigation";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import {
  H2Heading,
  PersonDescription,
} from "../../PersonDescription/PersonDescription";
import Works from "../../Works/Works";
const DesktopLayout = () => {
  return (
    <section id="desktop_layout">
      <H2Heading />
      <SectionHeading name="Patryk Mikołajczak" alignItems="flex-start" />
      <div className={styles.nav_about}>
        <Navigation />
        <PersonDescription displayName={false} />
      </div>
      <SectionHeading name="Works" alignItems="flex-end" />
      <Works />
    </section>
  );
};

export default DesktopLayout;
