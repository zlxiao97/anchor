import styles from "./index.module.less";
import NFTIllustration from "@/assets/NFTIllustration.gif";

export default () => {
  return (
    <div className={styles.container}>
      <img className={styles.illustration} src={NFTIllustration} />
    </div>
  );
};
