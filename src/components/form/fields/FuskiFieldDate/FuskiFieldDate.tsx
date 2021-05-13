import React from "react";
import Form from "antd/es/form";
import { DatePicker } from "antd";
import { FieldConfigWithDateFormat } from "../../utils/field";

const FieldDate: React.FunctionComponent<FieldConfigWithDateFormat> = ({
  key,
  required,
  label,
  style,
  border,
  format,
}: FieldConfigWithDateFormat) => {
  return (
    <Form.Item name={key} rules={[{ required: required }]} label={label}>
      <DatePicker format={format} style={style} bordered={border} />
    </Form.Item>
  );
};

export default FieldDate;
