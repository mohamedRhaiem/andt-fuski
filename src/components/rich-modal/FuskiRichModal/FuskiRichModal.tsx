import { Modal, Button } from 'antd';
import React from 'react';
import Draggable from 'react-draggable';
import { FuskiRichModalProps } from '../utils/richModalConfig';

const FuskiRichModal: React.FC<FuskiRichModalProps> = (props) => {
  const { visible, onSubmit, hide, children, title, width, hideSubmit } = props;

  return (
    <Modal
      destroyOnClose
      title={
        <div
          style={{
            width: '100%',
            cursor: 'move',
          }}
        >
          {title}
        </div>
      }
      width={width}
      onCancel={hide}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      modalRender={(modal) => (
        <Draggable>
          <div>{modal}</div>
        </Draggable>
      )}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button onClick={hide} style={{ marginRight: 8 }}>
            {props.cancelButtonText ?? 'Fechar'}
          </Button>
          {!hideSubmit && (
            <Button form="myForm" key="submit" onClick={onSubmit} type="primary" htmlType="submit">
              {props.okButtonText ?? 'Confirmar'}
            </Button>
          )}
        </div>
      }
    >
      {children}
    </Modal>
  );
}

export default FuskiRichModal;