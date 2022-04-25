import ModuleContainer from "@/components/ModuleContainer";
import PageLayout from "@/components/PageLayout";
import Form from "@/modules/Form";
import Introduce from "@/modules/Introduce";
import layouts from "./config/layouts";
import styles from "./index.module.less";

export default (props) => {
  return (
    <>
      <PageLayout layouts={layouts}>
        <div key="m1">
          <div className={styles.m1}>
            <ModuleContainer
              className={styles.module}
              contentClassName={styles.module__m1}
            >
              <Introduce {...props} />
            </ModuleContainer>
          </div>
        </div>
        <div key="m2">
          <div className={styles.m2}>
            <ModuleContainer
              className={styles.module}
              contentClassName={styles.module__m2}
            >
              <Form {...props} />
            </ModuleContainer>
          </div>
        </div>
      </PageLayout>
    </>
  );
};
