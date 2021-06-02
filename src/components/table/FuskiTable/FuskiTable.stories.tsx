import React from "react";
import { Meta, Story } from "@storybook/react";
import { ConfigTable } from "../utils/configTable";
import FuskiTable from "./FuskiTable";
import configTable from "./mock";
import data from "./data.json";

export default {
  title: "Table/FuskiTable",
  component: FuskiTable,
} as Meta;

const Template: Story<ConfigTable> = (args) => <FuskiTable {...args} />;
export const Default = Template.bind({});

Default.args = {
  data,
  columns: configTable.columns,
  rowKey: configTable.rowKey,
  rowSelection: configTable.rowSelection
};
