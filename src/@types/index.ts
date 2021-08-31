import { Rule } from "antd/lib/form";
import { NamePath } from "antd/lib/form/interface";

export interface FormItem {
  dependencies?: NamePath[]
  label: string;
  name: string;
  rules: Rule[];
}

export type Icon = 'AlertOutlined' | 'CiCircleOutlined';

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
