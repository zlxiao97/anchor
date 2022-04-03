import { Col, Layout, Row } from "antd";
import Logo from "../Logo";
import Menu from "../Menu";
import ConnectBtn from "@/components/ConnectBtn";

const { Header } = Layout;

export default () => {
  return (
    <Header>
      <Row>
        <Col offset={3} span={17}>
          <Logo />
          <Menu />
        </Col>
        <Col span={4}>
          <ConnectBtn />
        </Col>
      </Row>
    </Header>
  );
};
