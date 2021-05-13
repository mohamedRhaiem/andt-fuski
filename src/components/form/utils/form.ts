import { FormInstance } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { FormLayout } from "antd/es/form/Form";
import { Store } from "antd/es/form/interface";
import { FieldConfigSimple } from "./field";

export interface FormConfig {
    onAction: (values: Store) => void;
    onValuesChange?: (changeValues: any, allValues: any) => void;
    fieldsList: any[];
    store?: Store;
    layout?: FormLayout;
    size?: SizeType;
    form: FormInstance;
    id?: string;
  }

  