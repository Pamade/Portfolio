import React from "react";
import styles from "./personDescription.module.scss";
import SectionHeading from "../Components/SectionHeading/SectionHeading";
export const PersonDescription = ({
  displayName,
}: {
  displayName: boolean;
}) => {
  return (
    <div className={styles.content_header_mobile}>
      {displayName && (
        <SectionHeading name="Patryk Mikołajczak" alignItems="flex-start" />
      )}
      <p className={styles.description}>
        I am 20 years old from Poland. I have been studying as a hobbyist since
        2020. I graduated from high school with the profile of IT technican. I
        am a hardworking, independent and communicative person. I want to
        develop my skills as a frontend / full stack developer
      </p>
    </div>
  );
};

export const H2Heading = () => {
  return (
    <h2 className={styles.h2}>
      <span>I am 20 years old fullstack developer</span>{" "}
      <span>from Poland</span> <span>looking for a first Job</span>
    </h2>
  );
};
