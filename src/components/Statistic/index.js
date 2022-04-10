import { Statistic } from "antd";
import classNames from "classnames";
import styles from "./index.module.less";

export default (props) => {
  const isHorizontal = props.layout === "horizontal";
  return (
    <div
      className={classNames({
        [styles.horizontal]: isHorizontal
      })}
    >
      <Statistic
        {...props}
        title={isHorizontal ? props.title + ":" : props.title}
      />
    </div>
  );
};
