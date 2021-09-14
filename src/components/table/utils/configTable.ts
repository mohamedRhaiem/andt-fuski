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

export interface CustomPaginationInterface {
  totalItems: number;
  pageSize: number;
  callback: (page: number, size?: number) => void;
  
  visible?: boolean;
  currentPage?: number;
  defaultPage?: number;
}

export interface ConfigTable {
  columns: ColumnsTypeCustom[];
  rowKey: string;
  emptyText?: string;
  className?: string;
  dataTestid?: string;
  newObject?: any;
  rowSelection?: TableRowSelection<any>;
  customPagination?: CustomPaginationInterface;
}
