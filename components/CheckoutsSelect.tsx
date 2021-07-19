import React, { useState, useEffect, useRef } from "react";
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
   const [selected, setSelected] = useState<Option>({} as Option);
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const selectRef = useRef<HTMLSelectElement>(null);
   useEffect(() => {
      if (Object.keys(value).length !== 0) {
         setIsSelected(true);
      } else {
         setIsSelected(false);
      }
   }, [value]);
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
   const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const optionFind = options.find(
         (option) => option.key === parseInt(e.target.value)
      );
      handleOptionChange(optionFind);
      changeCallBack(optionFind);
      setIsSelected(true);
      setSelected(optionFind);
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
               <s.SelectTag onClick={handleOnClick}>
                  <s.Label
                     htmlFor="select"
                     onClick={() => selectRef.current.click()}
                  >
                     {title}
                  </s.Label>
                  <select
                     id="select"
                     onChange={(e) => handleChangeSelect(e)}
                     value={Object.keys(value).length !== 0 ? value.key : -1}
                     ref={selectRef}
                  >
                     {options.map((option, i) => (
                        <s.OptionTag
                           key={i}
                           value={option.key}
                           isChose={selected.key === option.key ? true : false}
                        >
                           {option.value}
                        </s.OptionTag>
                     ))}
                     <s.OptionTag value={-1} selected isChose></s.OptionTag>
                  </select>
                  <s.CaretDownIcon />
               </s.SelectTag>
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
