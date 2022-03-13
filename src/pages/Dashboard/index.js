import PageLayout from "../../layout/PageLayout";
import layout from "./config/layout";

export default () => {
  return (
    <>
      <PageLayout layout={layout}>
        <div key="m1">m1</div>
        <div key="l1">l1</div>
        <div key="r1">r1</div>
        <div key="r2">r2</div>
        <div key="m2">m2</div>
        <div key="m3">m3</div>
      </PageLayout>
    </>
  );
};
