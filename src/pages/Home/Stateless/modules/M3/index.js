import { Button, Col, Row, Typography } from "antd";
import m3Image from "@/assets/m3.png";
import styles from "./index.module.less";

const { Title } = Typography;

export default (props) => {
  return (
    <div className={styles.container}>
      <Row gutter={{ xxl: 75, xl: 60 }}>
        <Col offset={4} xxl={9} xl={7}>
          {/* <img src={m3Image} /> */}
        </Col>
        <Col xxl={8} xl={10} >
          <Title level={2}>Hold to Earn</Title>
          <Title level={4}>
          A limited NFT collection of spacecrafts where the token itself  will carry you to metaspace to get find more treasure in the futrure.
Get it by Mystrey box at same cost to get different level of our spacecrafts.
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
