import { Menu } from "antd";
import routes from "@/config/routes";
import { createMenuItem } from "./utils/createMenuItem";

export default () => {
  return (
    <Menu theme="light" mode="horizontal">
      {routes.map(createMenuItem)}
    </Menu>
  );
};
