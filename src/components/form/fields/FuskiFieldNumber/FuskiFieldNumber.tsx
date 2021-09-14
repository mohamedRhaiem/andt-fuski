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
  disabled,
  readOnly
}: FieldConfigForm) => {
  return (
    <Form.Item name={name} rules={[{ required, type: 'number', min: 0, max: 99 }]} label={label}>
      <InputNumber style={style} bordered={border} disabled={disabled} readOnly={readOnly}/>
    </Form.Item>
  );
};

export default FuskiFieldNumber;
