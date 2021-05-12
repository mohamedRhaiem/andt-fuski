import React from "react";
import { Meta, Story } from "@storybook/react";

import FieldRangeDate from "./FieldRangeDate";
import { FieldConfigSimple } from "../utils/field";

export default {
  title: "FormFields/FieldRangeDate",
  component: FieldRangeDate,
} as Meta;

const Template: Story<FieldConfigSimple> = (args) => (
  <FieldRangeDate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  key: "rangeDate",
};

export const Custom = Template.bind({});
Custom.args = {
  ...Default.args,
  required: true,
  label: "Range Date",
  style: { backgroundColor: "#09aaa3", width: "50%" },
  border: true,
};
