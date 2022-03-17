import { Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Menu from "./layout/Menu";
import "./App.css";
import Footer from "./layout/Footer";
import { homePath } from "./config/routes";
import { useEffect } from "react";

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
            <Outlet />
          </div>
        </Content>
        <Footer />
      </Layout>
    </>
  );
};
