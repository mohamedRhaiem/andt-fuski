import React from "react";
import Form from "antd/es/form";
import { Switch } from "antd";
import { FieldConfigForm } from "../../utils/field";

const FuskiFieldSwitch: React.FunctionComponent<FieldConfigForm> = ({
  name,
  required,
  label,
  defaultChecked
}: FieldConfigForm) => {
  return (
    <Form.Item name={name} rules={[{ required }]} label={label}>
        <Switch defaultChecked={defaultChecked}/>
    </Form.Item>
  );
};

export default FuskiFieldSwitch;

