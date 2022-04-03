import { PATH_AFTER_CONNECT } from "@/config/config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3Context } from "@/vendors/hooks/web3-context";

export default () => {
  const navigate = useNavigate();
  const { address, connect } = useWeb3Context();
  useEffect(() => {
    if (address) navigate(PATH_AFTER_CONNECT);
  }, [address]);
  return [address, connect];
};
