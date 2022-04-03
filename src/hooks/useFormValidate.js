import { useState } from "react";
import { get } from "lodash";
import { USDT2META } from "@/config/config";

export default (form) => {
  const [isValid, setIsValid] = useState(false);

  const onValuesChange = (vals) => {
    // 计算 META
    const values = form.getFieldsValue();
    const fromValue = get(values, "from", "");
    const metaValue = fromValue ? Number(USDT2META(fromValue)).toFixed() : 0;
    const newFormValue = {
      ...values,
      to: metaValue
    };

    // 校验表单是否已填写完全
    const isNotEmpty = (item) => item !== undefined && item !== ""; // 不认为 0 是空值
    const validate = (values) => Object.values(values).every(isNotEmpty);
    setIsValid(validate(newFormValue));

    form.setFieldsValue(newFormValue);
  };

  return [isValid, onValuesChange];
};
