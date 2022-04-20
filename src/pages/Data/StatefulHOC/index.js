import { useEffect, useState } from "react";
import PubSub from "pubsub-js";
import { useWeb3Context } from "@/vendors/hooks/web3-context";
import useStates from "@/hooks/useStates";
import reducer from "./utils/reducer";

/**  钱包 todo
 * 连接钱包后显示如下  0x前4个字母...后4个字母；
 * 连接钱包后刷新保持状态；
 */

/**  play页面 todo
 * 选中后将数字的圆圈颜色填充成一个颜色；
 */

/**  页面 todo
 * 手机连接先只跳转Play页面，需要适配一下
 * NFT的comming soon弹窗只显示1.5s
 */

export default (Stateless) => (props) => {
  const {
    connect,
    disconnect,
    hasCachedProvider,
    provider,
    connected,
    address,
    chainID,
    web3Modal,
    providerChainID
  } = useWeb3Context();
  const [selected, setSelected] = useState();
  const [state, dispatch] = useStates(reducer, {
    eth: 0,
    bnb: 0,
    usdt: 0,
    dnge: 0
  });

  /**
   * 用户点击 OPEN 按钮
   */
  const onOpen = async () => {
    if (selected !== undefined) {
      // alert("coming soon");
      // console.log("coming soon");
      // 更新左边数据

      // 播放动画
      PubSub.publish("OPEN BOX", {
        selected,
        isWin: Math.random() > 0.5, // todo: 对接接口
        onFinish() {
          // 动画播放完毕后执行
          dispatch({
            type: "open",
            payload: {
              eth: state.eth + 1,
              bnb: state.bnb + 1,
              usdt: state.usdt + 1,
              dnge: state.dnge + 1
            }
          });
        }
      });
    }
  };

  /**
   * 用户点击左侧 Claim 按钮
   */
  const onBtnLeftClick = async () => {
    console.log("Claim");
    dispatch({ type: "claim", payload: {} });
  };

  /**
   * 页面初始化
   */
  const init = async () => {
    console.log("init");
    dispatch({ type: "init", payload: provider });
  };

  useEffect(() => {
    init();
  }, []);

  const callback = {
    onOpen,
    onBtnLeftClick,
    onSelectNumber: setSelected
  };
  return (
    <Stateless {...props} selected={selected} state={state} {...callback} />
  );
};
