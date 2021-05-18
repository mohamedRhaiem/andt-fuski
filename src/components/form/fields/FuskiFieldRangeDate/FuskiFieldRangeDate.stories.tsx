import React from "react";
import { Meta, Story } from "@storybook/react";

import FieldRangeDate from "./FuskiFieldRangeDate";
import { FieldConfigForm } from "../../utils/field";

export default {
  title: "Form/Fields/FuskiFieldRangeDate",
  component: FieldRangeDate,
} as Meta;

const Template: Story<FieldConfigForm> = (args) => <FieldRangeDate {...args} />;

export const Default = Template.bind({});
Default.args = {
  key: "rangeDate",
  style: { width: "30%" },
};

export const Custom = Template.bind({});
Custom.args = {
  ...Default.args,
  required: true,
  label: "Range Date",
  style: { backgroundColor: "#09aaa3", width: "50%" },
  border: true,
};
