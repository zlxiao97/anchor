import { useWeb3Context } from "@/vendors/hooks/web3-context";
import useFormValidate from "@/hooks/useFormValidate";
import { Form, message, Modal } from "antd";
import { useEffect } from "react";

import { ethers } from "ethers";
import PresaleJson from "../../../artifacts/contracts/IDO.sol/MetaPreSale.json";
import UsdtJson from "../../../artifacts/contracts/online/USDT.json";

import { USDT_largeApproval, IDO_ADDRESS, USDT_ADDRESS } from "@/config/web3";
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
    const presale = new ethers.Contract(IDO_ADDRESS, PresaleJson["abi"], signer);
    const usdt = new ethers.Contract(USDT_ADDRESS, UsdtJson["abi"], signer);

    /**
     * 用户点击 Approve 按钮
     */
    const approve = async() => {
        if (!connected) {
            Modal.warning({ title: "Connect your wallet first!" });
            console.log("Connect your wallet first!");
        }

        const user_address = await signer.getAddress();
        const approval = await usdt.allowance(user_address, presale.address);
        if (approval > 0) {
            Modal.warning({ title: "you have approved" });
        } else {
            const approval_ret = await usdt.approve(
                presale.address,
                USDT_largeApproval
            );
        }
    };

    /**
     * 用户点击 Join PreSale 按钮
     * @param  {Object} values 表单数据
     */
    const joinPresale = async(amount) => {
        const usdt_amount = amount["from"];
        var tx;
        try {
            tx = await presale.buy(usdt_amount);
            await tx.wait();
        } catch (e) {
            if ("account" in e) {
                Modal.warning({ title: "Please connect your wallet" });
            } else if (e["data"]["message"].search("amount exceed") != -1) {
                Modal.warning({ title: "USDT is not enough" });
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
        approve,
        joinPresale
    };
    return <Stateless {...props } {...data } {...callback }
    />;
};