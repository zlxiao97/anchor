import { Col, Layout, Row } from "antd";
import Logo from "../Logo";
import Menu from "../Menu";
import ConnectBtn from "@/components/ConnectBtn";

const { Header } = Layout;

export default () => {
  return (
    <Header>
      {/* <Logo /> */}
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
