import { FieldConfigForm } from "../utils/field";

export const FieldsFilter = [
  {
    label: "Column 1",
    name: "c1",
    required: false,
    component: "Date",
  },
  {
    label: "Column 2",
    required: true,
    name: "c2",
    valueProp: "id",
    displayProp: "name",
    options: [
      { id: 1, name: "V1" },
      { id: 2, name: "V2" },
      { id: 3, name: "V3" },
      { id: 4, name: "V4" },
    ],
    component: "Select",
  },
  {
    label: "Column 3",
    name: "c3",
    required: false,
    component: "Input",
  },
  {
    label: "Column 4",
    name: "c4",
    required: false,
    component: "DateTime",
  },
  {
    label: "Column 5",
    name: "c5",
    required: false,
    component: "RangeDate",
  },
  {
    label: "Input",
    name: "input",
    required: false,
    component: "Input",
  },
] as FieldConfigForm[];
