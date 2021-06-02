import React from "react";
import Form from "antd/es/form";
import { DatePicker } from "antd";
import { FieldConfigForm } from "../../utils/field";

const { RangePicker } = DatePicker;

const FuskiFieldRangeDate: React.FunctionComponent<FieldConfigForm> = ({
  name,
  required,
  label,
  style,
  border,
}: FieldConfigForm) => {
  return (
    <Form.Item name={name} rules={[{ required }]} label={label}>
      <RangePicker style={style} bordered={border} />
    </Form.Item>
  );
};

export default FuskiFieldRangeDate;
