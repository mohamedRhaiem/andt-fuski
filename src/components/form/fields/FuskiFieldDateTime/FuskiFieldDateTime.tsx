import React from "react";
import Form from "antd/es/form";
import { DatePicker } from "antd";
import { FieldConfigForm } from "../../utils/field";

const FuskiFieldDateTime: React.FunctionComponent<FieldConfigForm> = ({
  key,
  required,
  label,
  style,
  border,
  format,
}: FieldConfigForm) => {
  return (
    <Form.Item name={key} rules={[{ required }]} label={label}>
      <DatePicker format={format} style={style} bordered={border} showTime />
    </Form.Item>
  );
};

export default FuskiFieldDateTime;
