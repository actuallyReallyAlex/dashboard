import { FormItem } from "./@types";

export const formSteps: FormItem[] = [
  {
    label: "Name",
    name: "name",
    rules: [
      { message: "Invalid name format", type: "string" },
      { message: "Please input a name", required: true },
    ],
  },
  {
    label: "Email",
    name: "email",
    rules: [
      { message: "Invalid email format", type: "email" },
      { message: "Please input an email address", required: true },
    ],
  },
  {
    label: "Password",
    name: "password",
    rules: [{ message: "Please input a password", required: true }],
  },
  {
    dependencies: [["password"]],
    label: "Confirm Password",
    name: "confirmPassword",
    rules: [
      { message: "Please confirm your password", required: true },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error("The two passwords that you entered do not match!")
          );
        },
      }),
    ],
  },
];
