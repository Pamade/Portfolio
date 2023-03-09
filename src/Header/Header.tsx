import { useContext } from "react";
import ShowingTextEveryLetter from "../Components/ShowingTextEveryLetter/ShowingTextEveryLetter";
import styles from "./header.module.scss";
import { IsTypingInitial } from "../Context/InitialTypingContext";
const Header = () => {
  const {
    state: { isInitialTyping },
  } = useContext(IsTypingInitial);

  return (
    <header className={styles.header}>
      <div
        className={`${styles.typing_header_container} ${
          isInitialTyping ? styles.typing : styles.not_typing
        }`}
      >
        <ShowingTextEveryLetter
          textFirst="Fullstack"
          textSecond="Developer"
          heading="h1"
        />
      </div>
    </header>
  );
};

export default Header;
