import { useEffect, useState } from "react";
import styles from "./showingTextEveryLetter.module.scss";

interface Props {
  text: string;
  fontSizeRem: number;
  heading: "h1" | "h3";
}

const ShowingTextEveryLetter = ({ text, heading, fontSizeRem }: Props) => {
  const [displayText, setDisplayText] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      i++;
      setDisplayText((prev) => [...prev, text[i - 1]]);
      if (i === text.length) {
        clearInterval(intervalId);
      }
    }, 100);
  }, []);

  const Heading = heading as keyof JSX.IntrinsicElements;

  return (
    <Heading
      style={{ fontSize: fontSizeRem + "rem" }}
      className={styles.heading}
    >
      {displayText.map((item) => (
        <span>{item}</span>
      ))}
    </Heading>
  );
};

export default ShowingTextEveryLetter;
