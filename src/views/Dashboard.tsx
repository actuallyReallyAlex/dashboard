import * as React from "react";
import { Layout } from "antd";
import { QuickLink } from "../@types";
import Footer from "../layout/Footer";
import Sidebar from "../layout/Sidebar";
import Content from "../layout/Content";

// TODO - Create way for user to create quick links in the application
const quickLinks: QuickLink[] = [
  {
    icon: "CiCircleOutlined",
    name: "CircleCI",
    url: "https://circleci.com/",
  },
  {
    icon: "AlertOutlined",
    name: "OpsGenie",
    url: "https://www.atlassian.com/software/opsgenie",
  },
];

const Dashboard = () => {
  return (
    <Layout id="application">
      <Sidebar quickLinks={quickLinks} />
      <Layout className="site-layout">
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
