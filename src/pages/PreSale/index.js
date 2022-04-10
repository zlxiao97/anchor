import StatefulHOC from "./StatefulHOC";
import Stateless from "./Stateless";
// import { ethers } from "ethers";

import PresaleJson from "../../artifacts/contracts/IDO.sol/ONESale.json";
import UsdtJson from "../../artifacts/contracts/online/USDT.json";

const USDT_largeapproval = "100000000000000000000000000000000";
const IDO_ADDRESS = "0x47B00a422678130337A02675B4d2B0EAe6935CE5";
const USDT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955";


async function init() {
  // const signer = provider.getSigner();
  // const presale = new ethers.Contract(IDO_ADDRESS, PresaleJson["abi"], signer);
  // const usdt = new ethers.Contract(USDT_ADDRESS, UsdtJson["abi"], signer);

}

async function approve() {
  // const user_address = await signer.getAddress();
  // const approval = await daitoken.allowance(user_address, presale.address);
  // if (approval > 0) {
  //   dispatch(warning({ text: "you have approved" }));
  // } else {
  //   const approval_ret = await daitoken.approve(presale.address, largeApproval);
  // }
}

function joinPresale(usdt_amount) {
  // const tx = await presale.buy(usdt_amount);
  // await tx.wait();
}

export default StatefulHOC(Stateless);
