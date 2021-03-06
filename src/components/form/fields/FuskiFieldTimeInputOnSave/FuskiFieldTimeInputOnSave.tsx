import React from "react";
import Form from "antd/es/form";
import { Input } from "antd";
import { FieldConfigForm } from "../../utils/field";

const FuskiFieldTimeInputOnSave = ({
  key,
  required,
  style,
  border,
  label,
  onChange,
}: FieldConfigForm) => {
  return (
    <Form.Item label={label} style={style} name={key} rules={[{ required }]}>
      <Input
        type="time"
        step="1"
        onPressEnter={onChange}
        onBlur={onChange}
        bordered={border}
      />
    </Form.Item>
  );
};

export default FuskiFieldTimeInputOnSave;
