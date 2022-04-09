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
    name: "Hunt",
    path: "data",
    component: require("../pages/Data").default
  },
  {
    name: "PreSale",
    path: "preSale",
    component: require("../pages/PreSale").default
  },
  {
    name: "SpaceShip NFT",
    path: "",
    component: require("../pages/Home").default // todo 让这个按钮不能被点击
  },
  // {
  //   name: "Page2",
  //   path: "page2",
  //   component: require("../pages/Page2").default
  // }
];
