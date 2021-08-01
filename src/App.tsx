import * as React from "react";
import { Layout } from "antd";
import Footer from "./layout/Footer";
import Sidebar from "./layout/Sidebar";
import Content from './layout/Content';

const App: React.FunctionComponent = () => {
  return (
    <Layout id="application">
      <Sidebar />
      <Layout className="site-layout">
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
