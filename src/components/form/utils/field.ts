export interface FieldConfigSimple {
  key: string;
  label?: string;
  placeholder?: string;
  border?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  required?: boolean;
  component?: string;
}

export interface FieldConfigWithSelect extends FieldConfigSimpleWithAction {
  valueProp?: string;
  displayProp?: string;
  options?: Record<string, any>;
  mode?: "multiple" | "tags";
  loading?: boolean;
}

export interface FieldConfigWithDateFormat extends FieldConfigSimple {
  format: string;
}

export interface FieldConfigWithApiCall extends FieldConfigSimple {
  onFetchFromApi: () => {};
}

export interface FieldConfigSimpleWithAction extends FieldConfigSimple {
  onChange: () => {};
}
