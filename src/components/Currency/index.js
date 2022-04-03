import styles from "./index.module.less";

export default (props) => {
  return (
    <div className={styles.currency}>
      <img className={styles.currency__img} src={props.imageSrc} alt="BigONE Token" />
      <p className={styles.currency__text}>{props.text}</p>
    </div>
  );
};
