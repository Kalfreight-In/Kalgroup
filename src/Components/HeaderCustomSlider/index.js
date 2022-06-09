import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper';
import HeroSection from '../HeaderHome';
import { HomeSliderData } from '../../data';
export default function HeaderCustomSlider() {
  var menu = [
    'KAL Trailers & Leasing',
    'KAL Freight',
    'KVL Tires',
    'KAL Partz',
  ];

  const pagination = {
    clickable: true,

    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu[index] + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        loop={true}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {HomeSliderData.map((data, index) => (
          <SwiperSlide key={data.id}>
            <HeroSection data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
