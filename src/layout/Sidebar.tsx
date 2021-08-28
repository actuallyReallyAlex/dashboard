import * as React from "react";
import { Layout as AntdLayout, Menu } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  LinkOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { QuickLink as QuickLinkType } from "../@types";
import QuickLink from "../components/QuickLink";

const { Sider } = AntdLayout;
const { SubMenu } = Menu;

interface SidebarProps {
  quickLinks: QuickLinkType[];
}

const Sidebar: React.FunctionComponent<SidebarProps> = (
  props: SidebarProps
) => {
  const { quickLinks } = props;

  return (
    <Sider collapsible>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <SubMenu key="quick-links" icon={<LinkOutlined />} title="Quick Links">
          {quickLinks.map((quickLink, i) => (
            <QuickLink key={`quick-link-${i}`} {...quickLink} />
          ))}
        </SubMenu>
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
