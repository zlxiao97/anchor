import { Col, Layout, Row } from "antd";
import Logo from "../Logo";
import Menu from "../Menu";
import ConnectBtn from "@/components/ConnectBtn";
import styles from "./index.module.less";

const { Header } = Layout;

export default () => {
  return (
    <Header className={styles.header}>
      <Row>
        <Col
          lg={{
            offset: 3,
            span: 17
          }}
          xs={{
            offset: 0,
            span: 17
          }}
        >
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
