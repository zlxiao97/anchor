import ModuleContainer from "../../components/ModuleContainer";
import PageLayout from "../../layout/PageLayout";
import layout from "./config/layout";

export default () => {
  return (
    <>
      <PageLayout layout={layout}>
        <div key="m1">
          <h1>DASHBOARD</h1>
        </div>
        <div key="l1">
          <ModuleContainer />
        </div>
        <div key="r1">
          <ModuleContainer />
        </div>
        <div key="r2">
          <ModuleContainer />
        </div>
        <div key="m2">
          <ModuleContainer />
        </div>
        <div key="m3">
          <ModuleContainer />
        </div>
      </PageLayout>
    </>
  );
};
