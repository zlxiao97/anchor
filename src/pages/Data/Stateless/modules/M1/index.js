import { Button, Col, Row, Statistic, Typography } from "antd";
import IconTitle from "@/components/IconTitle";
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

const { Title } = Typography;
const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

export default () => {
  return (
    <>
      <div className={styles.content}>
        <IconTitle icon={clockIcon} title="开奖倒计时" />
        <div className={styles.content__value}>
          <Countdown value={deadline} format="m [MIN] s [SEC]" />
        </div>
        <IconTitle icon={IncomeIcon} title="收益情况" />
        <div className={styles.content__value}>
          <Statistic title="数量" value={100} />
          <Statistic title="APY" value={1000} precision={2} />
        </div>
      </div>
      <div className={styles.numbers}>
        <Row gutter={[32, 32]}>
          <Col offset={2} span={22}>
            <Title level={5}>From 0 to 9 </Title>
          </Col>
        </Row>
        <div className={styles.numbers__content}>
          <Row gutter={[32, 32]}>
            <Col offset={2} span={4}>
              <img src={number0Image} />
            </Col>
            <Col span={4}>
              <img src={number1Image} />
            </Col>
            <Col span={4}>
              <img src={number2Image} />
            </Col>
            <Col span={4}>
              <img src={number3Image} />
            </Col>
            <Col span={4}>
              <img src={number4Image} />
            </Col>
            <Col offset={2} span={4}>
              <img src={number5Image} />
            </Col>
            <Col span={4}>
              <img src={number6Image} />
            </Col>
            <Col span={4}>
              <img src={number7Image} />
            </Col>
            <Col span={4}>
              <img src={number8Image} />
            </Col>
            <Col span={4}>
              <img src={number9Image} />
            </Col>
          </Row>
        </div>
        <div className={styles.numbers__btns}>
          <Button shape="round" className={styles.btn}>
            TEMPLATE
          </Button>
          <Button shape="round" className={styles.btn}>
            TEMPLATE
          </Button>
        </div>
      </div>
    </>
  );
};
