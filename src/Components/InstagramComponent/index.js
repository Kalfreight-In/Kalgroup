import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper';
import { Pagination, Navigation } from 'swiper';
import { Instagramfeeds } from '../../data';
import InstagramSingleComponent from './InstagramSingleComponent';
const InstagramComponent = () => {
  return (
    <>
      {/* ! making changes in pagination  */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={1400}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper xl:w-70vw md:w-50vw w-full"
      >
        {Instagramfeeds.map((data, index) => (
          <SwiperSlide key={data.id}>
            <InstagramSingleComponent data={data}></InstagramSingleComponent>
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

export default InstagramComponent;
