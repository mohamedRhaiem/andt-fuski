import React from "react";
import Form from "antd/es/form";
import { Input } from "antd";
import { FieldConfigSimple } from "../../utils/field";

const FuskiFieldInput: React.FunctionComponent<FieldConfigSimple> = ({
  key,
  required,
  label,
  style,
  border,
}: FieldConfigSimple) => {
  return (
    <Form.Item name={key} rules={[{ required }]} label={label}>
      <Input style={style} bordered={border} />
    </Form.Item>
  );
};

export default FuskiFieldInput;
