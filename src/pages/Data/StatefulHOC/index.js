import { useEffect, useState } from "react";
import { useWeb3Context } from "@/vendors/hooks/web3-context";

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
      alert("coming soon");
    }
  };

  /**
   * 用户点击右侧从左往右数第二个 OPEN 按钮
   */
  const onBtn2Click = async () => {
    if (selected !== undefined) {
      alert("coming soon");
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
