import classNames from "classnames";
import { Responsive, WidthProvider } from "react-grid-layout";
import styles from "./index.module.less";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default (props) => {
  const defaultProps = {
    className: classNames(styles.layout, props.className),
    isDraggable: false,
    isResizable: false,
    width: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100,
    margin: [0, 0]
  };
  return (
    <ResponsiveGridLayout {...defaultProps} {...props}>
      {props.children}
    </ResponsiveGridLayout>
  );
};
