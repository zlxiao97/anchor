import { useWeb3Context } from "../../../hooks/web3-context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default (Stateless) => (props) => {
  const navigate = useNavigate();
  const { address, connect } = useWeb3Context();

  useEffect(() => {
    if (address) navigate("/preSale");
  }, [address]);

  const states = {
    address
  };
  const callback = {
    connect
  };
  return <Stateless {...props} {...states} {...callback} />;
};
