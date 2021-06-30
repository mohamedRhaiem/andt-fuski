import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { ConfigTable } from "../utils/configTable";
import FuskiTable from "./FuskiTable";
import configTable from "./mock";
import data from "./data.json";
import customData from './customPaginationData.json';

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


// CUSTOM PAGINATION TEMPLATE
const CustomPaginateTemplate: Story<ConfigTable> = (args) => {
  const [dataForCustomPagination, setDataForCustomPagination] = useState(customData.slice(0, 10))

  const customPaginate = (page: number, size: number) => {
    const paginatedData = customData.slice(size*(page-1), page*size )
    setDataForCustomPagination(() => [...paginatedData]);
  }

  return (
    <FuskiTable 
      data={dataForCustomPagination}
      columns={args.columns}
      rowKey={args.rowKey}
      customPagination={{...args.customPagination, callback: customPaginate}}
    />
  )
};
export const CustomPagination = CustomPaginateTemplate.bind({});
CustomPagination.args = {
  data: [],
  columns: configTable.columns,
  rowKey: configTable.rowKey,
  customPagination: {
    callback: console.log,
    currentPage: 1,
    pageSize: 10,
    totalItems: customData.length,
  },
} as ConfigTable;
