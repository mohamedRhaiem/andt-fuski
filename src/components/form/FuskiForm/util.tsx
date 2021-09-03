import React from "react";

import FuskiFieldInput from "../fields/FuskiFieldInput/FuskiFieldInput";
import FuskiFieldDate from "../fields/FuskiFieldDate/FuskiFieldDate";
import FuskiFieldDateTime from "../fields/FuskiFieldDateTime/FuskiFieldDateTime";
import FuskiFieldRangeDate from "../fields/FuskiFieldRangeDate/FuskiFieldRangeDate";
import FuskiFieldSelect from "../fields/FuskiFieldSelect/FuskiFieldSelect";
import FuskiFieldNumber from "../fields/FuskiFieldNumber/FuskiFieldNumber";
import FuskiFieldSelectApi from "../fields/FuskiFieldSelectApi/FuskiFieldSelectApi";
import FuskiFieldSelectApiStream from "../fields/FuskiFieldSelectApiStream/FuskiFieldSelectApiStream";
import { FieldConfigForm } from "../utils/field";

type fieldsListType = {
  [key: string]: React.FunctionComponent<FieldConfigForm>
}

export const listFormFields:fieldsListType = {
  Input: FuskiFieldInput,
  InputNumber: FuskiFieldNumber,
  Select: FuskiFieldSelect,
  SelectApi: FuskiFieldSelectApi,
  SelectApiStream: FuskiFieldSelectApiStream,
  Date: FuskiFieldDate,
  DateTime: FuskiFieldDateTime,
  RangeDate: FuskiFieldRangeDate,
};

export const buildField = (field: FieldConfigForm, i: number) => {
  const Component = listFormFields[field.component];
  return <Component key={i} {...field} />;
};