import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3Context } from "../../../../../vendors/hooks/web3-context";

export default (Stateless) => (props) => {
  const navigate = useNavigate();
  const { address, connect } = useWeb3Context();
  useEffect(() => {
    if (address) navigate("/preSale");
  }, [address]);

  const states = {
    address
  };
  const callback = { connect };
  return <Stateless {...props} {...states} {...callback} />;
};
