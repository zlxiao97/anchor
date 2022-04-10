import { useWeb3Context } from "@/vendors/hooks/web3-context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default (Stateless) => (props) => {
  const navigate = useNavigate()
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
   * 用户点击 White Paper 按钮
   */
  const onTitleBtn1Click = () => {
    // window.location.assign('/wp.pdf')
  };

  /**
   * 用户点击 Play 按钮
   */
  const onTitleBtn2Click = () => {
    navigate('/data')
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
