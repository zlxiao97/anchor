import { Form } from "antd";
import { useState } from "react";

export default (Stateless) => {
  return (props) => {
    const [form] = Form.useForm();
    const [isValid, setIsValid] = useState(false);

    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };
    const handleJoinBtnClick = () => {
      console.log("join button was clicked");
    };
    const onValuesChange = () => {
      // 校验表单是否已填写完全
      const values = form.getFieldsValue();
      // 不认为 0 是空值
      const isNotEmpty = (item) => item !== undefined && item !== "";
      const validate = (values) => Object.values(values).every(isNotEmpty);
      setIsValid(validate(values));
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
};
