import React from "react";
import * as s from "../styles/emotion/StyleFormGroup";

interface PropsFromGroup {
   id?: string;
   label?: string;
   error?: string;
   onChange?: React.ChangeEventHandler<HTMLInputElement>;
   value?: string;
}

const FormGroup: React.FC<PropsFromGroup> = ({
   id,
   label,
   error,
   value,
   onChange,
}) => {
   return (
      <s.Group isError={error ? true : false}>
         <s.Input placeholder=" " id={id} value={value} onChange={onChange} />
         <s.Label htmlFor={id}>{label}</s.Label>
         <s.Error>{error}</s.Error>
      </s.Group>
   );
};

export default FormGroup;
