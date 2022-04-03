import ModuleContainer from "@/components/ModuleContainer";
import PageLayout from "@/components/PageLayout";
import Form from "@/modules/Form";
import Introduce from "@/modules/Introduce";
import layouts from "./config/layouts";

export default () => {
  return (
    <>
      <PageLayout layouts={layouts}>
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
