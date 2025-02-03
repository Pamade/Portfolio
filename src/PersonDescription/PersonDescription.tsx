import styles from "./personDescription.module.scss";
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import MotionBottomToTopSlide from "../Components/MotionBottomToTopSlide/MotionBottomToTopSlide";
export const PersonDescription = ({
  displayName,
}: {
  displayName: boolean;
}) => {
  return (
    <div className={styles.content_header_mobile}>
      {displayName && (
        <SectionHeading
          name="Patryk Mikołajczak"
          alignItems="flex-start"
          widthLine={30}
        />
      )}
      <MotionBottomToTopSlide>
        <p className={styles.description}>
          My name is Patryk, and I am 22 years old. I am currently studying Computer Science at the University of Economics and Human Sciences in Warsaw. 
          I am passionate about developing both frontend and backend solutions. In my projects, I work with technologies such as React, TypeScript, Java Spring, and MySQL.
        </p>
      </MotionBottomToTopSlide>
    </div>
  );
};

export const H2Heading = () => {
  return (
    <h2 className={styles.h2}>
      <span>Fullstack Developer</span>{" "}
    </h2>
  );
};
