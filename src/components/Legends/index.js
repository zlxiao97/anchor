import { Statistic } from "antd";
import { get } from "lodash";
import styles from "./index.module.less";

const Square = (props) => {
  return (
    <i
      className={styles.legends__square}
      style={{
        backgroundColor: get(props, "color", "#000")
      }}
    />
  );
};

export default (props) => {
  return (
    <div className={styles.legends}>
      {get(props, "data", []).map((item) => {
        const { title, color, value } = item;
        return (
          <Statistic
            {...item}
            title={
              <h3>
                <Square color={color} />
                {title}
              </h3>
            }
            value={value}
            valueStyle={{
              fontSize: 18
            }}
          />
        );
      })}
    </div>
  );
};
