import ModuleContainer from "../../components/ModuleContainer";
import PageLayout from "../../layout/PageLayout";
import Form from "./modules/Form";
import layout from "./config/layout";
import Introduce from "./modules/Introduce";
import styles from "./index.module.css";

export default () => {
  return (
    <>
      <PageLayout layout={layout}>
        <div key="m1">
          <ModuleContainer>
            <Introduce />
          </ModuleContainer>
        </div>
        <div key="m2">
          <ModuleContainer>
            <Form />
          </ModuleContainer>
        </div>
      </PageLayout>
    </>
  );
};
