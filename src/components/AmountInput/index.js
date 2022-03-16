import { Input } from "antd";
import { get } from "lodash";
import { isAmount } from "../../utils/utils";

export default (props) => {
  const onChange = (e) => {
    const value = get(e, "target.value", "");
    if (isAmount(value)) return props.onChange(e);
  };
  return (
    <Input
      {...props}
      autoComplete="off"
      placeholder="0.0"
      onChange={onChange}
    />
  );
};
