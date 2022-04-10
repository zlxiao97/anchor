import { Col, Row, Typography } from "antd";
import m61Image from "@/assets/m61.png";
import m62Image from "@/assets/m62.png";
import m63Image from "@/assets/m63.png";
import m64Image from "@/assets/m64.png";
import m65Image from "@/assets/m65.png";
import m66Image from "@/assets/m66.png";
import styles from "./index.module.less";

const { Title } = Typography;
// todo Join our growing ecos 居中显示，上面有个大号的title Partners，类似于https://voltage.finance/index.html
export default () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col offset={6} span={12}>
          <Title level={3}> 
            Join our growing ecosystem of leading infrastructure partners, 
            liquidity platforms, data providers and more!
          </Title>
        </Col>
      </Row>

      <div className={styles.brands}>
        <Row gutter={[70,70]}>
          <Col offset={4} span={5}>
            <div className={styles.brands__item}>
              <img src={m61Image} />
            </div>
          </Col>
          <Col span={5}>
            <div className={styles.brands__item}>
              <img src={m62Image} />
            </div>
          </Col>
          <Col span={5}>
            <div className={styles.brands__item}>
              <img src={m63Image} />
            </div>
          </Col>
          <Col offset={4} span={5}>
            <div className={styles.brands__item}>
              <img src={m64Image} />
            </div>
          </Col>
          <Col span={5}>
            <div className={styles.brands__item}>
              <img src={m65Image} />
            </div>
          </Col>
          <Col span={5}>
            <div className={styles.brands__item}>
              <img src={m66Image} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
