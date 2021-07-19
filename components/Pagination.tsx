import React from "react";
import * as s from "../styles/emotion/StylePagination";

interface PropsPagination {
   handlePageChange?: Function;
   start?: number;
   current?: number;
   end?: number;
}

const Pagination: React.FC<PropsPagination> = ({
   start,
   current,
   end,
   handlePageChange,
}) => {
   const list = [];
   for (let i = start; i <= end; i++) {
      list.push(i);
   }
   const handleItemClick = (i) => {
      if (i >= start && i <= end) {
         handlePageChange(i);
      }
   };
   return (
      <div>
         <s.List>
            <s.Item
               isDsable={current === start ? true : false}
               onClick={() => handleItemClick(current - 1)}
            >
               <s.ChevronLeftIcon />
            </s.Item>
            {list.map((i) => (
               <s.Item
                  key={i}
                  isActive={i === current ? true : false}
                  onClick={() => handleItemClick(i)}
               >
                  {i}
               </s.Item>
            ))}
            <s.Item
               isDsable={current === end ? true : false}
               onClick={() => handleItemClick(current + 1)}
            >
               <s.ChevronRightIcon />
            </s.Item>
         </s.List>
      </div>
   );
};

export default Pagination;
