import { Dropdown, Space } from 'antd';
import type { ReactElement } from 'react';
import React from 'react';

declare type DropdownButtonType = 'primary' | 'ghost' | 'dashed';

interface PropsFomParent {
  title: string;
  menuActions: ReactElement;
  type?: DropdownButtonType;
}

const FuskiMenuExpand: React.FC<PropsFomParent> = ({ menuActions, title, type }) => (
  <Space wrap>
    <Dropdown.Button type={type} overlay={menuActions}>
      {title}
    </Dropdown.Button>
  </Space>
);

export default FuskiMenuExpand;