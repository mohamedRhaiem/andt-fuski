import React from "react";
import { Meta, Story } from "@storybook/react";
import FuskiFieldDateTime from "./FuskiFieldDateTime";
import { FieldConfigWithDateFormat } from "../../utils/field";

export default {
  title: "Form/Fields/FuskiFieldDateTime",
  component: FuskiFieldDateTime,
} as Meta;

const Template: Story<FieldConfigWithDateFormat> = (args) => (
  <FuskiFieldDateTime {...args} />
);

export const Default = Template.bind({});
Default.args = {
  key: "dateTime",
  style: { width: "30%" },
};

export const Custom = Template.bind({});
Custom.args = {
  ...Default.args,
  required: true,
  label: "Date Time",
  style: { backgroundColor: "#09aaa3", width: "50%" },
  border: true,
  format:'DD-MM-yyyy HH:mm:ss'
};
