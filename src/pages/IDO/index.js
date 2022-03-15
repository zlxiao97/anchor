import ModuleContainer from "../../components/ModuleContainer";
import PageLayout from "../../layout/PageLayout";
import Form from "./modules/Form";
import layout from "./config/layout";
import styles from './index.module.css'

export default () => {
  return (
    <>
      <PageLayout layout={layout}>
        <div key="m1">
          <ModuleContainer className={styles.module}>
            <Form />
          </ModuleContainer>
        </div>
      </PageLayout>
    </>
  );
};
