import styles from "./index.module.less";
import NFTBox1 from "@/assets/NFTBox1.png";
import NFTBox2 from "@/assets/NFTBox2.png";
import NFTBox3 from "@/assets/NFTBox3.png";
import NFTBox4 from "@/assets/NFTBox4.png";
import card1I from "@/assets/card1-i.png";
import card2I from "@/assets/card2-i.png";
import card3I from "@/assets/card3-i.png";
import card4I from "@/assets/card4-i.png";
import blueCircle from "@/assets/blueCircle.png";

import { Button, Form, Input, Typography } from "antd";
import classNames from "classnames";
import { get } from "lodash";

const Card = ({ status, illstration, borderClassName, data }) => {
  return (
    <div className={styles.card}>
      <div className={classNames(styles.card__border, borderClassName)}>
        <img src={illstration} className={styles.card__illustration}></img>
        <div className={styles.card__status}>
          <img src={blueCircle} className={styles.card__circle}></img>
          <span>{status}</span>
        </div>
        <div className={styles.card__data}>
          <div className={styles.card__item}>
            <span className={styles.card__label}>Level: </span>
            <span className={styles.card__value}>{data.level}</span>
          </div>
          <div className={styles.card__item}></div>
          <div className={styles.card__item}>
            <span className={styles.card__label}>Attack: </span>
            <span className={styles.card__value}>{data.attack}</span>
          </div>
          <div className={styles.card__item}>
            <span className={styles.card__label}>Defense: </span>
            <span className={styles.card__value}>{data.defense}</span>
          </div>
          <div className={styles.card__item}>
            <span className={styles.card__label}>Flexible: </span>
            <span className={styles.card__value}>{data.flexible}</span>
          </div>
          <div className={styles.card__item}>
            <span className={styles.card__label}>Durability: </span>
            <span className={styles.card__value}>{data.durability}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const { Title } = Typography;
export default (props) => {
  return (
    <div className={styles.wrap}>
      <Title level={5}>SpaceShip Assets</Title>
      <div className={styles.container}>
        <div className={styles.container__item}>
          <Card
            status="PREDATOR"
            illstration={card1I}
            borderClassName={styles.border1}
            data={get(props, "cards[0]", {})}
          />
        </div>
        <div className={styles.container__item}>
          <Card
            status="RAIDER"
            illstration={card2I}
            borderClassName={styles.border2}
            data={get(props, "cards[1]", {})}
          />
        </div>
        <div className={styles.container__item}>
          <Card
            status="DEFENDER"
            illstration={card3I}
            borderClassName={styles.border3}
            data={get(props, "cards[2]", {})}
          />
        </div>
        <div className={styles.container__item}>
          <Card
            status="RANGER"
            illstration={card4I}
            borderClassName={styles.border4}
            data={get(props, "cards[3]", {})}
          />
        </div>
      </div>
    </div>
  );
};
