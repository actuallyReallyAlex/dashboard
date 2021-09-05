import React from "react";
import { Configuration, FormItem } from "./@types";
import PlaceholderCard from "./components/PlaceholderCard";
import CrunchOMeter from "./features/crunch-o-meter/components/Widget";
import GoalOfTheDay from "./features/goal-of-the-day/components/Widget";

export const defaultConfiguration: Configuration = [
  [
    { size: 12, widget: "crunch-o-meter" },
    { size: 12, widget: "goal-of-the-day" },
  ],
  [{ size: 24, widget: "placeholder-card" }],
  [{ size: 24, widget: "placeholder-card" }],
  [{ size: 24, widget: "placeholder-card" }],
];

export const widgets: {
  [index: string]: React.FunctionComponent<{}>;
} = {
  "crunch-o-meter": CrunchOMeter,
  "goal-of-the-day": GoalOfTheDay,
  "placeholder-card": PlaceholderCard,
};

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
