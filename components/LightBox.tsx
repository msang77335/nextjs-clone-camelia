import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import * as s from "../styles/emotion/StyleLightBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface PropsLightBox {
   status?: boolean;
   closeLightBox?: Function;
   images?: string[];
   index?: number;
}

const LightBox: React.FC<PropsLightBox> = ({
   status,
   closeLightBox,
   images,
   index,
}) => {
   const lightBoxRef = useRef(null);
   const sliderRef = useRef<Slider>(null);
   const sliderItemRef = useRef(null);
   const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
   const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);
   const [isOpenThumnails, setIsOpenThumnails] = useState<boolean>(false);

   function SampleNextArrow(props) {
      const { onClick } = props;
      return (
         <s.NextArrow onClick={onClick}>
            <s.NextIcon />
         </s.NextArrow>
      );
   }

   function SamplePrevArrow(props) {
      const { onClick } = props;
      return (
         <s.PrevArrow onClick={onClick}>
            <s.PrevIcon />
         </s.PrevArrow>
      );
   }

   useEffect(() => {
      sliderRef.current.slickGoTo(index);
   }, [index]);
   useEffect(() => {
      window.addEventListener("resize", () => {
         if (window.innerWidth < 768) {
            setIsOpenThumnails(false);
         }
      });
   });
   const handleOutSideClick = (e) => {
      const { target } = e;
      if (sliderItemRef.current.contains(target)) {
         handleExtLightBox();
      }
   };
   const handleOpenThumnails = () => {
      setIsOpenThumnails(!isOpenThumnails);
   };
   const handleAutoPlay = () => {
      setIsAutoPlay(!isAutoPlay);
      if (isAutoPlay) {
         sliderRef.current.slickPause();
      } else {
         sliderRef.current.slickPlay();
      }
   };
   const handleFullScreen = () => {
      setIsFullScreen(true);
      lightBoxRef.current.requestFullscreen();
      if (isAutoPlay) {
         sliderRef.current.slickPause();
         setIsAutoPlay(false);
      }
   };
   const handleExtFullScreen = () => {
      document.exitFullscreen();
      setIsFullScreen(false);
      if (isAutoPlay) {
         sliderRef.current.slickPause();
         setIsAutoPlay(false);
      }
   };
   const handleExtLightBox = () => {
      if (isAutoPlay) {
         sliderRef.current.slickPause();
         setIsAutoPlay(false);
      }
      if (isFullScreen) {
         handleExtFullScreen();
      }
      if (isOpenThumnails) {
         setIsOpenThumnails(false);
      }
      sliderRef.current.slickGoTo(index);
      closeLightBox();
   };
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplaySpeed: 2000,
      dotsClass: "",
      appendDots: (dots) => (
         <div>
            <s.Track>
               <s.Dots>
                  {dots.map((dot, i) => (
                     <s.Dot
                        key={i}
                        {...dot.props}
                        isDotActive={
                           dot.props.className === "slick-active" ? true : false
                        }
                     />
                  ))}
               </s.Dots>
            </s.Track>
         </div>
      ),
      customPaging: function (i) {
         return (
            <div>
               <Image
                  src={images[i]}
                  width={100}
                  height={100}
                  alt={images[i]}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL={images[i]}
               />
            </div>
         );
      },
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
   };
   return (
      <s.Wrapper
         isOpen={status}
         ref={lightBoxRef}
         isOpenThumnails={isOpenThumnails}
      >
         <s.Options>
            {isAutoPlay ? (
               <s.Option onClick={() => handleAutoPlay()}>
                  <s.PauseIcon />
               </s.Option>
            ) : (
               <s.Option onClick={() => handleAutoPlay()}>
                  <s.PlayIcon />
               </s.Option>
            )}
            {isFullScreen ? (
               <s.Option onClick={() => handleExtFullScreen()}>
                  <s.CompressIcon />
               </s.Option>
            ) : (
               <s.Option onClick={() => handleFullScreen()}>
                  <s.ExpandIcon />
               </s.Option>
            )}
            <s.OptionThumnails onClick={() => handleOpenThumnails()}>
               <s.ThIcon />
            </s.OptionThumnails>
            <s.Option onClick={() => handleExtLightBox()}>
               <s.TimesIcon />
            </s.Option>
         </s.Options>
         <s.Content onClick={(e) => handleOutSideClick(e)}>
            <Slider {...settings} ref={sliderRef}>
               {images.map((image, i) => (
                  <s.SliderItem key={i} ref={sliderItemRef}>
                     <s.ImageBox isOpen={status}>
                        <Image
                           src={image}
                           width={1000}
                           height={1000}
                           placeholder="blur"
                           blurDataURL={image}
                           alt={image}
                        />
                     </s.ImageBox>
                  </s.SliderItem>
               ))}
            </Slider>
            <s.Progress isAutoPlay={isAutoPlay} />
         </s.Content>
      </s.Wrapper>
   );
};

export default LightBox;
