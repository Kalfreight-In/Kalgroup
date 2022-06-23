import React, { useEffect, useState } from 'react';
import { BigPArtzBrands, BigTireBrands, BrandCompnentBrands } from '../../data';
import { Slideshow } from '../Slider/slideshow';

const BrandWeOffer = () => {
  const [slderData, setsliderData] = useState(BigTireBrands);
  const [select, setSelect] = useState(1);
  useEffect(() => {
    // var data = slderData;
  }, [slderData]);
  return (
    <>
      <div className="flex justify-center items-center flex-row gap-5 pt-8">
        <div
          className={`lg:text-2xl text-lg font-bold cursor-pointer ${
            select === 1
              ? 'text-black link link-underline link-underline-black  pb-2'
              : 'text-gray-500'
          }`}
          onClick={() => {
            setsliderData(BigTireBrands);
            setSelect(1);
          }}
        >
          Brands We Offer
        </div>
        <div className="border-r-4 border-Heading w-1 h-12 pt-2 mx-4"></div>
        <div
          className={`lg:text-2xl text-xl font-bold cursor-pointer ${
            select === 2
              ? 'text-black  link link-underline link-underline-black  pb-2'
              : 'text-gray-500'
          }`}
          onClick={() => {
            setsliderData(BigPArtzBrands);
            setSelect(2);
          }}
        >
          Our Major Clients
        </div>
      </div>
      <div className="m-12">
        <Slideshow
          smallSliders={true}
          data={slderData[0].Brands}
          heading={null}
        ></Slideshow>
      </div>

      {/* <Slideshow data={BigPArtzBrands} smallSlider={true}></Slideshow> */}
    </>
  );
};

export default BrandWeOffer;
