import styles from "./index.module.less";
import { v4 as uuidv4 } from "uuid";

export const Step = ({ no, title, desc }) => {
  return (
    <div className={styles.step}>
      <h2 className={styles.step__title}>
        <span className={styles.step__no}>{no}</span>
        <span>{title}</span>
      </h2>
      <p className={styles.step__desc}>{desc}</p>
    </div>
  );
};

export default ({ steps }) => (
  <div className={styles.steps}>
    {steps.map((step, index) => (
      <Step {...step} key={uuidv4()} no={index + 1} />
    ))}
  </div>
);
