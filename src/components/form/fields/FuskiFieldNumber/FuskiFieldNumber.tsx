import React from 'react';
import Form from 'antd/es/form';
import { InputNumber } from 'antd';
import { FieldConfigForm } from '../../utils/field';

const FuskiFieldNumber: React.FunctionComponent<FieldConfigForm> = ({
  name,
  required,
  label,
  style,
  border,
}: FieldConfigForm) => {
  return (
    <Form.Item name={name} rules={[{ required, type: 'number', min: 0, max: 99 }]} label={label}>
      <InputNumber style={style} bordered={border} />
    </Form.Item>
  );
};

export default FuskiFieldNumber;
