import { CloseOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import React from 'react';

interface TagProps {
  itemKey: string;
  text: string;
  onClose: (key: string) => void;
}

const CustomTag: React.FC<TagProps> = (props) => {
  return (
    <>
      <Tag
        className='filter-tag'
        key={props.itemKey}
        closable
        closeIcon={<CloseOutlined style={{color: '#fff', fontWeight: 700}} />}
        onClose={() => props.onClose(props.itemKey)}
      >
        {props.text}
      </Tag>
    </>
  );
}

export default CustomTag;
