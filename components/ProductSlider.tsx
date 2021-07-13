import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import * as s from "../styles/emotion/StyleProductSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface PropsSlider {
   color?: string;
   images?: string[];
   toggleLightBox?: Function;
   changeSlide?: Function;
}

const ProductSlider: React.FC<PropsSlider> = ({
   images,
   color,
   toggleLightBox,
   changeSlide,
}) => {
   function SampleNextArrow(props) {
      const { onClick } = props;
      return <s.NextArrow onClick={onClick} />;
   }

   function SamplePrevArrow(props) {
      const { onClick } = props;
      return <s.PrevArrow onClick={onClick} />;
   }
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: "",
      afterChange: (index) => {
         changeSlide(index);
      },
      appendDots: (dots) => (
         <div>
            <s.Track>
               {dots.map((dot, i) => (
                  <motion.div
                     key={i}
                     variants={{
                        init: {
                           y: 100,
                           opacity: 0,
                        },
                        start: (i) => ({
                           y: 0,
                           opacity: 1,
                           transition: {
                              delay: i * 0.1,
                           },
                        }),
                     }}
                     initial="init"
                     animate="start"
                     custom={i}
                     transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                     <s.Dot
                        key={i}
                        {...dot.props}
                        isActive={
                           dot.props.className === "slick-active" ? true : false
                        }
                     />
                  </motion.div>
               ))}
            </s.Track>
         </div>
      ),
      customPaging: function (i) {
         return (
            <s.DotImage key={i}>
               <Image
                  src={images[i]}
                  width={100}
                  height={100}
                  alt={color}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL={images[i]}
               />
            </s.DotImage>
         );
      },
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
   };
   return (
      <motion.div
         key={color}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <s.SliderContainer>
            <Slider {...settings}>
               {images.map((image, i) => (
                  <s.ImageBox key={i}>
                     <motion.div
                        key={i}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.65 }}
                     >
                        <Image
                           src={image}
                           width={615}
                           height={615}
                           alt={image}
                           loading="eager"
                           placeholder="blur"
                           blurDataURL={image}
                           onClick={() => toggleLightBox()}
                        />
                     </motion.div>
                  </s.ImageBox>
               ))}
            </Slider>
         </s.SliderContainer>
      </motion.div>
   );
};

export default ProductSlider;
