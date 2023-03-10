import styles from "./MenuBottom.module.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { IsTypingInitial } from "../../Context/InitialTypingContext";
interface Props {
  variation: "project" | "main-page";
}

const MenuBottom = ({ variation }: Props) => {
  const {
    state: { setIsInitialTyping },
  } = useContext(IsTypingInitial);
  const name = variation === "project" ? "MENU" : "CONNECT";
  return (
    <div className={styles.menu}>
      <SectionHeading className={styles.heading} name={name} widthLine={100} />
      <div className={styles.container}>
        <ul className={styles.list}>
          {variation === "project" ? (
            <>
              {" "}
              <li>
                <Link
                  onClick={() => setIsInitialTyping(true)}
                  className={styles.link}
                  to="/"
                >
                  BACK
                </Link>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="mailto:mikolajczakkontakt@gmail.com"
                >
                  CONTACT
                </a>
              </li>{" "}
            </>
          ) : (
            <>
              <li>
                <a
                  className={styles.link}
                  href="https://github.com/pamade"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="mailto:mikolajczakkontakt@gmail.com"
                >
                  CONTACT
                </a>
              </li>
            </>
          )}
        </ul>
        <h6 className={styles.name}>Patryk Mikołajczak</h6>
      </div>
    </div>
  );
};

export default MenuBottom;
