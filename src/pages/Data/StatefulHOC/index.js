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
   * 用户点击右侧第一个 template 按钮
   */
  const onBtn1Click = () => {
    if (selected !== undefined) {
      alert(selected);
    }
  };

  /**
   * 用户点击右侧第二个 template 按钮
   */
  const onBtn2Click = () => {
    if (selected !== undefined) {
      alert(selected);
    }
  };

  /**
   * 用户点击左侧第一个 template 按钮
   */
  const onBtnLeftClick = () => {
    console.log("onBtnLeftClick");
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
