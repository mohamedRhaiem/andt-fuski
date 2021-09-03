import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FieldConfigForm } from '../../utils/field';
import FuskiFieldSelectApiStream from './FuskiFieldSelectApiStream';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';

export default {
  title: 'Form/Fields/FuskiFieldSelectApiStream',
  component: FuskiFieldSelectApiStream,
} as Meta;

const Template: Story<FieldConfigForm> = (args) => <FuskiFieldSelectApiStream {...args} />;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then((response) => response.json())
      .then((d) => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach((r) => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

export const Default = Template.bind({});
Default.args = {
  key: 'selectCallApiStream',
  label: 'Select Call Api Stream',
  placeholder: 'input search text',
  onApiCallStream: fetch,
  style: { width: '30%' },
  valueProp: 'value',
  displayProp: 'text',
};
