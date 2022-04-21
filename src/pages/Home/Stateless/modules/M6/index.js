import { Col, Row, Typography } from "antd";
import m61Image from "@/assets/m61.png";
import m62Image from "@/assets/m62.png";
import m63Image from "@/assets/m63.png";
import m64Image from "@/assets/m64.png";
import m65Image from "@/assets/m65.png";
import m66Image from "@/assets/m66.png";
import m67Image from "@/assets/m67.png";
import m68Image from "@/assets/m68.png";
import m69Image from "@/assets/m69.png";
import iconFly from "@/assets/icon-fly.png";
import iconSmile from "@/assets/icon-smile.png";
import iconTwitter from "@/assets/icon-twitter.png";
import styles from "./index.module.less";

const { Title } = Typography;
export default () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col offset={6} span={12}>
          <Title level={2} style={{ textAlign: "center" }}>
            Partners
          </Title>
          <Title level={3} style={{ textAlign: "center" }}>
            Join our growing ecosystem <br /> of leading infrastructure
            partners, liquidity platforms, data providers and more!
          </Title>
        </Col>
      </Row>

      <div className={styles.brands}>
        <Row gutter={[70, 70]}>
          <Col offset={2} span={4}>
            <div className={styles.brands__item}>
              <img src={m61Image} />
            </div>
          </Col>
          <Col span={4}>
            <div className={styles.brands__item}>
              <img src={m62Image} />
            </div>
          </Col>
          <Col span={4}>
            <div className={styles.brands__item}>
              <img src={m63Image} />
            </div>
          </Col>
          <Col span={4}>
            <div className={styles.brands__item}>
              <img src={m64Image} />
            </div>
          </Col>
          <Col span={4}>
            <div className={styles.brands__item}>
              <img src={m65Image} />
            </div>
          </Col>
          <Col offset={2} span={4}>
            <div className={styles.brands__item}>
              <img src={m66Image} />
            </div>
          </Col>
          <Col span={4}>
            <div className={styles.brands__item}>
              <img src={m67Image} />
            </div>
          </Col>
          <Col span={4}>
            <div className={styles.brands__item}>
              <img src={m68Image} />
            </div>
          </Col>
          <Col span={4}>
            <div className={styles.brands__item}>
              <img src={m69Image} />
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.links}>
              <ul>
                <li className={styles.links__item}>
                  <img src={iconFly} alt="" />
                  <a href="https://t.me/MetaSpaceNetwork" target='_blank' >Telegram:https://t.me/MetaSpaceNetwork</a>
                </li>
                <li className={styles.links__item}>
                  <img src={iconSmile} alt="" />
                  <a href="http://discord.gg/fpfwyszTF4" target='_blank' >Discord:http://discord.gg/fpfwyszTF4</a>
                </li>
                <li className={styles.links__item}>
                  <img src={iconTwitter} alt="" />
                  <a href="https://twitter.com/Metaspace_Game" target='_blank' >Twitter:https://twitter.com/Metaspace_Game</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
