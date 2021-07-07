import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Pagination } from 'antd';
import { CustomPaginationInterface } from 'components/table/utils/configTable';
import React from 'react';

const defaultPageSizes = [10, 20, 30, 50, 100];

const CustomPagination: React.FC<CustomPaginationInterface> = (props) => {
  const changePageSize = (newSize: number) => {
    props.callback(1, newSize);
  }

  const menu = (
    <Menu>
      {defaultPageSizes.map((size) => (
        <Menu.Item key={size} onClick={() => changePageSize(size)}>{size} / página</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div
      data-testid='pagination'
      style={{
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
        simple
        onChange={props.callback}
        current={props.currentPage}
        total={props.totalItems}
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
