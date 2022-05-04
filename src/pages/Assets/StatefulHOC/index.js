import { useWeb3Context } from "@/vendors/hooks/web3-context";
import useFormValidate from "@/hooks/useFormValidate";
import { Form, message, Modal } from "antd";
import { useEffect, useState } from "react";

import { ethers } from "ethers";
import NFTJson from "../../../artifacts/contracts/MetaspaceNft.sol/MetaspaceNft.json";

import { NFT_ADDRESS } from "@/config/web3";
import useMediaQuery from "@/hooks/useMediaQuery";
import { get } from "lodash";

const mockCardData = [
  {
    level: 1,
    attack: 1,
    defense: 1,
    flexible: 1,
    durability: 1
  },
  {
    level: 1,
    attack: 1,
    defense: 1,
    flexible: 1,
    durability: 1
  },
  {
    level: 1,
    attack: 1,
    defense: 1,
    flexible: 1,
    durability: 1
  },
  {
    level: 1,
    attack: 1,
    defense: 1,
    flexible: 1,
    durability: 1
  }
];

export default (Stateless) => (props) => {
  const [activationCode, setActivationCode] = useState();
  const [createCode, setCreateCode] = useState();
  const [cards, setCards] = useState([]);
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
  const nft = new ethers.Contract(NFT_ADDRESS, NFTJson["abi"], signer);

  /**
   * 页面初始化，可以在这里初始化卡片数据
   */
  const init = async () => {
    console.log("init");
    setCards(mockCardData);
  };

  /**
   * 用户输入 ActivationCode
   */
  const onActivationCodeChange = (e) => {
    const value = e.target.value;
    setActivationCode(value);
  };

  /**
   * 用户输入 createCode
   */
  const onCreateCodeChange = (e) => {
    const value = e.target.value;
    setCreateCode(value);
  };

  /**
   * 用户点击 Submit
   */
  const onSubmitClick = () => {
    console.log(activationCode);
    
    fetch();

  };

  /**
   * 用户点击 Get
   */
  const onGetClick = () => {
    console.log(createCode);
  };

  useEffect(() => {
    init();
  }, []);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  const data = {
    isMobile,
    cards,
    activationCode,
    createCode
  };
  const callback = {
    onActivationCodeChange,
    onCreateCodeChange,
    onSubmitClick,
    onGetClick
  };
  return <Stateless {...props} {...data} {...callback} />;
};
