import { Button, Col, Row, Typography } from "antd";
import m3Image from "@/assets/m3.png";
import styles from "./index.module.less";

const { Title } = Typography;

export default (props) => {
  return (
    <div className={styles.container}>
      <Row gutter={{ xxl: 75, xl: 60 }}>
        <Col
          xxl={{
            span: 9,
            offset: 4
          }}
          xl={{
            span: 7,
            offset: 4
          }}
        >
          {/* <img src={m3Image} /> */}
        </Col>
        <Col
          xxl={{
            span: 8
          }}
          xl={{
            span: 10
          }}
        >
          <Title level={2}>Hold to Earn</Title>
          <Title level={4}>
            A limited NFT collection of spacecrafts where the token itself will
            carry you to metaspace to get find more treasure in the futrure. Get
            it by Mystrey box at same cost to get different level of our
            spacecrafts.
          </Title>
          <Row gutter={{ lg: 41 }} className={styles.btns}>
            <Col lg={{ span: 13 }} xs={{ span: 8 }}>
              <Button
                size="large"
                type="primary"
                className={styles.btn}
                onClick={props.onMiddleBtnClick}
              >
                Get NFT
              </Button>
            </Col>
            <Col span={11}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
