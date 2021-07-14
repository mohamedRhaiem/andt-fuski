import { useState } from 'react';

const useFuskiValue = <T>(props: T) => {
  const [value, setValue] = useState(props);

  function updateValue(updatedValue: T) {
    setValue(updatedValue);
  }

  return {
    updateValue,
    value,
  };
};

export default useFuskiValue;
