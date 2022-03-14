import { Button, Form, Input } from "antd";
import styles from "./index.module.css";
import usdt from "../../../../assets/icon-usdt.png";
import one from "../../../../assets/icon-one.png";
import Currency from "../../../../components/Currency";

export default () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const handleJoinBtnClick = () => {
    console.log("join button was clicked");
  };
  return (
    <div className={styles.wrap}>
      <Form className={styles.form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="From" name="from">
          <Input
            autocomplete="off"
            prefix={<Currency imageSrc={usdt} text="USDT" />}
          />
        </Form.Item>
        <Form.Item label="To" name="to">
          <Input
            autocomplete="off"
            prefix={<Currency imageSrc={one} text="ONE" />}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            className={styles.btn}
            style={{
              marginTop: "3%"
            }}
          >
            Approve
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            onClick={handleJoinBtnClick}
            className={styles.btn}
            style={{
              marginTop: "10%"
            }}
          >
            Join IDO
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
