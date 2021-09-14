import React from "react";
import Form from "antd/es/form";
import { DatePicker } from "antd";
import { FieldConfigForm } from "../../utils/field";

const FuskiFieldDateTime: React.FunctionComponent<FieldConfigForm> = ({
  name,
  required,
  label,
  style,
  border,
  format,
  disabled,
  inputReadOnly,
  placeholder
}: FieldConfigForm) => {
  return (
    <Form.Item name={name} rules={[{ required }]} label={label}>
      <DatePicker format={format} style={style} bordered={border} showTime disabled={disabled} inputReadOnly={inputReadOnly} placeholder={placeholder}/>
    </Form.Item>
  );
};

export default FuskiFieldDateTime;
