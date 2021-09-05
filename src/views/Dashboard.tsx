import * as React from "react";
import { Layout } from "antd";
import { QuickLink } from "../@types";
import Footer from "../layout/Footer";
import Sidebar from "../layout/Sidebar";
import Content from "../layout/Content";
import AddWidgetModal from "../modals/AddWidget";
import { Configuration } from "../@types";

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

interface DashboardProps {
  configuration: Configuration;
  setConfiguration: (configuration: Configuration) => void;
}

const Dashboard = (props: DashboardProps) => {
  const { configuration, setConfiguration } = props;
  const [isAddWidgetModalVisible, setIsAddWidgetModalVisible] =
    React.useState<boolean>(false);

  return (
    <Layout id="application">
      <Sidebar
        quickLinks={quickLinks}
        setConfiguration={setConfiguration}
        setIsAddWidgetModalVisible={setIsAddWidgetModalVisible}
      />
      <Layout className="site-layout">
        <Content configuration={configuration} />
        <AddWidgetModal
          configuration={configuration}
          isAddWidgetModalVisible={isAddWidgetModalVisible}
          setConfiguration={setConfiguration}
          setIsAddWidgetModalVisible={setIsAddWidgetModalVisible}
        />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
