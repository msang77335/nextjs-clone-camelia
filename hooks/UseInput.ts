import { useState } from "react";

const useInput = (
   initValue: string
): [
   string,
   (e: React.ChangeEvent<HTMLInputElement>) => void,
   string,
   (error: string) => void,
   () => void
] => {
   const [value, setValue] = useState(initValue.toString() || "");
   const [error, setError] = useState("");

   const changeError = (errorValue: string) => {
      setError(errorValue);
   };

   const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   };

   const resetValue = () => {
      setValue("");
   };

   return [value, onchange, error, changeError, resetValue];
};

export default useInput;
