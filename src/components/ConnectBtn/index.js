import { Button } from "antd";
import useWeb3Connect from "@/hooks/useWeb3Connect";
import styles from "./index.module.less";

export default () => {
  const [address, connect] = useWeb3Connect();
  
  if (address) return <Button className={styles.btn}>{address}</Button>;
  return (
    <Button className={styles.btn} onClick={connect}>
      Connect Wallet
    </Button>
  );
};
