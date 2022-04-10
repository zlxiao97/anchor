import { Typography } from "antd";
import styles from "./index.module.less";

const { Title } = Typography;

export default ({ icon, title }) => {
  return (
    <div className={styles.wrapper}>
      <img src={icon} />
      <Title level={3}>{title}</Title>
    </div>
  );
};
