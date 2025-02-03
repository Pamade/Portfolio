import SectionHeading from "../Components/SectionHeading/SectionHeading";
import styles from "./Contact.module.scss";
import MotionBottomToTopSlide from "../Components/MotionBottomToTopSlide/MotionBottomToTopSlide";
import { FiArrowDownRight } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <SectionHeading name="Contact" alignItems="flex-end" widthLine={30} />
      <MotionBottomToTopSlide className={styles.text_container}>
        <h3 className={styles.h3}>
          <span>Let's</span>
          <span>work</span>
          <span>together</span>
        </h3>
        <p className={styles.text}>
          I will consider every Frontend and Fullstack proposal
        </p>
        <FiArrowDownRight className={styles.arrow} />
        <a className={styles.email} href="mailto:mikolajczakkontakt@gmail.com">
          mikolajczakkontakt@gmail.com
        </a>
      </MotionBottomToTopSlide>
    </section>
  );
};

export default Contact;
