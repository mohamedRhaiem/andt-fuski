export interface FieldConfigForm {
  name: string | string[];
  label?: string;
  placeholder?: string;
  border?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  required?: boolean;
  component: string;
  valueProp?: string;
  displayProp?: string | string[];
  options?: Record<string, any>;
  mode?: 'multiple' | 'tags';
  loading?: boolean;
  format?: string;
  onChange?: () => {};
  onApiCall?: () => any;
}
