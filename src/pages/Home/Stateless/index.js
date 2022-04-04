import ModuleContainer from "@/components/ModuleContainer";
import PageLayout from "@/components/PageLayout";
import classNames from "classnames";
import layouts from "./config/layouts";
import styles from "./index.module.less";
import M1 from "./modules/M1";
import M3 from "./modules/M3";
import M6 from "./modules/M6";

export default (props) => {
  return (
    <>
      <PageLayout layouts={layouts}>
        <div key="m1">
          <ModuleContainer
            className={classNames(styles.module, styles["module-blue"])}
          >
            <M1 {...props} />
          </ModuleContainer>
        </div>
        <div key="m2">
          <ModuleContainer
            className={classNames(styles.module, styles["module-blue"])}
          >
            <M3 {...props} />
          </ModuleContainer>
        </div>
        <div key="m3">
          <ModuleContainer className={styles.module}>
            <M6 />
          </ModuleContainer>
        </div>
      </PageLayout>
    </>
  );
};
