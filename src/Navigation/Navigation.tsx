import styles from "./navigation.module.scss";
import MotionBottomToTopSlide from "../Components/MotionBottomToTopSlide/MotionBottomToTopSlide";
interface Link {
  label: "Work" | "Skills" | "Contact";
  path: "work" | "skills" | "contact";
}

const Links: Link[] = [
  { label: "Work", path: "work" },
  { label: "Skills", path: "skills" },
  { label: "Contact", path: "contact" },
];

const Navigation = () => {
  const handleScroll = (path: Link["path"]) => {
    const element = document.getElementById(path);
    console.log(element);
    // window.scrollTo(100)
    element?.scrollIntoView();
  };

  return (
    <MotionBottomToTopSlide className={styles.nav}>
      <nav>
        <ul className={styles.list}>
          {Links.map((link) => (
            <li key={link.label} className={styles.item}>
              <span
                onClick={() => handleScroll(link.path)}
                className={styles.span}
              >
                {link.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </MotionBottomToTopSlide>
  );
};

export default Navigation;
