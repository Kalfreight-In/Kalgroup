import React from 'react';
import ErrorBoundary from '../../Components/ErrorBoundary';
import NewsShowcase from '../../Components/NewsShowcase';
import { Slideshow } from '../../Components/Slider/slideshow';
import SwiperSlider from '../../Components/SwiperSlider';

import { BigPArtzBrands, BigTireBrands } from '../../data.js';
const NewsAndEvents = () => {
  return (
    <>
      <div className=" text-36px font-semibold text-Heading flex flex-col justify-center items-center">
        <h2>News & Events</h2>
        {/* <SwiperSlider></SwiperSlider> */}
        <div className="flex flex-row   items-center m-6 relative">
          <SwiperSlider className="z-10 absolute"></SwiperSlider>
          <SwiperSlider className="z-0 absolute"></SwiperSlider>
          {/* <SwiperSlider></SwiperSlider> */}

          {/* <NewsShowcase></NewsShowcase>
          <NewsShowcase></NewsShowcase>
          <ErrorBoundary>
            <Slideshow
              data={BigPArtzBrands[0].Brands}
              heading={null}
              smallSlider={true}
              singleSlider={true}
            ></Slideshow>
          </ErrorBoundary>
          <ErrorBoundary>
            <Slideshow
              data={BigPArtzBrands[0].Brands}
              // smallSlider={true}
              heading={null}
              singleSlider={true}
            ></Slideshow>
          </ErrorBoundary> */}
        </div>
      </div>
    </>
  );
};

export default NewsAndEvents;
