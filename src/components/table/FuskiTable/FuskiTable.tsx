import React, { useState } from "react";
import { Button, Table } from "antd";
import { ConfigTable, CustomPaginationInterface } from "../utils/configTable";
import CustomPagination from "../components/CustomPagination";

interface Props {
  data?: any[];
  loading?: boolean;
  customPagination?: CustomPaginationInterface;
}

const FuskiTable: React.FunctionComponent<ConfigTable & Props> = (props) => {

  const [currentPage, setCurrentPage] = useState(props.customPagination?.defaultPage ?? 1);
  const [pageSize, setPageSize] = useState(props.customPagination?.pageSize);
  const [unifiedPaginationProps] = useState(props.customPagination);
  
  const paginate = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
    props.customPagination?.callback(page, pageSize);
  };

  return (
    <div className='fuski-table-container'>
      {props.customPagination && unifiedPaginationProps && (
        <CustomPagination {...unifiedPaginationProps} pageSize={pageSize ?? 10} callback={paginate} currentPage={currentPage} />
      )}

      <Table
        data-testid={props.dataTestid}
        columns={props.columns}
        loading={props.loading}
        dataSource={props.data}
        rowKey={props.rowKey}
        rowSelection={props.rowSelection}
        pagination={props.customPagination?.visible ? false : {}}
      />

      {props.customPagination && unifiedPaginationProps && (
        <CustomPagination {...unifiedPaginationProps} pageSize={pageSize ?? 10} callback={paginate} currentPage={currentPage} />
      )}
    </div>
  );
};

export default FuskiTable;
