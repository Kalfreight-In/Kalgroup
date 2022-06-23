import React from 'react';
import { BrandCompnentBrands } from '../../data.js';
import useMediaQuery from '../../Hooks/CustomMediaQuery.js';
import BrandWeOffer from '../BrandWeOffer/BrandWeOffer.js';
import { Slideshow } from '../Slider/slideshow/index.js';
// import { BigTrailersBrand } from '../../data.js'

export const UnderConstruction = ({
  icon = 'https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/BigRig-Big.png',
}) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <div className="mt-28">
        <div className="flex flex-col align-center justify-center">
          <div
            className="flex flex-row align-center justify-center"
            // key={item.id}
          >
            <img src={icon} width={`${isDesktop ? '500px' : '200px'}`}></img>
            {/* <img
              src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Images/underConstruction.gif"
              className="w-fit"
            ></img> */}
          </div>

          <div className="flex flex-row align-center justify-center md:text-5xl text-2xl text-Heading font-bold  pb-8 md:pr-16">
            Page Under Construction
          </div>
          <div>
            {/* <div className="justify-self-center md:w-1/3 w-max">
              {data1[0].desc}
            </div> */}

            <BrandWeOffer></BrandWeOffer>
          </div>
          {/* <Slideshow
            data={BigTrailersBrand[0].Brands}
            smallSlider={true}
          ></Slideshow> */}
          {/* <div className="flex flex-wrap mx-20 my-16 align-center justify-center">
            {data1[0].Brands.map((brand) => (
              <div
                className="w-full sm:w-1/2 md:w-1/3 md:w-1/4 xl:w-fit mb-4 mt-12 flex align-center justify-center "
                key={brand.id}
              >
                <img
                  src={brand.imageurl}
                  alt={brand.heading}
                  className="mx-6 my-2 align-center w-40 h-16"
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};
