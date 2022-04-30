import { useWeb3Context } from "@/vendors/hooks/web3-context";
import useFormValidate from "@/hooks/useFormValidate";
import { Form, message, Modal } from "antd";
import { useEffect } from "react";

import { ethers } from "ethers";
import NFTJson from "../../../artifacts/contracts/MetaspaceNft.sol/MetaspaceNft.json";

import { NFT_ADDRESS } from "@/config/web3";
import useMediaQuery from "@/hooks/useMediaQuery";

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
    const signer = provider.getSigner();
    const nft = new ethers.Contract(NFT_ADDRESS, NFTJson["abi"], signer);

    /**
     * 用户点击 Join PreSale 按钮
     * @param  {Object} values 表单数据
     */
    const userMint = async() => {
        var tx;
        try {
          tx = await nft.userMint({
            gasPrice: 20000000000,
            gasLimit: 2000000,
            value: '500000000000000000'
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
     * 页面初始化
     */
    const init = async() => {
        console.log("init");
    };

    useEffect(() => {
        init();
    }, []);

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("xs"));

    const data = {
        form,
        isValid,
        isMobile
    };
    const callback = {
        onValuesChange,
        userMint
    };
    return <Stateless {...props } {...data } {...callback }
    />;
};
