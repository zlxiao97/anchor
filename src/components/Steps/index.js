import styles from './index.module.css'

export const Step = ({ no, title, desc }) => {
  return (
    <div>
      <h2 className={styles.title}>
        <span className={styles.no}>{no}</span>
        <span>{title}</span>
      </h2>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default ({ steps }) => (
  <div className={styles.steps}>
    {steps.map((step, index) => (
      <Step {...step} no={index + 1} />
    ))}
  </div>
);
