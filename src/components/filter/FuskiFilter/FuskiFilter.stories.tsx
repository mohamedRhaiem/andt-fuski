import { Meta, Story } from "@storybook/react";
import moment from "moment";
import React from "react";
import { FieldsFilter } from "../../form/FuskiForm/mock";
import FilterTags from "../components/FilterTags/FilterTags";
import FuskiFilter, { FuskiFilterProps } from "./FuskiFilter";

export default {
  title: 'Filter/FuskiFilter',
  component: FilterTags
} as Meta

const Template: Story<FuskiFilterProps> = (args: FuskiFilterProps) => <FuskiFilter {...args} />;
export const Default = Template.bind({});
Default.args = {
  filterFields: FieldsFilter,
  onFilter: console.log
}

export const FilterWithInitialData = Template.bind({});
FilterWithInitialData.args = {
  ...Default.args,
  initialState: { 
    input: "Initial data",
    c2: 2,
    c1: moment() 
  },
};