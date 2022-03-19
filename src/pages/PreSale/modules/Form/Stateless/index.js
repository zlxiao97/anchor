import { Button, Form } from "antd";
import styles from "./index.module.css";
import Currency from "../../../../../components/Currency";
import AmountInput from "../../../../../components/AmountInput";
import button from "../../../../../data/preSale/button.json";
import currency from "../../../../../data/preSale/currency";
import { get } from "lodash";

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
          <AmountInput
            prefix={
              <Currency
                imageSrc={get(currency, "from.icon")}
                text={get(currency, "from.text")}
              />
            }
          />
        </Form.Item>
        <Form.Item label="To" name="to">
          <AmountInput
            prefix={
              <Currency
                imageSrc={get(currency, "to.icon")}
                text={get(currency, "to.text")}
              />
            }
            disabled={true}
          />
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
            {button.approve}
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
            {button.join}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
