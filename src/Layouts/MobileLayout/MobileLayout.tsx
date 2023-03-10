import React from "react";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import Navigation from "../../Navigation/Navigation";
import { PersonDescription } from "../../PersonDescription/PersonDescription";
import Works from "../../Works/Works";
import Skills from "../../Skills/Skills";
import Contact from "../../Contact/Contact";
import MenuBottom from "../../Components/MenuBottom/MenuBottom";
const MobileLayout = () => {
  return (
    <section id="mobile_layout">
      <PersonDescription displayName={true} />
      <Navigation />
      <SectionHeading name="Works" alignItems="flex-end" widthLine={30} />
      <Works />
      <Skills />
      <Contact />
      <MenuBottom variation="main-page" />
    </section>
  );
};

export default MobileLayout;
