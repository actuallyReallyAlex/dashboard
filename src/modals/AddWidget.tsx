import * as React from "react";
import { Form, Modal, Select } from "antd";
import { widgets } from "../constants";
import {
  ColumnSize,
  Configuration,
  ConfigurationColumn,
  ConfigurationRow,
  Widget,
} from "../@types";

interface AddWidgetProps {
  configuration: Configuration;
  isAddWidgetModalVisible: boolean;
  setConfiguration: (configuration: Configuration) => void;
  setIsAddWidgetModalVisible: (isAddWidgetModalVisible: boolean) => void;
}

const AddWidget = (props: AddWidgetProps) => {
  const {
    configuration,
    isAddWidgetModalVisible,
    setConfiguration,
    setIsAddWidgetModalVisible,
  } = props;

  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsAddWidgetModalVisible(false);
  };

  const handleFinish = (formData: { widget: Widget }) => {
    const { widget } = formData;
    const firstRow = configuration[0];
    const numFirstRowColumns = firstRow.length;
    const newSize: ColumnSize = 24 / (numFirstRowColumns + 1);

    const newRow: ConfigurationRow = firstRow.map((configurationColumn, i) => {
      return { ...configurationColumn, size: newSize };
    });
    const newColumn: ConfigurationColumn = { size: newSize, widget };
    newRow.unshift(newColumn);
    const newConfiguration: Configuration = configuration.map(
      (configurationRow, i) => {
        if (i === 0) {
          return newRow;
        }

        return configurationRow;
      }
    );
    setConfiguration(newConfiguration);
  };

  return (
    <Modal
      onCancel={handleCancel}
      onOk={() => form.submit()}
      title="Add Widget"
      visible={isAddWidgetModalVisible}
    >
      <Form
        form={form}
        layout="vertical"
        name="add-widget"
        onFinish={handleFinish}
      >
        <Form.Item
          label="Widget"
          name="widget"
          required
          rules={[{ message: "Please select a widget", required: true }]}
        >
          <Select>
            {Object.keys(widgets).map((widget) => (
              <Select.Option key={widget} value={widget}>
                {widget}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddWidget;
