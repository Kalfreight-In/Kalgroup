import React from 'react';
import { motion } from 'framer-motion';
// import businesstrailernew from "../../assets/Images/businesstrailernew.png";
// import businesstruck from "../../assets/Images/businesstruck.png";
// import businesstrailernew from "../../assets/Images/businesstrailernew";
import { Businessdata } from '../../data';
import Accordion from '../Accordion';
import { useSpring, animated } from 'react-spring';
import { useHover } from '../../Hooks/Hover';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper';
import { isDesktop, isTablet } from 'react-device-detect';
var mydata = Businessdata[0];

export default function Business() {
  const [hoverRef, isHovered] = useHover();
  const isDesktop = useMediaQuery('(min-width: 1281px)');
  const isTablet = useMediaQuery('(min-width: 780px)');
  const titleAnimation = useSpring({
    from: {
      transform: 'translateY(-30px)',
    },
    to: [{ transform: 'translateY(15px)' }],
    config: { mass: 3, tension: 500, friction: 25 },
  });
  function returnView() {
    if (isDesktop) {
      console.log(`it is desktop`);
      return mydata.thebox.map((element) => (
        <div
          className={`demo item bg-cover bg-no-repeat bg-left `}
          style={{
            backgroundImage: `url(${isHovered ? element.Bimg : element.Simg})`,
          }}
        ></div>
      ));
    }
    if (isTablet) {
      console.log(`it is tablet`);
      return (
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {mydata.thebox.map((element) => (
            <SwiperSlide>
              <div
                className={` flex-1 h-80 itemM  transition-all delay-75 bg-cover bg-no-repeat bg-center `}
                style={{
                  backgroundImage: `url(${element.Simg})`,
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      );
    } else {
      console.log(`it is nothing`);
      return (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {mydata.thebox.map((element) => (
            <SwiperSlide>
              <div
                className={`demo itemM  bg-contain bg-no-repeat bg-left h-full flex-1`}
                style={{
                  backgroundImage: `url(${element.Simg})`,
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
  }
  return (
    <>
      <div className="bg-businessbackground">
        <div className="lg:p-6 p-2 drop-shadow-2xl">
          <div className="flex justify-center items-center font-semibold">
            <h1 className="md:text-3xl text-2xl font-bold link link-underline link-underline-black text-Description mb-6 pb-2">
              {mydata.heading}
            </h1>
          </div>

          <div className={`flex w-full flex-row `}>
            <div class=" flex w-full">
              <div class="gallery-wrap flex flex-row  w-fill " ref={hoverRef}>
                {returnView()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
