import React from "react";
import Form from "antd/es/form";
import { Input } from "antd";
import { FieldConfigForm } from "../../utils/field";

const FuskiFieldInput: React.FunctionComponent<FieldConfigForm> = ({
  name,
  required,
  label,
  style,
  border,
}: FieldConfigForm) => {
  return (
    <Form.Item name={name} rules={[{ required }]} label={label}>
      <Input style={style} bordered={border} />
    </Form.Item>
  );
};

export default FuskiFieldInput;
