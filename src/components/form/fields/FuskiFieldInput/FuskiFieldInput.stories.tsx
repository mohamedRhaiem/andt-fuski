import React from "react";
import { Meta, Story } from "@storybook/react";
import FieldDate from "./FuskiFieldInput";
import FuskiFieldInput from "./FuskiFieldInput";
import { FieldConfigForm } from "../../utils/field";

export default {
  title: "Form/Fields/FuskiFieldInput",
  component: FuskiFieldInput,
} as Meta;

const Template: Story<FieldConfigForm> = (args) => <FieldDate {...args} />;

export const Default = Template.bind({});
Default.args = {
  key: "input",
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
