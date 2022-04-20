import { Button, Col, Row, Typography } from "antd";
import dataDesc from "@/assets/dataDesc.png";
import styles from "./index.module.less";
import classNames from "classnames";

const { Title } = Typography;

export default (props) => (
  <Row>
    <Col span={8}>
      <img src={dataDesc} alt="" />
      {/* <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p> */}
      <div className={styles.data}>
        <Title level={4}>EARN</Title>
        <ul className={styles.data__list}>
          <li>
            <Title level={4}>ETH: {props.state.eth}</Title>
          </li>
          <li>
            <Title level={4}>BNB: {props.state.bnb}</Title>
          </li>
          <li>
            <Title level={4}>USDT: {props.state.usdt}</Title>
          </li>
          <li>
            <Title level={4}>DNGE: {props.state.doge}</Title>
          </li>
        </ul>
        <div className={styles.data__btn}>Claim</div>
      </div>
    </Col>
    <Col offset={2} span={14}>
      <div className={styles.boxs}>
        {new Array(10).fill(null).map((item, index) => (
          <div
            onClick={() => props.onSelectNumber(index)}
            className={classNames({
              [styles.boxs__item]: true,
              [styles[`boxs__item${index + 1}`]]: true,
              [styles["boxs__item-selected"]]: index === props.selected
            })}
          ></div>
        ))}
      </div>
      <div className={styles.boxs__footer}>
        <div className={styles.boxs__btn} onClick={props.onOpen}>
          OPEN
        </div>
      </div>
    </Col>
  </Row>
);
