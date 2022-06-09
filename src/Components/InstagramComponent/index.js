import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';

import InstagramSingleComponent from './InstagramSingleComponent';
const InstagramComponent = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination]}
        className="mySwiper w-70vw h-auto"
      >
        <SwiperSlide>
          <InstagramSingleComponent></InstagramSingleComponent>
        </SwiperSlide>
        <SwiperSlide>
          <InstagramSingleComponent></InstagramSingleComponent>
        </SwiperSlide>
        <SwiperSlide>
          <InstagramSingleComponent></InstagramSingleComponent>
        </SwiperSlide>
        {/* <SwiperSlide>
          <NewsShowcase></NewsShowcase>
        </SwiperSlide>
        <SwiperSlide>
          <NewsShowcase></NewsShowcase>
        </SwiperSlide>
        <SwiperSlide>
          <NewsShowcase></NewsShowcase>
        </SwiperSlide>
        <SwiperSlide>
          <NewsShowcase></NewsShowcase>
        </SwiperSlide> */}

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default InstagramComponent;
