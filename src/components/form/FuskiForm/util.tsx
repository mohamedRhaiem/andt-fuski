import React from "react";

import FieldInput from "../fields/FuskiFieldInput/FuskiFieldInput";
import FieldSelect from "../fields/FuskiFieldSelect/FuskiFieldSelect";
import FieldDate from "../fields/FuskiFieldDate/FuskiFieldDate";
import FieldDateTime from "../fields/FuskiFieldDateTime/FuskiFieldDateTime";
import FieldRangeDate from "../fields/FuskiFieldRangeDate/FuskiFieldRangeDate";
import { FieldConfigForm } from "../utils/field";

export const listFormFields = {
  Input: FieldInput,
  Select: FieldSelect,
  Date: FieldDate,
  DateTime: FieldDateTime,
  RangeDate: FieldRangeDate,
};

export const buildField = (field: FieldConfigForm, i: number) => {
  const Component = listFormFields[field.component];
  return <Component key={i} {...field} />;
};
