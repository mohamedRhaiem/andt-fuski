import React from "react";
import Form from "antd/es/form";
import { DatePicker } from "antd";
import { FieldConfigSimple } from "../utils/field";

const { RangePicker } = DatePicker;

const FieldRangeDate: React.FunctionComponent<FieldConfigSimple> = ({
  key,
  required,
  label,
  style,
  border,
}: FieldConfigSimple) => {
  return (
    <Form.Item name={key} rules={[{ required }]} label={label}>
      <RangePicker style={style} bordered={border} />
    </Form.Item>
  );
};

export default FieldRangeDate;
