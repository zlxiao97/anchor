import { Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.scss";
import Footer from "./layout/Footer";
import { homePath } from "./config/routes";
import { useEffect } from "react";
import { Web3ContextProvider } from "./vendors/hooks/web3-context";
import Header from "./layout/Header";

const { Content } = Layout;

export default (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(homePath, { replace: true });
  }, []);
  return (
    <>
      <Web3ContextProvider>
        <Layout>
          <Header />
          <Content>
            <div className="site-layout-content">
              <Outlet />
            </div>
          </Content>
          <Footer />
        </Layout>
      </Web3ContextProvider>
    </>
  );
};
