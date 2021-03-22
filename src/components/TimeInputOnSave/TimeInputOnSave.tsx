import React from 'react';
import Form from 'antd/es/form';
import { FieldConfig } from "../utils/form";
import { Input } from 'antd';
import 'antd/dist/antd.css';

export interface PropsFromParent {
    field: FieldConfig;
    save: () => void;
  }
  
const TimeInputOnSave = ({ field, save }: PropsFromParent) => {
    const { required } = field;
    return (
      <Form.Item
        style={{ margin: 0 }}
        name={field.key}
        rules={[
          {
            required,
            message: `${field.label} e obrigatorio.`,
          },
        ]}
      >
        <Input type="time" step="1" onPressEnter={save} onBlur={save} />
      </Form.Item>
    );
  };

  export default TimeInputOnSave;