import React from 'react';
import { PageHeader, PageHeaderProps } from 'antd';

const FuskiPageHeader: React.FC<PageHeaderProps> = ({title, extra, breadcrumb, footer}: PageHeaderProps) => {
  return(
    <PageHeader
        title={title}
        extra={extra}
        breadcrumb={breadcrumb}
        footer={footer}
    >
    </PageHeader>
  );
}

export default FuskiPageHeader;