import React, { ReactChild, ReactChildren, useEffect, useState } from "react";
import Banner from "./Banner";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import SideBarSearch from "./SideBarSearch";
import SideBarCategory from "./SideBarCategory";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Messenger from "./Messenger";
import CartModal from "./CartModal";

interface Props {
   children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Layout: React.FC<Props> = ({ children }) => {
   const [isOpenSearch, setIsOpenSearch] = useState(false);
   const [isOpenCategory, setIsOpenCategory] = useState(false);
   const [isOpenCart, setIsOpenCart] = useState(false);

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
   const toggleCart = () => setIsOpenCart(!isOpenCart);
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.65 }}
      >
         <HeaderTop
            openSearch={toggleSearch}
            openCategory={toggleCategory}
            openCart={toggleCart}
         />
         <HeaderBottom />
         <Banner />
         <SideBarSearch closeSearch={toggleSearch} status={isOpenSearch} />
         <SideBarCategory
            closeCategory={toggleCategory}
            status={isOpenCategory}
         />
         <CartModal status={isOpenCart} closeCart={toggleCart} />
         {children}
         <Footer />
         <Messenger />
      </motion.div>
   );
};

export default Layout;
