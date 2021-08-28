import * as React from "react";
import { Button, Menu } from "antd";
import { AlertOutlined, CiCircleOutlined } from "@ant-design/icons";
import { Icon } from "../@types";

interface IconDict {
  [key: string]: any;
}

interface QuickLinkProps {
  icon: Icon;
  name: string;
  url: string;
}

const icons: IconDict = {
  AlertOutlined,
  CiCircleOutlined,
};

const QuickLink: React.FunctionComponent<QuickLinkProps> = (
  props: QuickLinkProps
) => {
  const { icon, name, url } = props;

  const Icon = icons[icon];

  return (
    <Menu.Item>
      <Button href={url} icon={<Icon />} target="_blank" type="link">
        {name}
      </Button>
    </Menu.Item>
  );
};

export default QuickLink;
