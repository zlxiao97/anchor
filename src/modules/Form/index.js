import { get } from "lodash";
import { Button, Form } from "antd";
import Currency from "@/components/Currency";
import AmountInput from "@/components/AmountInput";
import button from "@/data/preSale/button.json";
import currency from "@/data/preSale/currency";

import styles from "./index.module.less";

export default (props) => {
  const { form, isValid } = props;

  const formProps = {
    form,
    className: styles.form,
    layout: "vertical",
    onValuesChange: props.onValuesChange,
    onFinish: (values) =>
      props.joinPresale({
        from: +values.from,
        to: +values.to
      })
  };
  return (
    <div className={styles.container}>
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
            type="primary"
            className={styles.form__btn}
            onClick={props.approve}
          >
            {button.approve}
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={!isValid}
            className={styles.form__btn}
          >
            {button.join}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
