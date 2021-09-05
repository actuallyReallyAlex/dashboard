import * as React from "react";
import { Col, Layout, Row } from "antd";
import { Configuration } from "../@types";
import { defaultConfiguration, widgets } from "../constants";
import useLocalStorage from "../hooks/useLocalstorage";
import Header from "./Header";

interface ContentProps {
  configuration: Configuration;
}

const Content = (props: ContentProps) => {
  const { configuration } = props;
  return (
    <Layout.Content>
      <Header />
      <div id="data">
        {configuration.map((row, i) => (
          <Row key={`row-${i}`} gutter={24}>
            {row.map((column) => {
              const Widget = widgets[column.widget];
              return (
                <Col span={column.size}>
                  <Widget />
                </Col>
              );
            })}
          </Row>
        ))}
      </div>
    </Layout.Content>
  );
};

export default Content;
