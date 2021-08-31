import * as React from "react";
import { Button, Col, Form, Input, Layout, Row, Steps } from "antd";
import { Profile } from "../@types";
import { formSteps } from "../constants";

const { Step } = Steps;

interface WalkthroughProps {
  setProfile: (
    value: Profile | ((val: Profile | null) => Profile | null) | null
  ) => void;
}

const Walkthrough = (props: WalkthroughProps) => {
  const { setProfile } = props;

  const [form] = Form.useForm();

  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const nameState = React.useState<string>("");
  const emailState = React.useState<string>("");
  const passwordState = React.useState<string>("");
  const confirmPasswordState = React.useState<string>("");

  const formState: {
    [index: string]: [string, React.Dispatch<React.SetStateAction<string>>];
  } = {
    confirmPassword: confirmPasswordState,
    email: emailState,
    name: nameState,
    password: passwordState,
  };

  const handleContinue = (formValue: any) => {
    console.log({ formValue });
    const formKey = Object.keys(formValue)[0];
    const setter = formState[formKey][1];
    setter(formValue[formKey]);
    setCurrentStep(currentStep + 1);
  };

  const handleFinish = () => {
    setProfile({
      email: emailState[0],
      name: nameState[0],
      password: passwordState[0],
    });
  };

  return (
    <Layout id="walkthrough">
      <Layout.Content
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row>
          <Col>
            <Steps direction="vertical" current={currentStep}>
              <Step title="Name" />
              <Step title="Email" />
              <Step title="Password" />
              <Step title="Finish" />
            </Steps>
          </Col>
          <Col>
            <Form
              form={form}
              layout="vertical"
              name={formSteps[currentStep].name}
              onFinish={currentStep === 3 ? handleFinish : handleContinue}
            >
              <Form.Item
                dependencies={formSteps[currentStep]?.dependencies}
                label={formSteps[currentStep].label}
                name={formSteps[currentStep].name}
                required
                rules={formSteps[currentStep].rules}
              >
                <Input />
              </Form.Item>
              <Button htmlType="submit" type="primary">
                {currentStep === 3 ? "Finish" : "Continue"}
              </Button>
              {currentStep > 0 && (
                <Button onClick={() => setCurrentStep(currentStep - 1)}>
                  Back
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default Walkthrough;
