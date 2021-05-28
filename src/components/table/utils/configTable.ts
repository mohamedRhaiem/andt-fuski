import { TableRowSelection } from "antd/lib/table/interface";
import type { ReactNode } from "react";

interface ColumnsTypeCustom {
  title: string;
  dataIndex: string;
  width?: string;
  render?: (text: any, record: any, index: number) => ReactNode;
  required?: boolean;
  editable?: boolean;
  component?: string;
}

export interface ConfigTable {
  columns: ColumnsTypeCustom[];
  rowKey: string;
  emptyText?: string;
  className?: string;
  dataTestid?: string;
  newObject?: any;
  rowSelection?: TableRowSelection<any>;
}
