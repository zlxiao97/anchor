import { Button, Form, Input, Typography } from "antd";
import styles from "./index.module.less";

const { Title } = Typography;

export default (props) => {
  return (
    <div className={styles.container}>
      <Title level={5}>Activation Code</Title>
      <div className={styles.container__content}>
        <div className={styles.form}>
          <div className={styles.form__group}>
            <div className={styles.form__field}>
              <Input
                className={styles.form__input}
                value={props.activationCode}
                onChange={props.onActivationCodeChange}
              />
              <Button
                className={styles.form__btn}
                onClick={props.onSubmitClick}
              >
                Submit
              </Button>
            </div>
            <span className={styles.form__tip}>input activation code</span>
          </div>
          <div className={styles.form__group}>
            <div className={styles.form__field}>
              <Input
                className={styles.form__input}
                value={props.createCode}
                onChange={props.onCreateCodeChange}
              />
              <Button className={styles.form__btn} onClick={props.onGetClick}>
                Get
              </Button>
            </div>
            <span className={styles.form__tip}>
              Create your activation code
            </span>
          </div>
        </div>
        <div className={styles.statistic}>
          <div className={styles.statistic__item}>
            <span className={styles.statistic__label}>Number of Invitess:</span>
            <span className={styles.statistic__value}>0</span>
          </div>
          {/* <div className={styles.statistic__item}>
            <span className={styles.statistic__label}>Earn Expand Factor:</span>
            <span className={styles.statistic__value}>
              {Number(1).toFixed(1)}
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
