import styles from "./index.module.less";
import NFTBox1 from "@/assets/NFTBox1.png";
import NFTBox2 from "@/assets/NFTBox2.png";
import NFTBox3 from "@/assets/NFTBox3.png";
import NFTBox4 from "@/assets/NFTBox4.png";

export default (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__item}>
        <img src={NFTBox1} />
        <span className={styles.container__number}>
          number:{props.numbers[0]}
        </span>
      </div>
      <div className={styles.container__item}>
        <img src={NFTBox2} />
        <span className={styles.container__number}>
          number:{props.numbers[1]}
        </span>
      </div>
      <div className={styles.container__item}>
        <img src={NFTBox3} />
        <span className={styles.container__number}>
          number:{props.numbers[2]}
        </span>
      </div>
      <div className={styles.container__item}>
        <img src={NFTBox4} />
        <span className={styles.container__number}>
          number:{props.numbers[3]}
        </span>
      </div>
      <div className={styles.container__border}>
        <span>Account assets</span>
      </div>
    </div>
  );
};
