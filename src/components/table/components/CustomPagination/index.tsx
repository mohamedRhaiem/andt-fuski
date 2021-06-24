import { DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Pagination } from 'antd';
import { CustomPaginationInterface } from 'components/table/utils/configTable';
import React, { useState } from 'react';

type type = "page" | "prev" | "next" | "jump-prev" | "jump-next";
const defaultPageSizes = [10, 20, 30, 50, 100];

const itemRender = (_page: any, type: type, originalElement: any) => {

  if (type === 'prev') {
    return <LeftOutlined />;
  }

  if (type === 'next') {
    return <RightOutlined />;
  }

  return originalElement;
};

const CustomPagination: React.FC<CustomPaginationInterface> = (props) => {
  const changePageSize = (newSize: number) => {
    props.callback(1, newSize);
  }

  const menu = (
    <Menu>
      {defaultPageSizes.map((size) => (
        <Menu.Item onClick={() => changePageSize(size)}>{size} / página</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: '10px 5px'
    }}>
      <div
        style={{
          backgroundColor: '#F6F6F6',
          fontWeight: 'bold',
          borderRadius: 5,
          padding: '5px 10px',
          marginRight: 30,
        }}
      >
        <span>{props.totalItems} itens</span>
      </div>
      <Pagination
        onChange={props.callback}
        defaultCurrent={1}
        current={props.currentPage}
        total={props.totalItems}
        simple
        itemRender={itemRender}
        pageSize={props.pageSize}
      />
      <div>
        <Dropdown overlay={menu} placement="bottomCenter" arrow={true} trigger={['click']} >
          <Button>{props.pageSize} / página <DownOutlined /></Button>
        </Dropdown>
      </div>
    </div>
  );
}

export default CustomPagination;
