import React from "react";
import { Meta, Story } from "@storybook/react";
import { PageHeaderProps, Button, Form} from "antd";
import { ArrowLeftOutlined, HomeFilled } from '@ant-design/icons';
import { FuskiFieldDate } from '../../form/fields/FuskiFieldDate';
import { FuskiFieldInput } from '../../form/fields/FuskiFieldInput';
import { FuskiFieldSelect } from '../../form/fields/FuskiFieldSelect';
import FuskiPageHeader from "./FuskiPageHeader";

export default {
  title: "Page-Header/FuskiPageHeader",
  component: FuskiPageHeader,
} as Meta;

const Template: Story<PageHeaderProps> = (args) => <FuskiPageHeader {...args}></FuskiPageHeader>;

export const Simple = Template.bind({});
export const Footer = Template.bind({});
const routes = [
  {
    path: 'home',
    breadcrumbName: 'inicio',
  },
  {
    path: 'programacao',
    breadcrumbName: 'programação',
  },
];
const buttons = [
  <Button icon={<ArrowLeftOutlined />}>label</Button>,
  <Button type="primary" icon={<HomeFilled />}>label</Button>
]

const form = [
  <Form id={'identification'} layout="inline">
    <FuskiFieldDate name="date" component="date" format={"DD-MM-YYYY"}/>
    <FuskiFieldInput name="input" component="input"/>
    <FuskiFieldSelect name="select" component="select"
      options={[
        { id: 1, name: "t1" },
        { id: 2, name: "t2" },
        { id: 3, name: "t3" },
        { id: 4, name: "t4" },
      ]}
      valueProp="id"/>
  </Form>
];
Simple.args = {
  title: "ROTEIRO",
  breadcrumb: {routes},
  extra: buttons
};
Footer.args = {
  title: "ROTEIRO",
  breadcrumb: {routes},
  extra: buttons,
  footer: form
};

