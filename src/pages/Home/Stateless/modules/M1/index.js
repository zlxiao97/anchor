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
          <Title>Play to Earn</Title>
          <Title level={3}>
            Join our games to win the treasure that are eligible to fly the
            spacecraft to metapsace. So select a number then hunting other coins
            in treasure!
          </Title>
          <Row gutter={{ lg: 41 }} className={styles.btns}>
            <Col
              lg={{
                span: 13
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
                span: 11
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
