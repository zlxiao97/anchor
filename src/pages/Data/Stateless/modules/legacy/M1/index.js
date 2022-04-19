import { Button, Col, Row, Typography } from "antd";
import IconTitle from "@/components/IconTitle";
import Statistic from "@/components/Statistic";
import number0Image from "@/assets/number0.png";
import number1Image from "@/assets/number1.png";
import number2Image from "@/assets/number2.png";
import number3Image from "@/assets/number3.png";
import number4Image from "@/assets/number4.png";
import number5Image from "@/assets/number5.png";
import number6Image from "@/assets/number6.png";
import number7Image from "@/assets/number7.png";
import number8Image from "@/assets/number8.png";
import number9Image from "@/assets/number9.png";
import clockIcon from "@/assets/icon-clock.png";
import IncomeIcon from "@/assets/icon-income.png";
import styles from "./index.module.less";
import classNames from "classnames";

const { Title } = Typography;
const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
// todo 去掉ETH等后面的冒号
export default (props) => {
  return (
    <>
      <div className={styles.content}>
        {/* <IconTitle icon={clockIcon} title="开奖倒计时" />
        <div className={styles.content__value}>
          <Countdown value={deadline} format="m [MIN] s [SEC]" />
        </div> */}
        <IconTitle title="Earn:" />
        <div className={styles.content__value}>
          <Statistic layout="horizontal" title="ETH" value={0} precision={4} />
          <Statistic layout="horizontal" title="BNB" value={0} precision={4} />
          <Statistic layout="horizontal" title="USDT" value={0} precision={4} />
          <Statistic layout="horizontal" title="DOGE" value={0} precision={4} />
          <Button
            type="large"
            shape="round"
            className={styles.btn}
            onClick={props.onBtnLeftClick}
          >
            Claim
          </Button>
        </div>
      </div>
      <div className={styles.numbers}>
        <Row gutter={[32, 32]}>
          <Col offset={2} span={22}>
            <Title level={5}>Select a Number to Open Mystery Box </Title>
          </Col>
        </Row>
        <div className={styles.numbers__content}>
          <Row gutter={[32, 32]}>
            {[
              number0Image,
              number1Image,
              number2Image,
              number3Image,
              number4Image,
              number5Image,
              number6Image,
              number7Image,
              number8Image,
              number9Image
            ].map((img, index) => (
              <Col offset={index % 5 === 0 ? 2 : 0} span={4}>
                <img
                  onClick={() => props.onSelectNumber(index)}
                  className={classNames(styles.numbers__img, {
                    [styles["numbers__img-select"]]: props.selected === index
                  })}
                  src={img}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div className={styles.numbers__btns}>
          {/* <Button shape="round" className={styles.btn} onClick={props.onBtn1Click}>
            Open
          </Button> */}
          <Button
            shape="round"
            className={styles.btn}
            onClick={props.onBtn2Click}
          >
            Open
          </Button>
        </div>
      </div>
    </>
  );
};
