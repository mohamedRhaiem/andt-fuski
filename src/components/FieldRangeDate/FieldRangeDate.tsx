import React from 'react';
import Form from 'antd/es/form';
import { DatePicker } from 'antd';
import { FieldConfig } from '../utils/form';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

export interface PropsFomParent {
  field: FieldConfig;
}

const FieldRangeDate: React.FunctionComponent<PropsFomParent> = ({ field }) => {
  return (
    <Form.Item name={field.key} rules={[{ required: field.required }]} label={field.label}>
      <RangePicker style={{ width: '100%' }} bordered={field.border} />
    </Form.Item>
  );
};

export default FieldRangeDate;