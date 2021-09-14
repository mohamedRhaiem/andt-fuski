import React from "react";
import { Meta, Story } from "@storybook/react";
import FuskiFieldSelect from "./FuskiFieldSelect";
import { FieldConfigForm } from "../../utils/field";

export default {
  title: "Form/Fields/FuskiFieldSelect",
  component: FuskiFieldSelect,
} as Meta;

const Template: Story<FieldConfigForm> = (args) => (
  <FuskiFieldSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  key: "select",
  options: [
    { id: 1, name: "t1" },
    { id: 2, name: "t2" },
    { id: 3, name: "t3" },
    { id: 4, name: "t4" },
  ],
  valueProp: "id",
  displayProp: "name",
  style: { width: "30%" },
};

export const Multiple = Template.bind({});
Multiple.args = {
  ...Default.args,
  label: "Select Multiple",
  style: { minWidth: 120, maxWidth: 300 },
  border: true,
  mode: "multiple",
  loading: false,
};

export const Tags = Template.bind({});
Tags.args = {
  ...Default.args,
  label: "Select Tags",
  style: { minWidth: 120, maxWidth: 300 },
  mode: "tags",
};
