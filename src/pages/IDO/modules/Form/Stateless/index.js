import { Button, Form } from "antd";
import styles from "./index.module.css";
import usdt from "../../../../../assets/icon-usdt.png";
import one from "../../../../../assets/icon-one.png";
import Currency from "../../../../../components/Currency";
import AmountInput from "../../../../../components/AmountInput";

export default ({
  isValid,
  form,
  onFinish,
  handleJoinBtnClick,
  onValuesChange
}) => {
  const formProps = {
    form,
    className: styles.form,
    layout: "vertical",
    onValuesChange,
    onFinish
  };
  return (
    <div className={styles.wrap}>
      <Form {...formProps}>
        <Form.Item label="From" name="from">
          <AmountInput prefix={<Currency imageSrc={usdt} text="USDT" />} />
        </Form.Item>
        <Form.Item label="To" name="to">
          <AmountInput prefix={<Currency imageSrc={one} text="ONE" />} />
        </Form.Item>
        <Form.Item>
          <Button
            disabled={!isValid}
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
