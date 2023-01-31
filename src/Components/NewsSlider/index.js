import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper';
import NewsShowcase from '../NewsShowcase';
import { NewsData } from '../../data';
const NewsSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={1400}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper lg:w-50vw w-100vw "
      >
        {NewsData.map((data, index) => (
          <SwiperSlide key={data.id}>
            <NewsShowcase className="bg-Lightblue" data={data}></NewsShowcase>
          </SwiperSlide>
        ))}

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

export default NewsSlider;
