import React, { useState } from "react";
import * as s from "../styles/emotion/StyleSelectOptions";
import OutsideClickHandler from "react-outside-click-handler";

interface Option {
   key: number;
   value: string;
}

interface Props {
   isTitle?: boolean;
   options: Option[];
   handleOptionChange: Function;
}

const SelectOptions: React.FC<Props> = ({
   options,
   handleOptionChange,
   isTitle,
}) => {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [isSelected, setIsSelected] = useState<Option>(
      options[0] || { key: -1, value: "" }
   );
   const handleOnClick = () => {
      setIsOpen(!isOpen);
   };
   const handleSelect = (option: Option) => {
      handleOptionChange(option.key);
      setIsSelected(option);
      setIsOpen(false);
   };
   const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const optionFind = options.find(
         (option) => option.key === parseInt(e.target.value)
      );
      handleOptionChange(optionFind.key);
      setIsSelected(optionFind);
      setIsOpen(false);
   };
   return (
      <OutsideClickHandler
         onOutsideClick={() => {
            setIsOpen(false);
         }}
      >
         <s.Select isOpen={isOpen}>
            {isTitle && <s.Title>Sắp xếp theo</s.Title>}
            <s.Box>
               <s.SelectTag onClick={handleOnClick}>
                  <select
                     onChange={(e) => handleChangeSelect(e)}
                     value={isSelected.key}
                  >
                     {options.map((option, i) => (
                        <s.OptionTag
                           isChose={
                              isSelected.key === option.key ? true : false
                           }
                           key={i}
                           value={option.key}
                        >
                           {option.value}
                        </s.OptionTag>
                     ))}
                  </select>
                  <s.CaretDownIcon />
               </s.SelectTag>
               <s.Selected onClick={handleOnClick}>
                  <p>{isSelected.value}</p>
                  <s.CaretDownIcon />
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
