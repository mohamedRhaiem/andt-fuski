import React from "react";
import { Meta, Story } from "@storybook/react";
import { FieldConfigForm } from "../../utils/field";
import FuskiFieldDate from "./FuskiFieldDate";

export default {
  title: "Form/Fields/FuskiFieldDate",
  component: FuskiFieldDate,
} as Meta;

const Template: Story<FieldConfigForm> = (args) => <FuskiFieldDate {...args} />;

export const DateSimple = Template.bind({});
DateSimple.args = {
  key: "date",
  style: { width: "30%" },
};

export const DateCustom = Template.bind({});
DateCustom.args = {
  ...DateSimple.args,
  required: true,
  label: "Date",
  style: { backgroundColor: "red", width: "50%" },
  border: true,
  format: "DD-MM-YYYY",
};

export const DateTimeCustom = Template.bind({});
DateTimeCustom.args = {
  ...DateSimple.args,
  required: true,
  label: "Date",
  style: { backgroundColor: "green", width: "50%" },
  border: true,
  format: "DD-MM-YYYY HH-mm-ss",
};
