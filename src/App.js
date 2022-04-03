import { homePath } from "@/config/routes";
import { Web3ContextProvider } from "@/vendors/hooks/web3-context";
import Layout from "@/layout/Layout";
import useHomePage from "@/hooks/useHomePage";
import './global.less'

export default () => {
  useHomePage(homePath);
  return (
    <>
      <Web3ContextProvider>
        <Layout />
      </Web3ContextProvider>
    </>
  );
};
