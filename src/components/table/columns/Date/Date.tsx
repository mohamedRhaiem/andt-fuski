import React from "react";
import { CalendarOutlined } from "@ant-design/icons";
import styles from './index.less';

export interface DateProps {
  value: string;
}

const FuskiDate: React.FC<DateProps> = ({ value }: DateProps) => (
  <div>
    <span className={styles.tableDate}>
      <CalendarOutlined className={styles.tableDateCalendar} />
      {value}
    </span>
  </div>
);

export default FuskiDate;
