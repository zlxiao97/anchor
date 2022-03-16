import steps from "../../../../../data/steps.json";

export default (Stateless) => (props) => {
  return <Stateless {...props} steps={steps} />;
};
