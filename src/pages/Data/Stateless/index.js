import ModuleContainer from "@/components/ModuleContainer";
import PageLayout from "@/components/PageLayout";
import layouts from "./config/layouts";
import styles from "./index.module.less";
import M1 from "./modules/M1";

export default () => {
  return (
    <>
      <PageLayout layouts={layouts}>
        <div key="m1">
          <ModuleContainer className={styles.module}>
            <M1 />
          </ModuleContainer>
        </div>
      </PageLayout>
    </>
  );
};
