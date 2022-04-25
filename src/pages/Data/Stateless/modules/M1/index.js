import STARRY from "@/assets/STARRY.png";
import gifts from "@/assets/gifts.png";
import takeit from "@/assets/takeit.png";
import illustrationLeft from "@/assets/illustrationLeft.png";
import illustrationRight from "@/assets/illustrationRight.png";
import styles from "./index.module.less";

export default ({ isMobile }) => (
  <div className={styles.container}>
    <img className={styles["container__STARRY"]} src={STARRY} alt="" />
    <img className={styles["container__gifts"]} src={gifts} alt="" />
    <img className={styles["container__takeit"]} src={takeit} alt="" />
    {isMobile ? null : (
      <>
        <img
          className={styles["container__ileft"]}
          src={illustrationLeft}
          alt=""
        />
        <img
          className={styles["container__iright"]}
          src={illustrationRight}
          alt=""
        />
      </>
    )}
  </div>
);
