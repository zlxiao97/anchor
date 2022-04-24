import styles from "./index.module.less";
import NFTIllustration from "@/assets/NFTIllustration.gif";
// import NTFVideo from "@/assets/NTFVideo.mov";

export default () => {
  return (
    <div className={styles.container}>
      {/* <img className={styles.illustration} src={NFTIllustration} />
       */}
      {/* <video
        className={styles.illustration}
        src={NTFVideo}
        width="400"
        autoPlay={true}
        controls={false}
        muted={true}
      ></video> */}
    </div>
  );
};
