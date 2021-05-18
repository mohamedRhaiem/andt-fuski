import React from "react";
import { Table } from "antd";
import { ConfigTable } from "../utils/configTable";

interface Props {
  data?: any[];
  loading?: boolean;
}
const FuskiTable: React.FunctionComponent<ConfigTable & Props> = ({
  columns,
  data,
  rowKey,
  dataTestid,
  loading,
}: ConfigTable & Props) => {
  return (
    <Table
      data-testid={dataTestid}
      columns={columns}
      loading={loading}
      dataSource={data}
      rowKey={rowKey}
    />
  );
};

export default FuskiTable;
