import React, { useState } from 'react';
import Form from 'antd/es/form';
import { Select } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { FieldConfigForm } from '../../utils/field';
import { buildDisplay } from '../../utils/option';

const FuskiFieldSelectApiStream: React.FunctionComponent<FieldConfigForm> = ({
  name,
  required,
  label,
  style,
  border,
  placeholder,
  disabled,
  mode,
  onApiCallStream,
  valueProp,
  displayProp
}: FieldConfigForm) => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value: string) => {
    if (value !== '') {
      onApiCallStream && onApiCallStream(value, (data: []) => setOptions(data));
    } else {
      setOptions([]);
    }
  };


  const buildSelect = () => {
    if (Array.isArray(options)) {
      return options?.map((item) => (
        <Select.Option  key={uuidv4()} value={item[valueProp!]}>
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
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={handleSearch}
        notFoundContent={null}
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

export default FuskiFieldSelectApiStream;
