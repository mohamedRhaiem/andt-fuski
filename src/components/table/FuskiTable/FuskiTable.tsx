import React, { useState } from "react";
import { Table } from "antd";
import { ConfigTable } from "../utils/configTable";
import { customPaginationRender } from "../components/CustomPagination";

interface Props {
  data?: any[];
  loading?: boolean;
}

const FuskiTable: React.FunctionComponent<ConfigTable & Props> = (props) => {

  const [pageSize] = useState(10);

  return (
    <Table
      data-testid={props.dataTestid}
      columns={props.columns}
      loading={props.loading}
      dataSource={props.data}
      rowKey={props.rowKey}
      rowSelection={props.rowSelection}
      pagination={{
        defaultPageSize: 10,
        simple: true,
        // pageSize,
        showSizeChanger: true,
        position: ['topRight', 'bottomRight'],
        itemRender: (p, t, el) => {
          return (
            <>
              {customPaginationRender(p, t, el, 1300)}
            </>
          )
        },
        showLessItems: true,
      }}
    />
  );
};

export default FuskiTable;
