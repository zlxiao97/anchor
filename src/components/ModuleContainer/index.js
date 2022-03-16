import classNames from "classnames";
import styles from "./index.module.css";

export default (props) => {
  const containerClass = classNames(styles.module, props.className);
  return (
    <section className={containerClass}>
      <div className={styles.content}>{props.children}</div>
    </section>
  );
};
