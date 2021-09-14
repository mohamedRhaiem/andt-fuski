import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState } from 'react';

const FuskiPageHeaderWrapper: React.FC = (props: any) => {
  const { children, route } = props;

  const [headerActions, setHeaderActions] = useState([]);
  const [headerContent, setHeaderContent] = useState([]);
  const [headerSubTitle, setHeaderSubTitle] = useState('');

  return (
    <PageHeaderWrapper
      ghost
      onBack={() => window.history.back()}
      title={route.title}
      content={headerContent}
      extraContent={headerActions}
      subTitle={headerSubTitle}
    >
      {React.cloneElement(children, { setHeaderActions,setHeaderContent,setHeaderSubTitle })}
    </PageHeaderWrapper>
  );
};

export default FuskiPageHeaderWrapper;
