import { Meta, Story } from "@storybook/react";
import React from "react";
import { action } from "@storybook/addon-actions";
import { FieldConfigSimpleWithAction } from "../utils/field";
import FieldTimeInputOnSave from "./FieldTimeInputOnSave";

export default {
  title: "FormFields/FieldTimeInputOnSave",
  component: FieldTimeInputOnSave,
} as Meta;

const Template: Story<FieldConfigSimpleWithAction> = (args) => (
  <FieldTimeInputOnSave {...args} />
);

export const Default = Template.bind({});
Default.args = {
  key: "timeInput",
  required: false,
  label: "Time",
  border: true,
  style: { width: "50%" },
  save: action("save is called!"),
};
