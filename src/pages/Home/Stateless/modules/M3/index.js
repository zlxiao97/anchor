import { Button, Col, Row, Typography } from "antd";
import m3Image from "@/assets/m3.png";
import styles from "./index.module.less";

const { Title } = Typography;

export default (props) => {
  return (
    <div className={styles.container}>
      <Row gutter={75}>
        <Col offset={4} span={9}>
          {/* <img src={m3Image} /> */}
        </Col>
        <Col span={8}>
          <Title level={2}>Customize your own wallet and currency</Title>
          <Title level={4}>
            Zero Coding Launch Platform for Entrepreneurs and Impact Leaders.
          </Title>
          <Title level={5}>
            ◆ Mint your own token in minutes. <br />◆ Activate fiat on ramps.{" "}
            <br />◆ Grow your user base with powerful tools and plugins.
          </Title>
          <Row gutter={41} className={styles.btns}>
            <Col span={13}>
              <Button
                size="large"
                type="primary"
                className={styles.btn}
                onClick={props.onMiddleBtnClick}
              >
                Launch Community
              </Button>
            </Col>
            <Col span={11}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
