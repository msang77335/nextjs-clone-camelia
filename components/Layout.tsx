import React, { ReactChild, ReactChildren, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
const Banner = dynamic(() => import("./Banner"));
const HeaderTop = dynamic(() => import("./HeaderTop"));
const HeaderBottom = dynamic(() => import("./HeaderBottom"));
const SideBarSearch = dynamic(() => import("./SideBarSearch"));
const SideBarCategory = dynamic(() => import("./SideBarCategory"));
const Footer = dynamic(() => import("./Footer"));
const Messenger = dynamic(() => import("./Messenger"));
const CartModal = dynamic(() => import("./CartModal"));

interface Props {
   children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Layout: React.FC<Props> = ({ children }) => {
   const [isOpenSearch, setIsOpenSearch] = useState(false);
   const [isOpenCategory, setIsOpenCategory] = useState(false);

   useEffect(() => {
      window.addEventListener("resize", () => {
         if (window.innerWidth > 520) {
            setIsOpenSearch(false);
            setIsOpenCategory(false);
         }
      });
   });

   const toggleSearch = () => setIsOpenSearch(!isOpenSearch);
   const toggleCategory = () => setIsOpenCategory(!isOpenCategory);
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.65 }}
      >
         <HeaderTop openSearch={toggleSearch} openCategory={toggleCategory} />
         <HeaderBottom />
         <Banner />
         <SideBarSearch closeSearch={toggleSearch} status={isOpenSearch} />
         <SideBarCategory
            closeCategory={toggleCategory}
            status={isOpenCategory}
         />
         <CartModal />
         {children}
         <Footer />
         <Messenger />
      </motion.div>
   );
};

export default Layout;
