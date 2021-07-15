import React from "react";
import { Meta, Story } from "@storybook/react";
import FuskiFieldNumber from "./FuskiFieldNumber";
import { FieldConfigForm } from "../../utils/field";

export default {
  title: "Form/Fields/FuskiFieldNumber",
  component: FuskiFieldNumber,
} as Meta;

const Template: Story<FieldConfigForm> = (args) => <FuskiFieldNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
  key: "number",
  style: { width: "30%" },
};

export const Custom = Template.bind({});
Custom.args = {
  ...Default.args,
  required: true,
  label: "Input",
  style: { backgroundColor: "#09aaa3", width: "50%" },
  border: true,
};
