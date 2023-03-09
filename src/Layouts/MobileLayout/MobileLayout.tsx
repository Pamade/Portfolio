import React from "react";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import Navigation from "../../Navigation/Navigation";
import { PersonDescription } from "../../PersonDescription/PersonDescription";
import Works from "../../Works/Works";
const MobileLayout = () => {
  return (
    <section id="mobile_layout">
      <PersonDescription displayName={true} />
      <Navigation />
      <SectionHeading name="Works" alignItems="flex-end" widthLine={30} />
      <Works />
    </section>
  );
};

export default MobileLayout;
