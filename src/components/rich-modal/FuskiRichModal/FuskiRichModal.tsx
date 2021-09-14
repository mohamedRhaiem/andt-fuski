import { Modal, Button, Space } from 'antd';
import React from 'react';
import Draggable from 'react-draggable';
import { FuskiRichModalProps } from '../utils/richModalConfig';
import styles from './index.module.less';

const FuskiRichModal: React.FC<FuskiRichModalProps> = (props) => {
  const { id,visible, onSubmit, hide, children, title, width, hideSubmit } = props;

  return (
    <Modal
      destroyOnClose
      title={
        <div className={styles.richModalTitle}>
          {title}
        </div>
      }
      width={width}
      onCancel={hide}
      visible={visible}
      modalRender={(modal) => (
        <Draggable>
          <div>{modal}</div>
        </Draggable>
      )}
      footer={
        <div className={styles.richModalFooter}>
          <Space>
            <Button onClick={hide} className={styles.richModalCloseButton}>
              {props.cancelButtonText ?? 'Fechar'}
            </Button>
            {!hideSubmit && (
              <Button form={id} key="submit" onClick={onSubmit} type="primary" htmlType="submit">
               {props.okButtonText ?? 'Confirmar'}
              </Button>
            )}
            </Space>
        </div>
      }
    >
      {children}
    </Modal>
  );
}

export default FuskiRichModal;