import { Button, Col, Row, Typography } from "antd";
import m1Image from "@/assets/m1.png";
import styles from "./index.module.less";

const { Title } = Typography;

export default (props) => {
  return (
    <div className={styles.container}>
      <Row gutter={{ xxl: 55, xl: 44 }}>
        <Col
          xxl={{
            span: 8,
            offset: 4
          }}
          xl={{
            span: 10,
            offset: 4
          }}
        >
          <div style={{ textAlign: "center" }}>
            <a href="https://t.me/MetaSpaceNetworkChina">
              https://t.me/MetaSpaceNetworkChina
            </a>
          </div>
          <Title>Play to Earn</Title>
          <Title level={3}>
            Join our games to win the treasure that are eligible to fly the
            spacecraft to metapsace. So select a number then hunting other coins
            in treasure!
          </Title>
          <Row gutter={{ lg: 41, xs: 20 }} className={styles.btns}>
            <Col
              lg={{
                offset: 0,
                span: 13
              }}
              xs={{
                span: 8,
                offset: 3
              }}
            >
              <Button
                size="large"
                type="primary"
                className={styles.btn}
                onClick={props.onTitleBtn1Click}
                href="/whitepaper.pdf"
                target="_blank"
              >
                White Paper
              </Button>
            </Col>
            <Col
              lg={{
                offset: 0,
                span: 11
              }}
              xs={{
                span: 8,
                offset: 1
              }}
            >
              <Button
                size="large"
                ghost
                className={styles.btn}
                onClick={props.onTitleBtn2Click}
              >
                Play
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
