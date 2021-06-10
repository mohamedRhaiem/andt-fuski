import React, { useState } from 'react';
import FilterTags from '../components/FilterTags/FilterTags';
import FilterSidebarDrawer from '../components/FilterSidebarDrawer/FilterSidebarDrawer';
import FilterForm from '../components/FilterForm/FilterForm';
import { FieldConfigForm } from '../../form/utils/field';

export interface FuskiFilterProps {
  filterFields: FieldConfigForm[];
  onFilter: (values: any) => void;
  initialState?: Object;
}

const FuskiFilter: React.FC<FuskiFilterProps> = (props) => {
  console.log(props);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState(props.initialState ?? {});

  const onFilter = (values:any) => {
    setVisible(false);
    setFilter(values);
    props.onFilter(values);
  };

  return (
    <>
      <FilterSidebarDrawer setVisible={setVisible} title="Filtrar" visible={visible}>
        <FilterForm fields={props.filterFields} onFilter={onFilter} layout="vertical" filter={filter} />
      </FilterSidebarDrawer>

      <FilterTags onFilter={onFilter} filter={filter} fieldsFilter={props.filterFields} setVisible={setVisible} />
    </>
  );
}

export default FuskiFilter;
