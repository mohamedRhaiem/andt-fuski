import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Pagination } from 'antd';
import { CustomPaginationInterface } from 'components/table/utils/configTable';
import React from 'react';

import styles from './index.less';

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
      className={styles.tableCustomPagination}
    >
      <div className={styles.tableCustomPaginationTotalItems}>
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
