import React from "react";
import Form from "antd/es/form";
import { Input } from "antd";
import { FieldConfigForm } from "../../utils/field";

const FuskiFieldTimeInputOnSave = ({
  name,
  required,
  style,
  border,
  label,
  placeholder,
  onChange,
}: FieldConfigForm) => {
  return (
    <Form.Item label={label} style={style} name={name} rules={[{ required }]}>
      <Input
        type="time"
        step="1"
        onPressEnter={onChange}
        onBlur={onChange}
        bordered={border}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

export default FuskiFieldTimeInputOnSave;
