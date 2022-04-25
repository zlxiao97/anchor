import { Button, Col, Row, Typography } from "antd";
import dataDesc from "@/assets/dataDesc.png";
import styles from "./index.module.less";
import classNames from "classnames";

const { Title } = Typography;

const Boxs = (props) => {
  const { isMobile } = props;
  return (
    <>
      <div className={styles.boxs}>
        {new Array(isMobile ? 3 : 10).fill(null).map((item, index) => (
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
    </>
  );
};

const Earn = (props) => {
  return (
    <>
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
            <Title level={4}>DOGE: {props.state.doge}</Title>
          </li>
        </ul>
        <div className={styles.data__btn}>Claim</div>
      </div>
    </>
  );
};

export default (props) => {
  const { isMobile } = props;
  return (
    <Row>
      {isMobile ? (
        <>
          <img className={styles.desc} src={dataDesc} alt="" />
          <Boxs {...props} />
          <Earn {...props} />
        </>
      ) : (
        <>
          <Col lg={{ span: 8 }}>
            <img className={styles.desc} src={dataDesc} alt="" />
            <Earn {...props} />
          </Col>
          <Col
            lg={{
              offset: 2,
              span: 14
            }}
          >
            <Boxs {...props} />
          </Col>
        </>
      )}
    </Row>
  );
};
