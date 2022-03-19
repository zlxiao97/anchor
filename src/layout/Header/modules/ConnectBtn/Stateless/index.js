import { Button } from "antd";
import styles from "./index.module.css";

export default ({ connect, address }) => {
  if (address) return <Button className={styles.btn}>{address}</Button>;
  return (
    <Button className={styles.btn} onClick={connect}>
      Connect Wallet
    </Button>
  );
};
