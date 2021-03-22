import React from "react";
import FieldRangeDate from './FieldRangeDate';

export default {
    title: 'FormFields/FieldRangeDate',
    component: FieldRangeDate,
  };

export const Default = (): React.ReactNode => <FieldRangeDate field={{ key: "rangeDate", required: false, label: "Range Date" }}/>;