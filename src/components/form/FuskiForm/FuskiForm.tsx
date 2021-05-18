import React from "react";
import { FormConfig } from "../utils/form";
import { buildField } from "./util";
import { Col, Form, Row } from "antd";
import { isEqual, isUndefined } from "lodash";

const FuskiForm: React.FunctionComponent<FormConfig> = ({
  store,
  fieldsList,
  id,
  onAction,
  onValuesChange,
  layout,
  size,
}: FormConfig) => {
  const [form] = Form.useForm();
  form.setFieldsValue(store);

  const buildForm = () => fieldsList.map((field, i) => buildField(field, i));

  const onReset = () => {
    form.resetFields();
    onAction({});
  };

  return (
    <Form
      preserve={false}
      id={isUndefined(id) ? "myForm" : id}
      form={form}
      layout={layout}
      size={size}
      onFinish={onAction}
      onReset={onReset}
      onValuesChange={onValuesChange}
      hideRequiredMark
      autoComplete="off"
    >
      <Row gutter={16}>
        {isEqual(layout, "inline") && buildForm()}
        {isEqual(layout, "vertical") && <Col span={24}>{buildForm()}</Col>}
      </Row>
    </Form>
  );
};

export default FuskiForm;
