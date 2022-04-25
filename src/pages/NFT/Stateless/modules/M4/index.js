import styles from "./index.module.less";
import NFTBox1 from "@/assets/NFTBox1.png";
import NFTBox2 from "@/assets/NFTBox2.png";
import NFTBox3 from "@/assets/NFTBox3.png";
import NFTBox4 from "@/assets/NFTBox4.png";

export default () => {
  return (
    <div className={styles.container}>
      <img className={styles.container__item} src={NFTBox1} />
      <img className={styles.container__item} src={NFTBox2} />
      <img className={styles.container__item} src={NFTBox3} />
      <img className={styles.container__item} src={NFTBox4} />
    </div>
  );
};
