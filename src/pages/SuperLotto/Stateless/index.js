import ModuleContainer from "@/components/ModuleContainer";
import PageLayout from "@/components/PageLayout";
import layouts from "./config/layouts";
import styles from "./index.module.less";
import M1 from "./modules/M1";
import M2 from "./modules/M2";
import hr from "@/assets/hr.png";

export default (props) => {
  return (
    <div className={styles.wrapper}>
      <PageLayout layouts={layouts}>
        <div key="m1">
          <ModuleContainer
            className={styles.module}
            contentClassName={styles.m1}
          >
            <M1 {...props} />
          </ModuleContainer>
          <img className={styles.hr} src={hr} alt="" />
        </div>
        <div key="m2">
        <ModuleContainer
            className={styles.module}
            contentClassName={styles.m2}
          >
            <M2 {...props} />
          </ModuleContainer>
        </div>
      </PageLayout>
    </div>
  );
};
