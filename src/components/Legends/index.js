import { Statistic } from "antd";
import { get } from "lodash";
import styles from "./index.module.css";

const Square = (props) => {
  return (
    <i
      className={styles.square}
      style={{
        backgroundColor: get(props, "color", "#000")
      }}
    />
  );
};



export default (props) => {
  return (
    <div className={styles.container}>
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
