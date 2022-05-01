import { message } from "antd";

export const homePath = "/home";

export default [
  // {
  //   name: "connect",
  //   path: "connect",
  //   component: require("../vendors/pages/IDO").default,
  //   hideInMenu: true
  // },
  {
    name: "Home",
    path: "home",
    component: require("../pages/Home").default
  },
  // {
  //   name: "PreSale",
  //   path: "preSale",
  //   component: require("../pages/PreSale").default
  // },
  {
    name: "Play",
    path: "data",
    component: require("../pages/Data").default
  },
  {
    name: "NFT",
    path: "nft",
    component: require("../pages/NFT").default
  },
  // {
  //   name: "SuperLotto",
  //   path: "supperlotto",
  //   component: require("../pages/SuperLotto").default
  //   // onClick: () => {
  //   //   message.info("coming soon");
  //   // }
  // },
  {
    name: "Market",
    path: "market",
    onClick: () => {
      message.info("coming soon");
    }
    // component: require("../pages/Home").default
  }
  // {
  //   name: "Page2",
  //   path: "page2",
  //   component: require("../pages/Page2").default
  // }
];
