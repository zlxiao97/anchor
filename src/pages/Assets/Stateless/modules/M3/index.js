import { Button, Form, Input } from "antd";
import inputPrefix from "@/assets/inputPrefix.png";
import inputSuffix from "@/assets/inputSuffix.png";
import Statistic from "@/components/Statistic";
import styles from "./index.module.less";

const IconImage = ({ src, onClick }) => (
  <img className={styles.icon} src={src} onClick={onClick} />
);

export default (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__border}>
        <span>Activation Code</span>
      </div>
      <div>
        <Form form={props.form} layout="inline">
          <Form.Item name="count">
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
          </Form.Item>
          <Form.Item>
            <Button className={styles.container__btn} onClick={props.userMint}>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <p className={styles.container__info}>input activation code</p>        
      </div>
      <div>
        <Form form={props.form} layout="inline">
          <Form.Item name="count">
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
          </Form.Item>
          <Form.Item>
            <Button className={styles.container__btn} onClick={props.userMint}>
              Get
            </Button>
          </Form.Item>
        </Form>
        <p className={styles.container__info}>Create your activation code</p>        
      </div>
      <div className={styles.container__value}>
          <Statistic layout="horizontal" title="Number of Invitees" value={0} precision={0} />
          <Statistic layout="horizontal" title="Earn Expand Factor" value={1.0} precision={1} />
        </div>
    </div>
    
  );
};
