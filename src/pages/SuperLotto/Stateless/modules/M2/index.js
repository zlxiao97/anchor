import { Button, Col, Input, Row, Statistic, Typography } from "antd";
import moment from "moment";
import LottoBg from "@/assets/QuickLotto.png";
import countDown from "@/data/lotto/countDown";
import styles from "./index.module.less";
import classNames from "classnames";

const { Countdown } = Statistic;
const { quickLotto, superLotto } = countDown;
const { Title } = Typography;
const deadLine = moment().add(superLotto);

export default (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title level={props.isNoteBook ? 2 : 1}>SUPER LOTTO</Title>
      </div>
      <div className={styles.countdown}>
        <Countdown
          value={deadLine}
          format="D [day] HH [Hours] mm [mins] ss [sec]"
          valueStyle={{
            color: "white",
            fontSize: props.isNoteBook ? "1rem" : "1.2rem",
            fontWeight: "bolder",
            letterSpacing: props.isNoteBook ? "0.03rem" : "0.05rem"
          }}
          onFinish={props.onSuperLottoCountDown}
        />
      </div>
      <div className={styles.award}>
        <Title level={props.isNoteBook ? 3 : 2}>
          {" "}
          ${Number(props.superLotto.super_Lotto_result).toLocaleString()}{" "}
        </Title>
      </div>
      <div className={styles.btns}>
        <Button onClick={props.onSuperLottoSubmitBtnClick}>Submit</Button>
        <Button>Claim</Button>
      </div>
      <div className={styles.box}>
        <div className={styles.box__content}>
          <span className={styles.box__tip}>Enter Your Numbers</span>
          <div className={styles.box__input}>
            {new Array(5).fill(null).map((item, index) => (
              <Input
                key={index}
                maxLength={2}
                defaultValue="00"
                value={props.superLotto[`number${index + 1}`]}
                onChange={props.onSuperLottoNumberChange(`number${index + 1}`)}
              />
            ))}
          </div>
          <div className={styles.box__check}>
            <div
              className={styles.box__checkBtn}
              onClick={props.onSuperLottoNumberCheck}
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
        <div className={classNames(styles.winNumber__ball, styles.gray)}>
          {props.superLotto.winning1}
        </div>
        <div className={classNames(styles.winNumber__ball, styles.gray)}>
          {props.superLotto.winning2}
        </div>
        <div className={classNames(styles.winNumber__ball, styles.gray)}>
          {props.superLotto.winning3}
        </div>
        <div className={classNames(styles.winNumber__ball, styles.gray)}>
          {props.superLotto.winning4}
        </div>
        <div className={classNames(styles.winNumber__ball, styles.gold)}>
          {props.superLotto.winning5}
        </div>
      </div>
    </div>
  );
};
