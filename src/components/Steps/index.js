import styles from "./index.module.less";
import { v4 as uuidv4 } from "uuid";

const StepTitle = ({ no, title }) => {
  return (
    <>
      <span className={styles.step__no}>{no}</span>
      <span>{title}</span>
    </>
  );
};

export const Step = (props) => {
  const { no, title, desc, isMobile } = props;
  return (
    <div className={styles.step}>
      {isMobile ? (
        <h4 className={styles.step__title}>
          <StepTitle {...props} />
        </h4>
      ) : (
        <h2 className={styles.step__title}>
          <StepTitle {...props} />
        </h2>
      )}

      <p className={styles.step__desc}>{desc}</p>
    </div>
  );
};

export default ({ steps, isMobile }) => (
  <div className={styles.steps}>
    {steps.map((step, index) => (
      <Step {...step} key={uuidv4()} no={index + 1} isMobile={isMobile} />
    ))}
  </div>
);
