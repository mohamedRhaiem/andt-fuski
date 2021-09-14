import React from "react";
import { Space } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import styles from './index.module.less';

export interface DateProps {
  value: string;
}

const FuskiDate: React.FC<DateProps> = ({ value }: DateProps) => (
  <div>
    <span className={styles.tableDate}>
      <Space>
        <CalendarOutlined/>
        {value}
      </Space>
    </span>
  </div>
);

export default FuskiDate;
