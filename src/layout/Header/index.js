import { Col, Layout, Row } from "antd";
import Menu from "../Menu";
import ConnectBtn from "./modules/ConnectBtn";
const { Header } = Layout;

export default () => {
  return (
    <Header>
      {/* <div className="logo" /> */}
      <Row>
        <Col span={20}>
          <Menu />
        </Col>
        <Col span={4}>
          <ConnectBtn />
        </Col>
      </Row>
    </Header>
  );
};
