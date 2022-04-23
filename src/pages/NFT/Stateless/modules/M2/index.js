import styles from "./index.module.less";
import NFTIllustration from "@/assets/NFTIllustration.gif";
// import NFTVideo from "@/assets/NFTVideo.mov";

export default () => {
  return (
    <div className={styles.container}>
      <img className={styles.illustration} src={NFTIllustration} />
      {/* <video
        id="video"
        width="640"
        height="480"
        muted
        controls={false}
        autoPlay="autoplay"
        preload="auto"
      >
        <source src={NFTVideo} />
        您的浏览器不支持 HTML5 video 标签。
      </video> */}
    </div>
  );
};
