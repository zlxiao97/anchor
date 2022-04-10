export const homePath = "/home";

export default [
  // {
  //   name: "connect",
  //   path: "connect",
  //   component: require("../vendors/pages/IDO").default,
  //   hideInMenu: true
  // },
  {
    name: "HOME",
    path: "home",
    component: require("../pages/Home").default
  },
  {
    name: "PreSale",
    path: "preSale",
    component: require("../pages/PreSale").default
  },
  {
    name: "Play",
    path: "data",
    component: require("../pages/Data").default
  },
  {
    name: "NFT", // todo 点击后弹框显示 coming soon
    path: "nft",
    // component: require("../pages/Home").default 
  },
  // {
  //   name: "Page2",
  //   path: "page2",
  //   component: require("../pages/Page2").default
  // }
];
