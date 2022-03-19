export const homePath = "/preSale";

export default [
  // Dashboard 仅为 demo
  // {
  //   name: "Dashboard",
  //   path: "dashboard",
  //   component: require("../pages/Dashboard").default
  // },
  // {
  //   name: "connect",
  //   path: "connect",
  //   component: require("../vendors/pages/IDO").default,
  //   hideInMenu: true
  // },
  {
    name: "PreSale",
    path: "preSale",
    component: require("../pages/PreSale").default
  },
  {
    name: "Page2",
    path: "page2",
    component: require("../pages/Page2").default
  }
];
