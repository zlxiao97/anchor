import { useEffect, useState } from "react";
import PubSub from "pubsub-js";
import { useWeb3Context } from "@/vendors/hooks/web3-context";
import useStates from "@/hooks/useStates";
import reducer from "./utils/reducer";
import useMediaQuery from "@/hooks/useMediaQuery";

import { ethers } from "ethers";
import CardJson from "../../../artifacts/contracts/OpenCard.sol/CardProtocol.json";
// import MetaJson from "../../../artifacts/contracts/online/Meta.json";

import { USDT_largeApproval, IDO_ADDRESS, USDT_ADDRESS, CARD_ADDRESS, META_ADDRESS } from "@/config/web3";
import { max } from "lodash";


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

  const signer = provider.getSigner();
  const card = new ethers.Contract(CARD_ADDRESS, CardJson["abi"], signer);
  // const meta = new ethers.Contract(META_ADDRESS, MetaJson["abi"], signer);

  const [selected, setSelected] = useState();
  const [state, dispatch] = useStates(reducer, { eth: 0, bnb: 0, usdt: 0, doge: 0 });
  var coin_dict = { 
    0: state.usdt, 1: state.bnb, 2: state.eth, 3: state.doge
  }
  

  /**
   * 用户点击 OPEN 按钮
   */
  const onOpen = async () => {
    // if (selected !== undefined) {      
    //   const number = Math.round(Math.random() * 4)
    //   //播放动画
    //   PubSub.publish("OPEN BOX", {
    //     selected,
    //     isWin: true, // todo: 对接接口
    //     onFinish() {
    //       // 动画播放完毕后执行
    //       dispatch({
    //         type: "open",
    //         payload: {
    //           eth: state.eth,
    //           bnb: state.bnb,
    //           usdt: state.usdt,
    //           doge: state.doge
    //         }
    //       });
    //     }
    //   });
    // }

    // for demo
    // if (selected !== undefined) {      
    //   const number = Math.round(Math.random() * 4)
    //   console.log(number)
    //   if (number == 0) {
    //     state.eth += 0.1;
    //   } else if (number == 1) {
    //     state.bnb += 1;
    //   } else if (number == 2) {
    //     state.usdt += 100;
    //   } else {
    //     state.doge += 500;
    //   }
    //   //播放动画
    //   PubSub.publish("OPEN BOX", {
    //     selected,
    //     isWin: true, // todo: 对接接口
    //     onFinish() {
    //       // 动画播放完毕后执行
    //       dispatch({
    //         type: "open",
    //         payload: {
    //           eth: state.eth,
    //           bnb: state.bnb,
    //           usdt: state.usdt,
    //           doge: state.doge
    //         }
    //       });
    //     }
    //   });
    // }


    if (selected !== undefined) {
      const tx = await card.open_test(5, {
        gasPrice: 10000000000,
        gasLimit: 2000000});
      // const tx = await card.open_test(5);
      await tx.wait();

      PubSub.publish("OPEN BOX", {
        selected,
        isWin: true, // todo: 对接接口
        onFinish: async () => {
          // 动画播放完毕后执行
          var reward = await card.getUserRewards();
          const coin_decimals = await card.getDecimals();
          for (var i = 0; i < 4; i++) {
            coin_dict[i] = reward[i] / coin_decimals[i];
            num = Math.max(num, coin_dict[i]);
            console.log(coin_dict[i]);
          }
          var num = Math.random();
          if (num > 0.99) {
            num = 1;
          } else {
            num /= 2;
          }
          
          console.log(num);
          dispatch({
            type: "open",
            payload: {
              eth: 0,
              bnb: num,
              usdt: 0,
              doge: 0
            }
          });
          // dispatch({
          //   type: "open",
          //   payload: {
          //     eth: coin_dict[2],
          //     bnb: coin_dict[1],
          //     usdt: coin_dict[0],
          //     doge: coin_dict[3]
          //   }
          // });
        }
      });
    }
  };

  /**
   * 用户点击左侧 Claim 按钮
   */
  const onBtnLeftClick = async () => {
    console.log("Claim");
    // var tx = await card.claim();
    // await tx.wait();
    
    // reward = await card.getUserRewards();
    // for (var i = 0; i < 4; i++) {
    //   coin_dict[i] = reward[i] / coin_decimals[i];
    // }
    dispatch({
      type: "open",
      payload: {
        eth: state.eth,
        bnb: state.bnb,
        usdt: state.usdt,
        doge: state.doge
      }
    });
  };

  /**
   * 页面初始化
   */
  const init = async () => {
    console.log("init");
    dispatch({ type: "init", payload: provider });
    var reward = await card.getUserRewards();
    const coin_decimals = await card.getDecimals();
    for (var i = 0; i < 4; i++) {
      coin_dict[i] = reward[i] / coin_decimals[i];
      console.log(coin_dict[i]);
    }
    dispatch({
      type: "open",
      payload: {
        eth: coin_dict[2],
        bnb: coin_dict[1],
        usdt: coin_dict[0],
        doge: coin_dict[3]
      }
    });
  };
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  useEffect(() => {
    init();
  }, []);

  const callback = {
    onOpen,
    onBtnLeftClick,
    onSelectNumber: setSelected
  };
  return (
    <Stateless {...props} selected={selected} state={state} {...callback} isMobile={isMobile} />
  );
};
