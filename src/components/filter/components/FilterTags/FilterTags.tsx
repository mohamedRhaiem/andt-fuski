import { FilterOutlined } from "@ant-design/icons";
import { Button, Col, Row, Tag } from "antd";
import type { Store } from "antd/es/form/interface";
import React from "react";
import { find } from "lodash";
import moment from "moment";

interface FilterTagsProps {
  setVisible: (value: boolean) => void;
  filter: Store;
  fieldsFilter: any[];
  onFilter: (values: Store) => void;
  loading?: boolean;
}

interface FieldConfig {
  key: string;
  component: string;
  options?: any[];
  valueProp?: string;
  displayProp?: string;
}

const FilterTags: React.FC<FilterTagsProps> = (props) => {
  const { setVisible, filter, onFilter, fieldsFilter, loading } = props;

  const onOpen = () => setVisible(true);

  const buildChild = (value: any, field: FieldConfig) => {
    if (field.component === "Date") return moment(value).format("DD-MM-YYYY");
    if (field.component === "DateTime") return moment(value).format("DD-MM-YYYY HH:mm:ss");    

    if (field.component === "Select") {
      const element = find(field.options, { [field.valueProp]: value });
      return element[field.displayProp];
    } 

    if (field.component === "SelectApi")
      return field.options!.find((el) => el[field.valueProp!] === value)[field.displayProp!];
      
    if (field.component === "RangeDate")
      return `${moment(value[0]).format("DD-MM-YYYY")} - ${moment(value[1]).format("DD-MM-YYYY")}`;

    return value;
  };

  const clearItem = (key: string) => {
    onFilter(Object.assign(filter, (filter[key] = undefined)));
  };

  const buildChildren = () => {
    return Object.keys(filter).map(
      (key) =>
        filter[key] && (
          <Tag key={key} closable onClose={() => clearItem(key)}>
            {buildChild(filter[key], find(fieldsFilter, { name: key }))}
          </Tag>
        )
    );
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Button type="text" icon={<FilterOutlined />} loading={loading} onClick={onOpen} size="large" />
          {buildChildren()}
        </Col>
      </Row>
    </>
  );
};

export default FilterTags;
