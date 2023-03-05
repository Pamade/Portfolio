import styles from "./DesktopLayout.module.scss";
import Navigation from "../../Navigation/Navigation";
import {
  H2Heading,
  Name,
  PersonDescription,
} from "../../PersonDescription/PersonDescription";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
const DesktopLayout = () => {
  return (
    <section id="desktop_layout">
      <H2Heading />
      <Name />
      <div className={styles.nav_about}>
        <Navigation />
        <PersonDescription displayName={false} />
      </div>
      <SectionHeading name="Works" number="1" alignSelf="flex-end" />
    </section>
  );
};

export default DesktopLayout;
