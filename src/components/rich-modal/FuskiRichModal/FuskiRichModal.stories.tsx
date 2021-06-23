import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { FuskiRichModal } from "./index";
import { FuskiRichModalProps, onSubmitMock } from "../utils/richModalConfig";
import { Button } from "antd";

export default {
  title: "Modal/FuskiRichModal",
  component: FuskiRichModal,
  argTypes: { onAction: { action: "submit" } },
} as Meta;

const Template: Story<FuskiRichModalProps> = (args) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>Open modal</Button>
      <FuskiRichModal {...args} visible={visible} hide={() => setVisible(false)}>
        <h1>Test modal</h1>
      </FuskiRichModal>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: 'Modal',
  onSubmit: onSubmitMock
};

export const WithoutConfirmButton = Template.bind({});
WithoutConfirmButton.args = {
  title: 'Modal without confirmation button',
  onSubmit: onSubmitMock,
  hideSubmit: true,
};

export const CustomButtons = Template.bind({});
CustomButtons.args = {
  title: 'Modal with custom buttons',
  okButtonText: 'This is a custom confirm text',
  cancelButtonText: 'This is a custom cancel text'
};

export const CustomWidth = Template.bind({})
CustomWidth.args = {
  title: 'Modal with custom width',
  width: 1500
};
