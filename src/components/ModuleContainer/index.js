import classNames from "classnames";
import styles from "./index.module.less";

export default (props) => {
  const containerClass = classNames(styles.module, props.className);
  return (
    <section className={containerClass}>
      <div className={styles.module__content}>{props.children}</div>
    </section>
  );
};
