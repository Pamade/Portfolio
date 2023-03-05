import styles from "./SectionHeading.module.scss";
interface Props {
  number: string;
  name: string;
  alignSelf: "flex-start" | "flex-end";
}

const SectionHeading = ({ name, number, alignSelf }: Props) => {
  return (
    <p style={{ alignSelf }} className={styles.p}>
      <span>{number}</span>
      <span>{name}</span>
    </p>
  );
};

export default SectionHeading;
