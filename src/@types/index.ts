import { Rule } from "antd/lib/form";
import { NamePath } from "antd/lib/form/interface";

export type ColumnSize =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | number;

export type Configuration = ConfigurationRow[];

export interface ConfigurationColumn {
  size: ColumnSize;
  widget: "crunch-o-meter" | "goal-of-the-day" | "placeholder-card";
}

export type ConfigurationRow = ConfigurationColumn[];

export interface FormItem {
  dependencies?: NamePath[];
  label: string;
  name: string;
  rules: Rule[];
}

export type Icon = "AlertOutlined" | "CiCircleOutlined";

export interface Profile {
  email: string;
  name: string;
  password: string; // TODO - Save correctly not plain string
}

export interface QuickLink {
  icon: Icon;
  name: string;
  url: string;
}

export type Widget = "crunch-o-meter" | "goal-of-the-day" | "placeholder-card";
