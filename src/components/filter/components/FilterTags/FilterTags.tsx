import { FilterOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import type { Store } from "antd/es/form/interface";
import React from "react";
import { find } from "lodash";
import moment from "moment";
import CustomTag from "./components/CustomTag";

import styles from './index.module.less'; 

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
     
    if (field.component === "Select" && field.valueProp && field.displayProp) {
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
          <CustomTag
            key={key}
            itemKey={key}
            onClose={clearItem}
            text={buildChild(filter[key], find(fieldsFilter, { name: key }))}
          ></CustomTag>
        ),
    );
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <div className={styles.filterTagsPanel}>
            <Button type="text" icon={<FilterOutlined className={styles.filterTagsIcon} />} loading={loading} onClick={onOpen} size="large" />
            {buildChildren()}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default FilterTags;
