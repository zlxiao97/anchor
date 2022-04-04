import ModuleContainer from "@/components/ModuleContainer";
import PageLayout from "@/components/PageLayout";
import Form from "@/modules/Form";
import Introduce from "@/modules/Introduce";
import layouts from "./config/layouts";
import styles from './index.module.less';

export default (props) => {
  return (
    <>
      <PageLayout layouts={layouts} className={styles.layout} >
        <div key="m1">
          <ModuleContainer>
            <Introduce />
          </ModuleContainer>
        </div>
        <div key="m2">
          <ModuleContainer>
            <Form {...props} />
          </ModuleContainer>
        </div>
      </PageLayout>
    </>
  );
};
