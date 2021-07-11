import { useState } from "react";

const useCouter = (
   initValue: number
): [
   string,
   (e: React.ChangeEvent<HTMLInputElement>) => void,
   () => void,
   () => void
] => {
   const [value, setValue] = useState(initValue.toString() || "1");

   const minusClick = () => {
      setValue((parseInt(value) - 1).toString());
   };

   const plusClick = () => {
      setValue((parseInt(value) + 1).toString());
   };

   const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === "") {
         setValue("1");
      } else if (parseInt(e.target.value) > 9999999) {
         setValue("9999999");
      } else {
         setValue(e.target.value.replace(/[^0-9]/g, ""));
      }
   };

   return [value, onchange, minusClick, plusClick];
};

export default useCouter;
