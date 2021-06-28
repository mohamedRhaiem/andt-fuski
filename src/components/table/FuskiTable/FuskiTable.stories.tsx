import React from "react";
import { Meta, Story } from "@storybook/react";
import { ConfigTable } from "../utils/configTable";
import FuskiTable from "./FuskiTable";
import configTable from "./mock";
import data from "./data.json";
import customData from './customPaginationData.json';
import { message } from "antd";

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

export const CustomPagination = Template.bind({});
CustomPagination.args = {
  data: customData.slice(0, 10),
  columns: configTable.columns,
  rowKey: configTable.rowKey,
  rowSelection: configTable.rowSelection,
  customPagination: {
    visible: true,
    callback: (page, size) => (
      message.info(
        `You have to implement your own pagination. Data provided: 
        ${JSON.stringify({ page, size })}`
      )
    ),
    defaultPage: 1,
    currentPage: 1,
    pageSize: 10,
    totalItems: customData.length,
  },
} as ConfigTable;
