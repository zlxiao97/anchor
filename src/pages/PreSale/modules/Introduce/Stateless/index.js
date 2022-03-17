import Steps from "../../../../../components/Steps";
import styles from "./index.module.css";

export default ({ steps }) => {
  return (
    <>
      <h1 className={styles.title}>META</h1>
      <p className={styles.desc}>
        Use your USDT to buy more META and enjoy your game.
      </p>
      <Steps steps={steps} />
    </>
  );
};
