import { Button, Col, Row, Typography } from "antd";
import m1Image from "@/assets/m1.png";
import styles from "./index.module.less";

const { Title } = Typography;

export default () => {
  return (
    <div className={styles.container} >
      <Row gutter={55}>
        <Col offset={4} span={8}>
          <Title>Infrastructure for Open Source Money</Title>
          <Title level={3}>
            Launch community-centric payment systems and token economies on an
            Ethereum-compatible
          </Title>
          <Row gutter={41} className={styles.btns}>
            <Col span={13}>
              <Button size="large" type="primary" className={styles.btn}>
                Launch Community
              </Button>
            </Col>
            <Col span={11}>
              <Button size="large" ghost className={styles.btn}>
                Stake Fuse
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <img src={m1Image} />
        </Col>
      </Row>
    </div>
  );
};
