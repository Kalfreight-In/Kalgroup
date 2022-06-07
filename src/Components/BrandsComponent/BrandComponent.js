import React from 'react';
import { BrandCompnentBrands } from '../../data.js';
function BrandComponent() {
  return (
    <>
      <div className="flex flex-wrap mx-20 my-16 align-center justify-center">
        {BrandCompnentBrands.map((brand) => (
          <div
            className="w-60 h-24 px-4 mx-6 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-6 mt-12 flex align-center justify-center"
            key={brand.id}
          >
            <img
              src={brand.imageurl}
              alt={brand.heading}
              className="mx-6 my-2 align-center"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default BrandComponent;
