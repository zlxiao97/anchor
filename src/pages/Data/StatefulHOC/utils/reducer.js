export default (state, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case "init":
      const provider = payload;
      // 从 provider 中获取初始化数据
      console.log("web3 provider:", provider);
      return {
        ...state,
        eth: 0,
        bnb: 0,
        usdt: 0,
        dnge: 0
      };
    case "open":
      const { eth, bnb, usdt, dnge } = payload;
      return {
        ...state,
        eth,
        bnb,
        usdt,
        dnge
      };
    case "claim":
      return state;
    default:
      return state;
  }
};
