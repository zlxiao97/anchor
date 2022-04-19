import PubSub from "pubsub-js";
import { useCallback, useEffect, useState } from "react";
import { OPEN_ANIMATION_DURATION } from "@/config/config";
import card1Thanks from "@/assets/card1-thanks.gif";
import card2Thanks from "@/assets/card2-thanks.gif";
import card3Thanks from "@/assets/card3-thanks.gif";
import card4Thanks from "@/assets/card4-thanks.gif";
import card5Thanks from "@/assets/card5-thanks.gif";
import card6Thanks from "@/assets/card6-thanks.gif";
import card7Thanks from "@/assets/card7-thanks.gif";
import card8Thanks from "@/assets/card8-thanks.gif";
import card9Thanks from "@/assets/card9-thanks.gif";
import card10Thanks from "@/assets/card10-thanks.gif";
import card1Win from "@/assets/card1-win.gif";
import card2Win from "@/assets/card2-win.gif";
import card3Win from "@/assets/card3-win.gif";
import card4Win from "@/assets/card4-win.gif";
import card5Win from "@/assets/card5-win.gif";
import card6Win from "@/assets/card6-win.gif";
import card7Win from "@/assets/card7-win.gif";
import card8Win from "@/assets/card8-win.gif";
import card9Win from "@/assets/card9-win.gif";
import card10Win from "@/assets/card10-win.gif";
import styles from "./index.module.less";
import classNames from "classnames";
import { get } from "lodash";

const gifs = [
  {
    win: card1Win,
    thanks: card1Thanks
  },
  {
    win: card2Win,
    thanks: card2Thanks
  },
  {
    win: card3Win,
    thanks: card3Thanks
  },
  {
    win: card4Win,
    thanks: card4Thanks
  },
  {
    win: card5Win,
    thanks: card5Thanks
  },
  {
    win: card6Win,
    thanks: card6Thanks
  },
  {
    win: card7Win,
    thanks: card7Thanks
  },
  {
    win: card8Win,
    thanks: card8Thanks
  },
  {
    win: card9Win,
    thanks: card9Thanks
  },
  {
    win: card10Win,
    thanks: card10Thanks
  }
];

export default () => {
  const [isShow, setIsShow] = useState(false);
  const [currentGif, setCurrentGif] = useState();

  const reset = () => {
    setIsShow(false);
    setCurrentGif();
  };

  const openBox = (message, data = {}) => {
    const { selected = 0, isWin = true } = data;
    setCurrentGif(get(gifs, `[${selected}].${isWin ? "win" : "thanks"}`));
    setIsShow(true);
    setTimeout(() => {
      reset();
    }, OPEN_ANIMATION_DURATION);
  };

  useEffect(() => {
    var token = PubSub.subscribe("OPEN BOX", openBox);
    return () => PubSub.unsubscribe(token);
  }, []);
  return (
    <div
      className={classNames({
        [styles.canvas]: true,
        [styles["canvas-show"]]: isShow
      })}
    >
      <img src={currentGif} alt="" />
    </div>
  );
};
