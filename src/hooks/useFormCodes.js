import { useState } from "react";

export const useFormCodes = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    let myValues = values;

    if (!myValues[target.name]) {
      myValues[target.name] = [];
    }

    if (target.name) {
      myValues[target.name][target.id] = target.value;

    }
    setValues(myValues);
  };

  const removeCode = (amount) => {
    setValues(values.pop());
    amount = amount - 1;
  };

  return [values, handleInputChange, reset, removeCode];
};
