import Form from 'antd/lib/form';
import React from 'react';
import { FuskiForm } from '../../../form/FuskiForm';
import type { Store } from 'antd/es/form/interface';
import type { FormLayout } from 'antd/es/form/Form';
import type { SizeType } from 'antd/lib/config-provider/SizeContext';

interface FilterFormProps {
  onFilter: (values: Store) => void;
  filter: Store;
  fields: any[];
  layout: FormLayout;
  size?: SizeType;
}

const FilterForm: React.FC<FilterFormProps> = (props) => {
  const [form] = Form.useForm();
  return (
    <FuskiForm
      form={form}
      id="form-filter"
      onAction={props.onFilter}
      fieldsList={props.fields}
      store={props.filter}
      layout={props.layout}
      size={props.size}
    />
  );
}

export default FilterForm;