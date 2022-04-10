import { useEffect, useState } from "react";
import { useWeb3Context } from "@/vendors/hooks/web3-context";

/**  钱包 todo
 * 连接钱包后显示如下  0x前4个字母...后4个字母；
 * 连接钱包后刷新保持状态；
 */

/**  play页面 todo 
 * 删除掉onBtn2Click；
 * 选中后将数字的圆圈颜色填充成一个颜色；
 * 点击open后居中弹框一个进度条；
 * 当open函数返回后进度条显示返回结果，并更新Earn数值；
 * connect wallet后将Earn的数值填充；
 * Claim后更新Earn的数值；
 * 找一个从远程获取随机数的函数；
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

  /**
   * 用户点击右侧从左往右数第一个 OPEN 按钮
   */
  const onBtn1Click = async () => {
    if (selected !== undefined) {
      // alert("coming soon");
      console.log("coming soon")
    }
  };

  /**
   * 用户点击右侧从左往右数第二个 OPEN 按钮
   */
  const onBtn2Click = async () => {
    if (selected !== undefined) {
      // alert("coming soon");
      console.log("coming soon")
    }
  };

  /**
   * 用户点击左侧 Claim 按钮
   */
  const onBtnLeftClick = async () => {
    console.log("Claim");
  };

  /**
   * 页面初始化
   */
  const init = async () => {
    console.log("init");
  };

  useEffect(() => {
    init();
  }, []);

  const callback = {
    onBtn1Click,
    onBtn2Click,
    onBtnLeftClick,
    onSelectNumber: setSelected
  };
  return <Stateless {...props} selected={selected} {...callback} />;
};
