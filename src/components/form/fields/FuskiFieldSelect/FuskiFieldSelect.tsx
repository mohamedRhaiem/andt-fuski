import React from "react";
import Form from "antd/es/form";
import { Select } from "antd";
import { v4 as uuidv4 } from "uuid";
import { FieldConfigForm } from "../../utils/field";
import { buildDisplay } from "components/form/utils/option";

const FuskiFieldSelect: React.FunctionComponent<FieldConfigForm> = ({
  name,
  required,
  label,
  style,
  border,
  placeholder,
  options,
  disabled,
  displayProp,
  valueProp,
  mode,
  loading,
  onChange,
}: FieldConfigForm) => {

  const buildSelect = () => {
    if (Array.isArray(options)) {
      return options?.map((item) => (
        <Select.Option key={uuidv4()} value={item[valueProp!]}>
           {buildDisplay(item,displayProp!)}
        </Select.Option>
      ));
    }
    return null;
  };
  return (
    <Form.Item label={label} rules={[{ required }]} name={name}>
      <Select
        placeholder={placeholder}
        showSearch
        optionFilterProp="children"
        filterOption={(input, option) =>
          option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        loading={loading}
        onChange={onChange}
        disabled={disabled}
        style={style ? style : { minWidth: 120 }}
        maxTagCount="responsive"
        bordered={border}
        mode={mode}
      >
        {buildSelect()}
      </Select>
    </Form.Item>
  );
};

export default FuskiFieldSelect;
