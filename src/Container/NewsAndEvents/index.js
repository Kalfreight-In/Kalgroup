import React from 'react';
import ErrorBoundary from '../../Components/ErrorBoundary';
import NewsShowcase from '../../Components/NewsShowcase';
import { Slideshow } from '../../Components/Slider/slideshow';
import NewsSlider from '../../Components/NewsSlider';
import { BigPArtzBrands, BigTireBrands } from '../../data.js';
import EventsSlider from '../../Components/EventsSlider';
const NewsAndEvents = () => {
  return (
    <>
      <div className="   flex flex-col justify-center items-center" id='NewsRoom'>
        <h2 className="text-Description text-4xl font-bold py-4 link link-underline link-underline-black">
          Newsroom
        </h2>
        {/* <SwiperSlider></SwiperSlider> */}
        <div
          className="flex lg:flex-row flex-col   items-center  relative"
          id="NewsRoom"
        >
          <NewsSlider className="z-10 absolute"></NewsSlider>
          <EventsSlider className="z-0 absolute"></EventsSlider>
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
