import { Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Menu from "./layout/Menu";
import "./App.scss";
import Footer from "./layout/Footer";
import { homePath } from "./config/routes";
import { useEffect } from "react";
import { Web3ContextProvider } from "./vendors/hooks/web3-context";

const { Header, Content } = Layout;

export default (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(homePath, { replace: true });
  }, []);
  return (
    <>
      <Layout>
        <Header>
          {/* <div className="logo" /> */}
          <Menu />
        </Header>
        <Content>
          <div className="site-layout-content">
            <Web3ContextProvider>
              <Outlet />
            </Web3ContextProvider>
          </div>
        </Content>
        <Footer />
      </Layout>
    </>
  );
};
