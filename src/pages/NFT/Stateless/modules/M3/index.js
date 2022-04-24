import { Button, Form, Input } from "antd";
import inputPrefix from "@/assets/inputPrefix.png";
import inputSuffix from "@/assets/inputSuffix.png";
import styles from "./index.module.less";

const IconImage = ({ src }) => <img className={styles.icon} src={src} />;

export default () => {
  return (
    <div className={styles.container}>
      <div>
        <Form layout="inline">
          <Form.Item>
            <Input
              className={styles.container__input}
              prefix={<IconImage src={inputPrefix} />}
              suffix={<IconImage src={inputSuffix} />}
            />
          </Form.Item>
          <Form.Item>
            <Button className={styles.container__btn}>max</Button>
          </Form.Item>
        </Form>
        <p className={styles.container__info}>Please contact your wallet</p>
      </div>
    </div>
  );
};
