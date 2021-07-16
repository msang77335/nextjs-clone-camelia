import React, { useState, useEffect } from "react";
import * as s from "../styles/emotion/StyleCheckoutsSelect";
import OutsideClickHandler from "react-outside-click-handler";

interface Option {
   key: number;
   value: string;
}

interface Props {
   title: string;
   options: Option[];
   handleOptionChange: Function;
   changeCallBack: Function;
   error?: string;
   value?: Option;
}

const CheckoutsSelect: React.FC<Props> = ({
   title,
   options,
   handleOptionChange,
   changeCallBack,
   error,
   value,
}) => {
   const [isSelected, setIsSelected] = useState(false);
   const [isOpen, setIsOpen] = useState<boolean>(false);
   useEffect(() => {
      if (Object.keys(value).length !== 0) {
         setIsSelected(true);
      } else {
         setIsSelected(false);
      }
   });
   const handleOnClick = () => {
      if (options.length !== 0) {
         setIsOpen(!isOpen);
      }
   };
   const handleSelect = (option: Option) => {
      handleOptionChange(option);
      changeCallBack(option);
      setIsOpen(false);
      setIsSelected(true);
   };
   return (
      <OutsideClickHandler
         onOutsideClick={() => {
            setIsOpen(false);
         }}
      >
         <s.Select
            isOpen={isOpen}
            isSelected={isSelected}
            isError={error ? true : false}
            isDisable={options.length === 0 ? true : false}
         >
            <s.Box>
               <s.Selected onClick={handleOnClick}>
                  <s.Label>{title}</s.Label>
                  <p>{value.value}</p>
                  <s.CaretDownIcon />
               </s.Selected>
               {options.length > 0 && (
                  <s.List>
                     {options.map(
                        (option) =>
                           JSON.stringify(option) != JSON.stringify(value) && (
                              <s.Item
                                 key={option.value}
                                 onClick={() => handleSelect(option)}
                              >
                                 {option.value}
                              </s.Item>
                           )
                     )}
                  </s.List>
               )}
            </s.Box>
            <s.Error isError={error ? true : false}>{error}</s.Error>
         </s.Select>
      </OutsideClickHandler>
   );
};

export default CheckoutsSelect;
