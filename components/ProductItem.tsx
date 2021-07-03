import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as s from "../styles/emotion/StyleProductItem";
import Slider from "react-slick";
import { ProductSumary } from "../interface/index";

interface Props {
   product?: ProductSumary;
}

const ProductItem: React.FC<Props> = ({ product }) => {
   if (product.colors.length == 1) {
      product.colors.push({ name: "", value: "", image: "" });
   }
   const sliderRef = useRef(Slider);
   let settings = {
      fade: true,
      dots: true,
      dotsClass: "",
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => (
         <div>
            <s.Track>
               {dots.map((dot, i) => (
                  <s.Dot
                     key={i}
                     {...dot.props}
                     isActive={
                        dot.props.className === "slick-active" ? true : false
                     }
                  />
               ))}
            </s.Track>
         </div>
      ),
      customPaging: function (i) {
         if (product.colors[i].value != "") {
            return <s.DotColor value={product.colors[i].value} />;
         } else {
            return <s.DotColor disable />;
         }
      },
   };
   return (
      <s.Content>
         <Slider {...settings} ref={sliderRef}>
            {product.colors.map((color) => (
               <Link key={color.value} href={`/products/${product.slug}`}>
                  <a>
                     <s.ImageBox>
                        {color.image.localeCompare("") != 0 && (
                           <Image
                              src={color.image}
                              width={1000}
                              height={1000}
                           />
                        )}
                     </s.ImageBox>
                  </a>
               </Link>
            ))}
         </Slider>
         <Link href={`/products/${product.slug}`}>
            <a>
               <s.Name as="h4">{product.name}</s.Name>
            </a>
         </Link>
         <s.Price>
            {product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            <s.PriceUnit>đ</s.PriceUnit>
         </s.Price>
      </s.Content>
   );
};

export default ProductItem;
