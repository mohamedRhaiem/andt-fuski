import React from "react";
import Form from "antd/es/form";
import { FieldConfigSimpleWithAction } from "../utils/field";
import { Input } from "antd";

const FieldTimeInputOnSave = ({
  key,
  required,
  style,
  border,
  label,
  save,
}: FieldConfigSimpleWithAction) => {
  return (
    <Form.Item label={label} style={style} name={key} rules={[{ required }]}>
      <Input
        type="time"
        step="1"
        onPressEnter={save}
        onBlur={save}
        bordered={border}
      />
    </Form.Item>
  );
};

export default FieldTimeInputOnSave;
