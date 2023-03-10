import { useEffect, useState, useContext } from "react";
import styles from "./showingTextEveryLetter.module.scss";
import { IsTypingInitial } from "../../Context/InitialTypingContext";
type H1orH3 = "h1" | "h3";

interface Props {
  textFirst: string;
  textSecond: string;
  heading: H1orH3;
}

const ShowingTextEveryLetter = ({ textFirst, textSecond, heading }: Props) => {
  const {
    state: { setIsInitialTyping },
  } = useContext(IsTypingInitial);
  const [displayTextFirst, setDisplayTextFirst] = useState<string[]>([]);
  const [displayTextSecond, setDisplayTextSecond] = useState<string[]>([]);

  const IterateOverText = async (
    text: string,
    setText: React.Dispatch<React.SetStateAction<string[]>>
  ): Promise<void> => {
    let i = 0;
    const intervalId = setInterval(() => {
      i++;
      setText((prev) => [...prev, text[i - 1]]);
      if (i === text.length) {
        clearInterval(intervalId);
      }
    }, 100);
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, text.length * 100);
    });
  };

  const InvokeTexts = async () => {
    await IterateOverText(textFirst, setDisplayTextFirst);
    await IterateOverText(textSecond, setDisplayTextSecond);
  };

  useEffect(() => {
    const displayText = async () => {
      await InvokeTexts();
      setIsInitialTyping(false);
    };
    displayText();
  }, []);

  return (
    <h1 className={`${styles[heading]}`}>
      <DisplayText displayText={displayTextFirst} />
      <DisplayText displayText={displayTextSecond} second />
    </h1>
  );
};

interface PropsText {
  displayText: string[];
  second?: boolean;
}

const DisplayText = ({ displayText, second }: PropsText) => {
  return (
    <p className={`${second ? styles.second : null}`}>
      {displayText.map((item, index) => (
        <span key={index} className={styles.span}>
          {item}
        </span>
      ))}
    </p>
  );
};

export default ShowingTextEveryLetter;
