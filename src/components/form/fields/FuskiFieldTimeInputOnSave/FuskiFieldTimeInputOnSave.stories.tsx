import { Meta, Story } from "@storybook/react";
import React from "react";
import FuskiFieldTimeInputOnSave from "./FuskiFieldTimeInputOnSave";
import { FieldConfigForm } from "../../utils/field";

export default {
  title: "Form/Fields/FuskiFieldTimeInputOnSave",
  component: FuskiFieldTimeInputOnSave,
  argTypes: { onChange: { action: "clicked" } },
} as Meta;

const Template: Story<FieldConfigForm> = (args) => (
  <FuskiFieldTimeInputOnSave {...args} />
);

export const Default = Template.bind({});
Default.args = {
  key: "timeInput",
  style: { width: "50%" },
};

export const Custom = Template.bind({});
Custom.args = {
  key: "timeInput",
  required: false,
  label: "Time",
  border: true,
  style: { width: "30%" },
};
