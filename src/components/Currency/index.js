import styles from "./index.module.css";

export default (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={props.imageSrc} alt="BigONE Token" />
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};
