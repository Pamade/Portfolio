import React from "react";
import styles from "./MenuBottom.module.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const MenuBottom = () => {
  return (
    <div className={styles.menu}>
      <SectionHeading className={styles.heading} name="MENU" widthLine={100} />
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <Link className={styles.link} to="/">
              BACK
            </Link>
          </li>
          <li className={styles.list_item}>
            <a
              className={styles.link}
              href="mailto:mikolajczakkontakt@gmail.com"
            >
              CONTACT
            </a>
          </li>
        </ul>
        <h6 className={styles.name}>&copy; Patryk Mikołajczak</h6>
      </div>
    </div>
  );
};

export default MenuBottom;
