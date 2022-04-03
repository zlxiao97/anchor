import ModuleContainer from "../../components/ModuleContainer";
import PageLayout from "../../layout/PageLayout";
import Form from "./modules/Form";
import layout from "./config/layout";
import Introduce from "./modules/Introduce";
import styles from "./index.module.css";
import { ethers } from "ethers";

import PresaleJson from "../../../src/artifacts/contract/IDO.sol/ONESale.json"
import UsdtJson from "../../../src/artifacts/contract/oneline/usdt.json"

// todo 1.给所有页面的js加入连接钱包后的wallet  2.增加对应button的函数 3.函数需要是异步的
// 4.每个页面有个init函数

USDT_largeapproval = '100000000000000000000000000000000';
IDO_ADDRESS = "";
USDT_ADDRESS = "";


function init {
  const signer = provider.getSigner();
  const ptssale = new ethers.Contract(IDO_ADDRESS, PTSSale['abi'], signer);
  const usdt = new ethers.Contract(USDT_ADDRESS, UsdtJson['abi'], signer);
}
 
function approve() {
  const user_address = await signer.getAddress();
  const approval = await daitoken.allowance(user_address, ptssale.address);
  if (approval > 0) {
      dispatch(warning({ text: "you have approved" }));
  } else {
      const approval_ret = await daitoken.approve(ptssale.address, largeApproval);
  }
}

function joinPresale() {

}

export default () => {
  return (
    <>
      <PageLayout layout={layout}>
        <div key="m1">
          <ModuleContainer>
            <Introduce />
          </ModuleContainer>
        </div>
        <div key="m2">
          <ModuleContainer>
            <Form />
          </ModuleContainer>
        </div>
      </PageLayout>
    </>
  );
};
