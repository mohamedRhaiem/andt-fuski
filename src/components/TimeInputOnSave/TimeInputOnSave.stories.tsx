import React from "react";
import TimeInputOnSave from './TimeInputOnSave';

export default {
    title: 'FormFields/TimeInputOnSave',
    component: TimeInputOnSave,
  };

export const Default = (): React.ReactNode => <TimeInputOnSave field={{ key: "rangeDate", required: false, label: "Range Date" }} save={()=>console.log('test')}/>;