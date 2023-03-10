import styles from "./DesktopLayout.module.scss";
import Navigation from "../../Navigation/Navigation";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import {
  H2Heading,
  PersonDescription,
} from "../../PersonDescription/PersonDescription";
import Works from "../../Works/Works";
import Skills from "../../Skills/Skills";
import Contact from "../../Contact/Contact";
import MenuBottom from "../../Components/MenuBottom/MenuBottom";
const DesktopLayout = () => {
  return (
    <section id="desktop_layout">
      <H2Heading />
      <SectionHeading
        name="Patryk Mikołajczak"
        alignItems="flex-start"
        widthLine={30}
      />
      <div className={styles.nav_about}>
        <Navigation />
        <PersonDescription displayName={false} />
      </div>
      <SectionHeading name="Works" alignItems="flex-end" widthLine={30} />
      <Works />
      <Skills />
      <Contact />
      <MenuBottom variation="main-page" />
    </section>
  );
};

export default DesktopLayout;
