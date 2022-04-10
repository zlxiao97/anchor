import { useWeb3Context } from "@/vendors/hooks/web3-context";
import useFormValidate from "@/hooks/useFormValidate";
import { Form } from "antd";
import { useEffect } from "react";

export default (Stateless) => (props) => {
  const [form] = Form.useForm();
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
  const [isValid, onValuesChange] = useFormValidate(form);
  /**
   * 用户点击 Approve 按钮
   * @param  {Object} values 表单数据
   */
  const approve = async (values) => {
    console.log("Current Address: ", address);
    console.log("Web3 Provider: ", provider);
    console.log("Received values of form: ", values);
  };

  /**
   * 用户点击 Join PreSale 按钮
   */
  const joinPresale = async () => {
    console.log("join button was clicked");
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

  const data = {
    form,
    isValid
  };
  const callback = {
    onValuesChange,
    approve,
    joinPresale
  };
  return <Stateless {...props} {...data} {...callback} />;
};
