import { Button, Form, Input } from "antd";
import inputPrefix from "@/assets/inputPrefix.png";
import inputSuffix from "@/assets/inputSuffix.png";
import styles from "./index.module.less";

const IconImage = ({ src, onClick }) => (
  <img className={styles.icon} src={src} onClick={onClick} />
);

export default (props) => {
  return (
    <div className={styles.container}>
      <div>
        <Form form={props.form} layout="inline">
          {/* <Form.Item name="count">
            <Input
              className={styles.container__input}
              prefix={
                <IconImage
                  src={inputPrefix}
                  onClick={props.substractCount}
                />
              }
              suffix={<IconImage src={inputSuffix} onClick={props.addCount} />}
            />
          </Form.Item> */}
          <Form.Item>
            <Button className={styles.container__btn} onClick={props.userMint}>
              Mint
            </Button>
          </Form.Item>
        </Form>
        {/* <p className={styles.container__info}>Please contact your wallet</p> */}
      </div>
    </div>
  );
};
