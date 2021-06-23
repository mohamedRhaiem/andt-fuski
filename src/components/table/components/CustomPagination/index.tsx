import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';

type type = "page" | "prev" | "next" | "jump-prev" | "jump-next";
const defaultPageSizes = [10, 20, 30, 50, 100];

export const customPaginationRender = (_page: any, type: type, originalElement: any, totalItems: number) => {

  if (type === 'prev') {
    return (
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <div style={{ backgroundColor: '#F6F6F6', fontWeight: 'bold', borderRadius: 5, padding: '0 5px' }}>
          <span>{totalItems} itens</span>
        </div>
        <LeftOutlined />
      </div>
    );
  }

  if (type === 'next') {
    return (
      <div>
        <RightOutlined />
        <span>teste</span>
      </div>
    );
  }


  return originalElement;
};
