import React, { useState } from "react";
import * as s from "../styles/emotion/StyleProductTabs";
import { motion, AnimatePresence } from "framer-motion";
import ProductTabVideo from "./ProductTabVideo";
import ProductTabDes from "./ProductTabDes";
import { DescOfProduct } from "../interface/index";

interface PropsTabs {
   video?: string;
   descOfProductList?: DescOfProduct[];
}

const ProductTabs: React.FC<PropsTabs> = ({ video, descOfProductList }) => {
   const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) => {
      setToggleState(index);
   };
   return (
      <s.Tabs>
         <s.TabsList>
            <s.Tab>
               <s.TabBtn
                  isActive={toggleState === 1 ? true : false}
                  onClick={() => toggleTab(1)}
               >
                  Mô tả sản phẩm
               </s.TabBtn>
            </s.Tab>
            <s.Tab>
               <s.TabBtn
                  isActive={toggleState === 2 ? true : false}
                  onClick={() => toggleTab(2)}
               >
                  Video sản phẩm
               </s.TabBtn>
            </s.Tab>
         </s.TabsList>
         <s.TabContents>
            <AnimatePresence exitBeforeEnter>
               {toggleState === 1 ? (
                  <motion.div
                     key={toggleState}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                     <s.TabContent>
                        <ProductTabDes descOfProductList={descOfProductList} />
                     </s.TabContent>
                  </motion.div>
               ) : (
                  <motion.div
                     key={toggleState}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                     <s.TabContent>
                        <ProductTabVideo src={video} />
                     </s.TabContent>
                  </motion.div>
               )}
            </AnimatePresence>
         </s.TabContents>
      </s.Tabs>
   );
};

export default ProductTabs;
