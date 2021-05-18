import React from "react";
import { Meta, Story } from "@storybook/react";
import { FormConfig } from "../utils/form";
import { FieldsFilter } from "./mock";
import FuskiForm from "./FuskiForm";

export default {
  title: "Form/FuskiForm",
  component: FuskiForm,
  argTypes: { onAction: { action: "clicked" } },
} as Meta;

const Template: Story<FormConfig> = (args) => <FuskiForm {...args} />;

export const Default = Template.bind({});

Default.args = {
  fieldsList: FieldsFilter,
  layout: "inline",
};

export const Custom = Template.bind({});
Custom.args = {
  ...Default.args,
  layout: "vertical",
};
