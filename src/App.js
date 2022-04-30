import { homePath } from "@/config/routes";
import { ThemeProvider } from "@/context/theme";
import { Web3ContextProvider } from "@/vendors/hooks/web3-context";
import Layout from "@/layout/Layout";
import useHomePage from "@/hooks/useHomePage";
import "./global.less";
import FullScreenAnimate from "./components/FullScreenAnimate";
import { message } from "antd";

message.config({
  top: '10%',
});

export default () => {
  useHomePage(homePath);
  return (
    <>
      <ThemeProvider>
        <Web3ContextProvider>
          <Layout />
          <FullScreenAnimate />
        </Web3ContextProvider>
      </ThemeProvider>
    </>
  );
};
