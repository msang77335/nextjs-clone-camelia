import React from "react";
import Image from "next/image";
import * as s from "../styles/emotion/StyleImageSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
   const { onClick } = props;
   return (
      <s.NextArrow onClick={onClick}>
         <img
            src="//theme.hstatic.net/1000365849/1000614631/14/rowright.png?v=81"
            alt=""
         />
      </s.NextArrow>
   );
}

function SamplePrevArrow(props) {
   const { onClick } = props;
   return (
      <s.PrevArrow onClick={onClick}>
         <img
            src="//theme.hstatic.net/1000365849/1000614631/14/rowleft.png?v=81"
            alt=""
         />
      </s.PrevArrow>
   );
}

const ImageSlider: React.FC = () => {
   var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dotsClass: s.Dots,
      appendDots: (dots) => (
         <s.Dots>
            <s.DotList>
               {dots.map((dot, i) => (
                  <s.DotItem
                     key={i}
                     {...dot.props}
                     isActive={
                        dot.props.className === "slick-active" ? true : false
                     }
                  ></s.DotItem>
               ))}
            </s.DotList>
         </s.Dots>
      ),
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
   };
   return (
      <s.ImageSliderWrapper>
         <Slider {...settings}>
            <div>
               <Image
                  src="http://theme.hstatic.net/1000365849/1000614631/14/ms_banner_img2.jpg?v=81"
                  alt=""
                  width={1860}
                  height={744}
               />
            </div>
            <div>
               <Image
                  src="http://theme.hstatic.net/1000365849/1000614631/14/ms_banner_img3.jpg?v=81"
                  alt=""
                  width={1860}
                  height={744}
               />
            </div>
            <div>
               <Image
                  src="http://theme.hstatic.net/1000365849/1000614631/14/ms_banner_img4.jpg?v=81"
                  alt=""
                  width={1860}
                  height={744}
               />
            </div>
            <div>
               <Image
                  src="http://theme.hstatic.net/1000365849/1000614631/14/ms_banner_img5.jpg?v=81"
                  alt=""
                  width={1860}
                  height={744}
               />
            </div>
         </Slider>
      </s.ImageSliderWrapper>
   );
};

export default ImageSlider;
