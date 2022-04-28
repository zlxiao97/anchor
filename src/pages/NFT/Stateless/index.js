import ModuleContainer from "@/components/ModuleContainer";
import PageLayout from "@/components/PageLayout";
import layouts from "./config/layouts";
import M1 from "./modules/M1";
import M2 from "./modules/M2";
import M3 from "./modules/M3";
import styles from "./index.module.less";
import M4 from "./modules/M4";
import NFTTitle from "@/assets/NFTTitle.png";
import NTFVideo from "@/assets/NTFVideo.mp4";
import NFTIllustration from "@/assets/NFTIllustration.png";

export default (props) => {
  return (
    <>
      {/* <img className={styles.illustration} src={NFTIllustration} /> */}
      <div className={styles.wrapper}>
        <PageLayout layouts={layouts}>
          <div key="m2">
            <ModuleContainer
              className={styles.module}
              contentClassName={styles.module__m2}
            >
              <M2 {...props} />
            </ModuleContainer>
          </div>
          <div key="m1">
            <ModuleContainer
              className={styles.module}
              contentClassName={styles.module__m1}
            >
              <img className={styles.m1Img} src={NFTTitle} />
            </ModuleContainer>
          </div>

          <div key="m3">
            <ModuleContainer
              className={styles.module}
              contentClassName={styles.module__m3}
            >
              <M3 {...props} />
            </ModuleContainer>
          </div>

          <div key="m4">
            <ModuleContainer
              className={styles.module}
              contentClassName={styles.module__m4}
            >
              <M4 {...props} />
            </ModuleContainer>
          </div>
        </PageLayout>
      </div>
      {props.isMobile ? (
        <img className={styles.illustration} src={NFTIllustration} />
      ) : (
        <video
          className={styles.illustration}
          src={NTFVideo}
          autoPlay={true}
          controls={false}
          muted={true}
          loop={true}
        ></video>
      )}
    </>
  );
};
