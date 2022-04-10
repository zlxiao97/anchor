import { useWeb3Context } from "@/vendors/hooks/web3-context";
import { useEffect } from "react";

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
  /**
   * 用户点击标题第一个 Lauch Community 按钮
   */
  const onTitleBtn1Click = () => {
    console.log("onTitleBtn1Click");
  };

  /**
   * 用户点击标题第二个 Stake Fuse 按钮
   */
  const onTitleBtn2Click = () => {
    console.log("onTitleBtn2Click");
  };

  /**
   * 用户点击中间 Lauch Community 按钮
   */
  const onMiddleBtnClick = () => {
    console.log("onMiddleBtnClick");
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
    onTitleBtn1Click,
    onTitleBtn2Click,
    onMiddleBtnClick
  };

  return <Stateless {...props} {...callback} />;
};
