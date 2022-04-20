import styles from "./index.module.less";
import NFTBox1 from '@/assets/NFTBox1.png';
import NFTBox2 from '@/assets/NFTBox2.png';
import NFTBox3 from '@/assets/NFTBox3.png';
import NFTBox4 from '@/assets/NFTBox4.png';

export default () => {
  return (
    <div className={styles.container}>
      <img src={NFTBox1} />
      <img src={NFTBox2} />
      <img src={NFTBox3} />
      <img src={NFTBox4} />
    </div>
  );
};
