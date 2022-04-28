import useMediaQuery from "@/hooks/useMediaQuery";

export default (Stateless) => (props) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const data = {isMobile};
  const callback = {};
  return <Stateless {...props} {...data} {...callback} />;
};
