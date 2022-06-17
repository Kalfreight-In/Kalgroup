import React, { useEffect, useState } from 'react';
import { BigPArtzBrands, BigTireBrands, BrandCompnentBrands } from '../../data';
import { Slideshow } from '../Slider/slideshow';

const BrandWeOffer = () => {
  const [slderData, setsliderData] = useState(BigTireBrands);
  const [select, setSelect] = useState(1);
  useEffect(() => {
    var data = slderData;
  }, [slderData]);
  return (
    <>
      <div className="flex justify-center items-center flex-row gap-5">
        <div
          className={`text-2xl font-bold cursor-pointer ${
            select === 1 ? 'text-black' : 'text-gray-500'
          }`}
          onClick={() => {
            setsliderData(BigTireBrands);
            setSelect(1);
          }}
        >
          Brands We Offer
        </div>
        <div
          className={`text-2xl font-bold cursor-pointer ${
            select === 2 ? 'text-black' : 'text-gray-500'
          }`}
          onClick={() => {
            setsliderData(BigPArtzBrands);
            setSelect(2);
          }}
        >
          Our Major Clients
        </div>
      </div>

      <Slideshow data={slderData[0].Brands}></Slideshow>

      {/* <Slideshow data={BigPArtzBrands} smallSlider={true}></Slideshow> */}
    </>
  );
};

export default BrandWeOffer;
