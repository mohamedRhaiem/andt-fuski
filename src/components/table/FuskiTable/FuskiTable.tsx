import React from "react";
import { Table } from "antd";
import { ConfigTable } from "../utils/configTable";

interface Props {
  data?: any[];
  loading?: boolean;
}
const FuskiTable: React.FunctionComponent<ConfigTable & Props> = (props) => {
  return (
    <Table
      data-testid={props.dataTestid}
      columns={props.columns}
      loading={props.loading}
      dataSource={props.data}
      rowKey={props.rowKey}
      rowSelection={props.rowSelection}
    />
  );
};

export default FuskiTable;
