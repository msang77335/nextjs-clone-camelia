import React, { useState, useEffect } from "react";
import * as s from "../styles/emotion/StyleSelectOptions";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OutsideClickHandler from "react-outside-click-handler";

interface Option {
   key: number;
   value: string;
}

interface Props {
   options: Option[];
   handleOptionChange: Function;
}

const SelectOptions: React.FC<Props> = ({ options, handleOptionChange }) => {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [isSelected, setIsSelected] = useState<Option>(
      options[0] || { key: -1, value: "" }
   );
   //const [nowOptions, setNowOptions] = useState<Option[]>(options);
   const handleOnClick = () => {
      setIsOpen(!isOpen);
   };
   const handleSelect = (option: Option) => {
      handleOptionChange(option.key);
      setIsSelected(option);
      setIsOpen(false);
   };
   // useEffect(() => {
   //    const newOptions: Option[] = options.filter(
   //       (option) => option.key != isSelected.key
   //    );
   //    setNowOptions(newOptions);
   // }, [isSelected]);
   return (
      <OutsideClickHandler
         onOutsideClick={() => {
            setIsOpen(false);
         }}
      >
         <s.Select isOpen={isOpen}>
            <p>Sắp xếp theo</p>
            <s.Box>
               <s.Selected onClick={handleOnClick}>
                  <p>{isSelected.value}</p>
                  <FontAwesomeIcon icon={faCaretDown} />
               </s.Selected>
               <s.List>
                  {options.map(
                     (option) =>
                        JSON.stringify(option) !=
                           JSON.stringify(isSelected) && (
                           <s.Item
                              key={option.value}
                              onClick={() => handleSelect(option)}
                           >
                              {option.value}
                           </s.Item>
                        )
                  )}
               </s.List>
            </s.Box>
         </s.Select>
      </OutsideClickHandler>
   );
};

export default SelectOptions;
