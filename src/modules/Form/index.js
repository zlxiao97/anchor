import { get } from "lodash";
import { Button, Form } from "antd";
import Currency from "@/components/Currency";
import AmountInput from "@/components/AmountInput";
import button from "@/data/preSale/button.json";
import currency from "@/data/preSale/currency";
import { useWeb3Context } from "@/vendors/hooks/web3-context";
import useFormValidate from '@/hooks/useFormValidate'
import styles from "./index.module.less";

export default ({}) => {
  const [form] = Form.useForm();
  const { address, provider } = useWeb3Context();
  const [isValid, onValuesChange] = useFormValidate(form);

  /**
   * 用户点击 Approve 按钮
   * @param  {Object} values 表单数据
   */
  const approve = async (values) => {
    console.log("Current Address: ", address);
    console.log("Web3 Provider: ", provider);
    console.log("Received values of form: ", values);
  };

  /**
   * 用户点击 Join PreSale 按钮
   */
  const joinPresale = async () => {
    console.log("join button was clicked");
  };

  const formProps = {
    form,
    className: styles.form,
    layout: "vertical",
    onValuesChange,
    onFinish: approve
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
            disabled={!isValid}
            htmlType="submit"
            className={styles.form__btn}
          >
            {button.approve}
          </Button>
        </Form.Item>
        <Form.Item>
          <Button onClick={joinPresale} className={styles.form__btn}>
            {button.join}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
