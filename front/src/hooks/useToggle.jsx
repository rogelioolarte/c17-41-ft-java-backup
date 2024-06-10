import { useState } from "react";

function useToggle(boolean) {
  const [state, setState] = useState(boolean);

  const toggleState = () => {
    setState(!state);
  };

  return [state, toggleState];
}

export default useToggle;
