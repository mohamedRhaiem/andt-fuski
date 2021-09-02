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
  readOnly?: boolean;
  inputReadOnly?: boolean;
  onChange?: () => {};
  onApiCall?: () => any;
  onApiCallStream?: (searchText: string, callback: (data: any) => void) => void;
}
