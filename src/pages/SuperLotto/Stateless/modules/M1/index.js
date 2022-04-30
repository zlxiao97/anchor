import { Button, Col, Input, Row, Statistic, Typography } from "antd";
import moment from "moment";
import LottoBg from "@/assets/QuickLotto.png";
import countDown from "@/data/lotto/countDown";
import styles from "./index.module.less";

const { Countdown } = Statistic;
const { quickLotto, superLotto } = countDown;
const { Title } = Typography;
const deadLine = moment().add(quickLotto);

export default (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src={LottoBg} alt="" />
      </div>
      <div className={styles.countdown}>
        <Countdown
          value={deadLine}
          format="mm [mins] ss [sec]"
          valueStyle={{
            color: "white",
            fontSize: props.isNoteBook
              ? "1.5rem"
              : props.isMobile
              ? "1rem"
              : "2rem",
            letterSpacing: props.isMobile ? "0.1rem" : "0.2rem"
          }}
          onFinish={props.onQuickLottoCountDown}
        />
      </div>
      <div className={styles.award}>
        <Title level={props.isNoteBook ? 3 : 2}>
          {" "}
          ${Number(props.quickLotto.quick_Lotto_result).toLocaleString()}{" "}
        </Title>
      </div>
      <div className={styles.btns}>
        <Button onClick={props.onQuickLottoSubmitBtnClick}>Submit</Button>
        <Button>Claim</Button>
      </div>
      <div className={styles.box}>
        <div className={styles.box__content}>
          <span className={styles.box__tip}>Enter Your Numbers</span>
          <div className={styles.box__input}>
            <Input
              maxLength={2}
              defaultValue="00"
              value={props.quickLotto.number}
              onChange={props.onQuickLottoNumberChange}
            />
          </div>
          <div className={styles.box__check}>
            <div
              className={styles.box__checkBtn}
              onClick={props.onQuickLottoNumberCheck}
            >
              CHECK NUMBERS
            </div>
          </div>
        </div>
      </div>
      <div className={styles.winText}>
        <Title level={5}>Latest Winning Numbers</Title>
      </div>
      <div className={styles.winNumber}>
        <div className={styles.winNumber__ball}>{props.quickLotto.winning}</div>
      </div>
    </div>
  );
};
