import { useState } from "react";

interface Option {
   key: number;
   value: string;
}

const useSelectOption = (
   initValue: Option
): [
   Option,
   (option: Option) => void,
   string,
   (error: string) => void,
   () => void
] => {
   const [value, setValue] = useState<Option>(initValue || ({} as Option));
   const [error, setError] = useState("");

   const changeError = (errorValue: string) => {
      setError(errorValue);
   };

   const onchange = (option: Option) => {
      setValue(option);
   };

   const resetValue = () => {
      setValue({} as Option);
   };

   return [value, onchange, error, changeError, resetValue];
};

export default useSelectOption;
