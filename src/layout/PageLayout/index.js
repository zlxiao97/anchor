import { get } from "lodash";
import GridLayout from "react-grid-layout";

export default (props) => {
  const defaultProps = {
    isDraggable: false,
    isResizable: false,
    width: 1600,
    cols: 12,
    rowHeight: 30,
    margin: [40, 40],
  };
  return (
    <GridLayout {...defaultProps} layout={get(props, "layout", [])}>
      {props.children}
    </GridLayout>
  );
};
