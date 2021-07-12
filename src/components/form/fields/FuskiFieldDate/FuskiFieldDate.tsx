import React from "react";
import Form from "antd/es/form";
import { DatePicker } from "antd";
import { FieldConfigForm } from "../../utils/field";
import styles from './index.less';

const FuskiFieldDate: React.FunctionComponent<FieldConfigForm> = ({
  name,
  required,
  label,
  style,
  border,
  format,
}: FieldConfigForm) => {
  return (
    <div className={styles.testComponentStyle}>
    <Form.Item name={name} rules={[{ required: required }]} label={label}>
      <DatePicker format={format} style={style} bordered={border} />
    </Form.Item>
    </div>
  );
};

export default FuskiFieldDate;
