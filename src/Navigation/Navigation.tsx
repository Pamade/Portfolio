import styles from "./navigation.module.scss";

interface Link {
  label: "Work" | "Skills" | "Contact";
  path: "about-me" | "work" | "skills" | "contact";
}

const Links: Link[] = [
  { label: "Work", path: "work" },
  { label: "Skills", path: "skills" },
  { label: "Contact", path: "contact" },
];

const Navigation = () => {
  const handleScroll = (path: Link["path"]) => {
    const element = document.getElementById(path);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {Links.map((link) => (
          <li className={styles.item} onClick={() => handleScroll(link.path)}>
            <span className={styles.span}>{link.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
