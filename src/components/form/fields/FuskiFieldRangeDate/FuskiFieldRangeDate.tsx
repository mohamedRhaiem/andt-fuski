import React from "react";
import Form from "antd/es/form";
import { DatePicker } from "antd";
import { FieldConfigForm } from "../../utils/field";

type Modify<T, R> = Omit<T, keyof R> & R;

type RangeDateFieldConfigForm  = Modify<FieldConfigForm , {
  placeholder?: [string, string];
}>

const { RangePicker } = DatePicker;

const FuskiFieldRangeDate: React.FunctionComponent<RangeDateFieldConfigForm> = ({
  name,
  required,
  label,
  style,
  border,
  disabled,
  placeholder
}) => {
  return (
    <Form.Item name={name} rules={[{ required }]} label={label}>
      <RangePicker style={style} bordered={border} disabled={disabled} placeholder={placeholder}/>
    </Form.Item>
  );
};

export default FuskiFieldRangeDate;
