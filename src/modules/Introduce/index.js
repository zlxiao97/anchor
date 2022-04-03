import Steps from "@/components/Steps";
import steps from "@/data/preSale/steps.json";
import introduce from "@/data/preSale/introduce.json";
import styles from "./index.module.less";

export default () => {
  return (
    <>
      <h1 className={styles.title}>{introduce.title}</h1>
      <p className={styles.desc}>{introduce.description}</p>
      <Steps steps={steps} />
    </>
  );
};
