import { useWeb3Context } from "@/vendors/hooks/web3-context";
import useFormValidate from "@/hooks/useFormValidate";
import { Form, message, Modal } from "antd";
import { useEffect, useState } from "react";

import { ethers } from "ethers";
import NFTJson from "../../../artifacts/contracts/MetaspaceNft.sol/MetaspaceNft.json";

import { NFT_ADDRESS } from "@/config/web3";
import useMediaQuery from "@/hooks/useMediaQuery";
import { get } from "lodash";

export default (Stateless) => (props) => {
  const [form] = Form.useForm();
  const [numbers, setNumbers] = useState([0, 0, 0, 0]);
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
  const signer = provider.getSigner();
  const nft = new ethers.Contract(NFT_ADDRESS, NFTJson["abi"], signer);

  /**
   * 用户点击 Mint 按钮
   */
  const userMint = async () => {
    const values = form.getFieldsValue(); // values.count 是用户输入的数量
    console.log(values);
    var tx;
    try {
      tx = await nft.userMint({
        gasPrice: 20000000000,
        gasLimit: 2000000,
        value: "500000000000000000"
      });
      await tx.wait();
    } catch (e) {
      if ("account" in e) {
        Modal.warning({ title: "Please connect your wallet" });
      } else if (e["data"]["message"].search("All nft has been sold.") != -1) {
        Modal.warning({ title: "All nft has been sold." });
      }
    }
  };

  /**
   * 页面初始化，可以在这里初始化卡片的数量
   */
  const init = async () => {
    console.log("init");
    setNumbers([1, 0, 0, 0]); // 从接口获取卡片数量
  };

  /**
   * 用户点击减号
   */
  const substractCount = () => {
    const values = form.getFieldsValue();
    const count = +get(values, "count", 0);
    if (!Number.isNaN(count))
      form.setFieldsValue({
        ...values,
        count: count - 1
      });
  };

  /**
   * 用户点击加号
   */
  const addCount = () => {
    const values = form.getFieldsValue();
    const count = +get(values, "count", 0);
    if (!Number.isNaN(count))
      form.setFieldsValue({
        ...values,
        count: count + 1
      });
  };

  useEffect(() => {
    init();
  }, []);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  const data = {
    form,
    isValid,
    isMobile,
    numbers
  };
  const callback = {
    onValuesChange,
    userMint,
    addCount,
    substractCount
  };
  return <Stateless {...props} {...data} {...callback} />;
};
