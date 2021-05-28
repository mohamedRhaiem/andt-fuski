import { Button, Drawer } from "antd";
import React, { ReactNode } from "react";

interface FilterSidebarProps {
  setVisible: (value: boolean) => void;
  visible: boolean;
  width?: number;
  cancelButtonText?: string;
  okButtonText?: string;
  children: ReactNode;
  title: string;
  loading?: boolean;
}

const FilterSidebarDrawer: React.FC<FilterSidebarProps> = (props) => {
  const { visible, setVisible, children, loading } = props;

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Drawer
      destroyOnClose
      title={props.title}
      width={props.width ?? 360}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button form="form-filter" key="reset" htmlType="reset" style={{ marginRight: 8 }}>
            Limpar
          </Button>
          <Button form="form-filter" key="submit" type="primary" htmlType="submit" loading={loading}>
            Aplicar
          </Button>
        </div>
      }
    >
      {children}
    </Drawer>
  );
};

export default FilterSidebarDrawer;
