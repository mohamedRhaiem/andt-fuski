import { message } from "antd";
import { ReactNode } from "react";

export interface FuskiRichModalProps {
  hide: () => void;
  onSubmit?: () => void;
  visible: boolean;
  width?: number;
  cancelButtonText?: string;
  okButtonText?: string;
  children: ReactNode;
  title: string;
  hideSubmit?: boolean;
}

export const onSubmitMock = () => {
  message.info("Confirmed!");
}