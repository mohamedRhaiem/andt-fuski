import React from "react";

import FuskiFieldInput from "../fields/FuskiFieldInput/FuskiFieldInput";
import FuskiFieldSelect from "../fields/FuskiFieldSelect/FuskiFieldSelect";
import FuskiFieldDate from "../fields/FuskiFieldDate/FuskiFieldDate";
import FuskiFieldDateTime from "../fields/FuskiFieldDateTime/FuskiFieldDateTime";
import FuskiFieldRangeDate from "../fields/FuskiFieldRangeDate/FuskiFieldRangeDate";
import { FieldConfigForm } from "../utils/field";

type fieldsListType = {
  [key: string]: React.FunctionComponent<FieldConfigForm>
}

export const listFormFields:fieldsListType = {
  Input: FuskiFieldInput,
  Select: FuskiFieldSelect,
  Date: FuskiFieldDate,
  DateTime: FuskiFieldDateTime,
  RangeDate: FuskiFieldRangeDate,
};

export const buildField = (field: any, i: number) => {
  const Component = listFormFields[field.component];
  return <Component key={i} {...field} />;
};
