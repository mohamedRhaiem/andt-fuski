export interface FieldConfig {
    label?: string;
    required: boolean;
    key: Array<string> | string;
    valueProp?: string;
    displayProp?: string;
    options?: {};
    border?: boolean;
    param?: number | string | Object | undefined;
    component?: string;
    callApi?: any;
  }