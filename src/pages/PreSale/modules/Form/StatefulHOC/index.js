import { Form } from "antd";
import { get } from "lodash";
import { useState } from "react";
import { USDT2META } from "../../../../../config/config";
import { useWeb3Context } from "../../../../../vendors/hooks/web3-context";

export default (Stateless) => (props) => {
  const { address, provider } = useWeb3Context();
  const [form] = Form.useForm();
  const [isValid, setIsValid] = useState(false);

  const onFinish = (values) => {
    console.log("Current Address: ", address);
    console.log("Web3 Provider: ", provider);
    console.log("Received values of form: ", values);
  };
  const handleJoinBtnClick = () => {
    console.log("join button was clicked");
  };
  const onValuesChange = (vals) => {
    // 校验表单是否已填写完全
    const values = form.getFieldsValue();
    const isNotEmpty = (item) => item !== undefined && item !== ""; // 不认为 0 是空值
    const validate = (values) => Object.values(values).every(isNotEmpty);
    setIsValid(validate(values));

    // 计算 META
    const fromValue = get(values, "from", "");
    const metaValue = fromValue ? Number(USDT2META(fromValue)).toFixed() : 0;
    form.setFieldsValue({
      ...values,
      to: metaValue
    });
  };

  const states = {
    form,
    isValid
  };
  const callback = {
    onFinish,
    handleJoinBtnClick,
    onValuesChange
  };
  return <Stateless {...props} {...states} {...callback} />;
};
