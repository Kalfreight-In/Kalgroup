import React from 'react';
import ErrorBoundary from '../../Components/ErrorBoundary';
import { Slideshow } from '../../Components/Slider/slideshow';
import { BigPArtzBrands, BigTireBrands } from '../../data.js';
const NewsAndEvents = () => {
  return (
    <>
      <div className="mt-28">
        <ErrorBoundary>
          <Slideshow
            data={BigPArtzBrands[0].Brands}
            heading={'News & Events'}
          ></Slideshow>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default NewsAndEvents;
