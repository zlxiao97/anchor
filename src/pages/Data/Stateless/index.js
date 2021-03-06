import ModuleContainer from "@/components/ModuleContainer";
import PageLayout from "@/components/PageLayout";
import layouts from "./config/layouts";
import styles from "./index.module.less";
import M1 from "./modules/M1";
import M2 from "./modules/M2";

export default (props) => {
  return (
    <div className={styles.wrapper}>
      <PageLayout layouts={layouts}>
        <div key="m1">
          <ModuleContainer className={styles.module} contentClassName={styles.module__m1}>
            <M1 {...props} />
          </ModuleContainer>
        </div>
        <div key="m2">
          <ModuleContainer className={styles.module} contentClassName={styles.module__m2}>
            <M2 {...props} />
          </ModuleContainer>
        </div>
      </PageLayout>

    </div>
  );
};
