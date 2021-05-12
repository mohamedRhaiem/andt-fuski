export interface FieldConfigSimple {
  required: boolean;
  key: string;
  label?: string;
  border?: boolean;
  component?: string;
  callApi?: any;
  style?: React.CSSProperties;
}

export interface FieldConfig extends FieldConfigSimple {
  valueProp?: string;
  displayProp?: string;
  options?: Array<any>;
}

export interface FieldConfigSimpleWithAction extends FieldConfigSimple {
  save: () => {};
}
