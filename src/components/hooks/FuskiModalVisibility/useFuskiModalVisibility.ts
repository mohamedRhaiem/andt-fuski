import { useState } from 'react';

const useFuskiModalVisibility = () => {
  const [isVisible, setIsVisble] = useState(false);

  function toggle() {
    setIsVisble(!isVisible);
  }

  return {
    isVisible,
    toggle,
  };
};

export default useFuskiModalVisibility;
