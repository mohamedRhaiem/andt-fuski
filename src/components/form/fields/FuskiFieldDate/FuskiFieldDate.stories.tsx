import React from "react";
import { Meta, Story } from "@storybook/react";
import { FieldConfigWithDateFormat } from "../../utils/field";
import FieldDate from "./FuskiFieldDate";

export default {
  title: "Form/Fields/FuskiFieldDate",
  component: FieldDate,
} as Meta;

const Template: Story<FieldConfigWithDateFormat> = (args) => (
  <FieldDate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  key: "date",
  style: { width: "30%" },
};

export const Custom = Template.bind({});
Custom.args = {
  ...Default.args,
  required: true,
  label: "Date",
  style: { backgroundColor: "#09aaa3", width: "50%" },
  border: true,
  format:'DD-MM-YYYY'
};
