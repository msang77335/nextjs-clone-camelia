import { useState } from "react";

const useInput = (
   initValue: string
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] => {
   const [value, setValue] = useState(initValue.toString() || "");

   const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   };

   const resetValue = () => {
      setValue("");
   };

   return [value, onchange, resetValue];
};

export default useInput;
