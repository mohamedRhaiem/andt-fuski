import React from 'react';
import { Meta, Story } from '@storybook/react';
import FuskiFieldSelectApi from './FuskiFieldSelectApi';
import { FieldConfigForm } from '../../utils/field';

export default {
  title: 'Form/Fields/FuskiFieldSelectApi',
  component: FuskiFieldSelectApi,
} as Meta;

const Template: Story<FieldConfigForm> = (args) => <FuskiFieldSelectApi {...args} />;

const getListCategoryRequest = async () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response
      .json()
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export const Default = Template.bind({});
Default.args = {
  key: 'selectCallApi',
  label: 'Select Call Api',
  onApiCall: getListCategoryRequest,
  valueProp: 'id',
  displayProp: 'name',
  style: { width: '30%' },
};

