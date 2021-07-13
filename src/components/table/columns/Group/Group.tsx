import React from "react";
import styles from './index.less';

export interface GroupProps {
  featured: string;
  small: string;
}

const FuskiGroup: React.FC<GroupProps> = ({ featured, small }: GroupProps) => (
  <>
    <div className={styles.tableGroupFeatured}>{featured}</div>
    <div className={styles.tableGroupSmall}>{small}</div>
  </>
);

export default FuskiGroup;
