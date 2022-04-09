import { Button, Col, Row, Typography } from "antd";
import m1Image from "@/assets/m1.png";
import styles from "./index.module.less";

const { Title } = Typography;


// todo White Paper按钮点后显示一个pdf
export default () => {
  return (
    <div className={styles.container} >
      <Row gutter={55}>
        <Col offset={4} span={8}>
          <Title>Play to Earn</Title>
          <Title level={3}>
            Join our games to win the treasure that are eligible to fly the spacecraft to metapsace, with prizes that multiply every day. There will be a round of treasure hunting activities every 3 minutes so don't miss your chance to multiply your fun!
          </Title>
          <Row gutter={41} className={styles.btns}>
            <Col span={13}>
              <Button size="large" type="primary" className={styles.btn}> 
                White Paper 
              </Button>
            </Col>
            <Col span={11}>
              <Button size="large" ghost className={styles.btn}>
                Play
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
