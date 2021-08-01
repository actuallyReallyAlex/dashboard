import * as React from "react";
import { Col, Layout, Row } from "antd";
import Header from "./Header";
import PlaceholderCard from "../components/PlaceholderCard";

const Content: React.FunctionComponent = () => {
  return (
    <Layout.Content>
      <Header />
      <div id="data">
        <Row gutter={24}>
          <Col span={6}>
            <PlaceholderCard />
          </Col>
          <Col span={6}>
            <PlaceholderCard />
          </Col>
          <Col span={6}>
            <PlaceholderCard />
          </Col>
          <Col span={6}>
            <PlaceholderCard />
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={24}>
            <PlaceholderCard rows={6} />
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <PlaceholderCard rows={8} />
          </Col>
          <Col span={12}>
            <PlaceholderCard rows={8} />
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={24}>
            <PlaceholderCard rows={12} />
          </Col>
        </Row>
      </div>
    </Layout.Content>
  );
};

export default Content;
