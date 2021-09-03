import React from "react";
import Form from "antd/es/form";
import { DatePicker } from "antd";
import { FieldConfigForm } from "../../utils/field";

const FuskiFieldDate: React.FunctionComponent<FieldConfigForm> = ({
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
    <Form.Item name={name} rules={[{ required: required }]} label={label}>
      <DatePicker format={format} style={style} bordered={border} disabled={disabled} inputReadOnly={inputReadOnly} placeholder={placeholder}/>
    </Form.Item>
  );
};

export default FuskiFieldDate;
