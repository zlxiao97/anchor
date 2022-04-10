import { Button, Col, Row, Typography } from "antd";
import m1Image from "@/assets/m1.png";
import styles from "./index.module.less";

const { Title } = Typography;

// todo White Paper按钮点后显示一个pdf   点开Play按钮跳转到Play页面
export default (props) => {
  return (
    <div className={styles.container}>
      <Row gutter={{ xxl: 55, xl: 44 }}>
        <Col offset={4} xxl={8} xl={10}>
          <Title>Play to Earn</Title>
          <Title level={3}>
            Join our games to win the treasure that are eligible to fly the
            spacecraft to metapsace. So select a number then hunting other coins
            in treasure!
          </Title>
          <Row gutter={41} className={styles.btns}>
            <Col span={13}>
              <Button
                size="large"
                type="primary"
                className={styles.btn}
                onClick={props.onTitleBtn1Click}
                href='/wp.pdf'
                target='_blank'
              >
                White Paper
              </Button>
            </Col>
            <Col span={11}>
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
