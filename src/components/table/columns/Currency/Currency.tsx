import React from "react";
import styles from './index.less';

export interface CurrencyProps {
  value: string;
}

const Currency: React.FC<CurrencyProps> = ({ value }: CurrencyProps) => (
  <span className={styles.tableCurrency}>{value}</span>
);

export default Currency;
