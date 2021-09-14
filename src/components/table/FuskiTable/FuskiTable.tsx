import React, { useState } from "react";
import { Table } from "antd";
import { ConfigTable, CustomPaginationInterface } from "../utils/configTable";
import { CustomPagination } from "../components/CustomPagination";

import styles from './index.module.less'

interface Props {
  data?: any[];
  loading?: boolean;
  customPagination?: CustomPaginationInterface;
}

const FuskiTable: React.FunctionComponent<ConfigTable & Props> = (props) => {
  const [currentPage, setCurrentPage] = useState(props.customPagination?.defaultPage ?? 1);
  const [pageSize, setPageSize] = useState(props.customPagination?.pageSize ?? 10);
  
  const paginate = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    setPageSize(pageSize ?? 10);
    props.customPagination?.callback(page, pageSize);
  };

  return (
    <div className={styles.fuskiTableContainer}>
      {props.customPagination  && (
        <CustomPagination
          totalItems={props.customPagination?.totalItems}
          pageSize={pageSize}
          callback={paginate}
          currentPage={currentPage}
        />
      )}

      <Table
        data-testid={props.dataTestid}
        columns={props.columns}
        loading={props.loading}
        dataSource={props.data}
        rowKey={props.rowKey}
        rowSelection={props.rowSelection}
        pagination={props.customPagination ? false : {}}
      />

      {props.customPagination && (
        <CustomPagination
          totalItems={props.customPagination?.totalItems}
          pageSize={pageSize}
          callback={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default FuskiTable;
