import styles from "./index.module.css";

export default (props) => {
  return (
    <section className={styles.module}>
      <div className={styles.content}>{props.children}</div>
    </section>
  );
};
