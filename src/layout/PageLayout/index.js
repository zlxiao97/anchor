import { get } from "lodash";
import GridLayout from "react-grid-layout";

export default (props) => {
  return (
    <GridLayout
      layout={get(props, "layout", [])}
      cols={12}
      rowHeight={30}
      width={1600}
      margin={[40, 40]}
    >
      {props.children}
    </GridLayout>
  );
};
