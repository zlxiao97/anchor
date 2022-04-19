import classNames from "classnames";
import styles from "./index.module.less";

export default (props) => {
  const containerClass = classNames(styles.module, props.className);
  const contentClass = classNames(styles.module__content, props.contentClassName);
  return (
    <section className={containerClass}>
      <div className={contentClass}>{props.children}</div>
    </section>
  );
};
