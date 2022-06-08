import React, { useState } from 'react';
import styled from 'styled-components';
const Gradients = styled.div`
  background: linear-gradient(9.15deg, #000000 -4.43%, rgba(0, 0, 0, 0) 93.09%);

  height: 100%;
  display: flex;

  object-fit: cover;

  z-index: 5;
`;
const NewsShowcase = () => {
  const [CTA, setCTA] = useState('See More');
  var imageurl =
    'https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/news.png';
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row-reverse pt-12 m-4">
        <div className="bg-Darkblue flex lg:flex-row-reverse flex-col ">
          <div
            // className="2xl:ml-42 xl:ml-28 md:ml-5  lg:ml-10 mb-10 mt-10 2xl:pt-12 pt-0 flex-1"
            className="2xl:ml-12 xl:ml-8 md:ml-5  lg:ml-4    mb-10 mt-10 2xl:pt-12 pt-0 mx-6 flex-1 pb-16   "
          >
            <h1 className="text-white text-sm sm:text-lg 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
              01/06/2002
            </h1>
            <h1 className="text-white text-md sm:text-xl 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
              Indiana Truck Show
            </h1>
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white  2xl:text-xl lg:text-base md:text-sm px-0 text-justify"
            >
              It doesn't matter if you love Peterbilts, Western Stars, Macks, or
              if a Kenworth turns your crank, there are lots of these cool
              trucks to see at a truck show.
            </p>
            <div>
              <button
                onClick={() => {
                  setCTA('800-977-0010');
                }}
                className="text-white bg-yellow-bg  font-semibold  mt-4  shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-32 lg:w-21 md:32 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md   2xl:p-0 p-4"
              >
                <p>{CTA}</p>
              </button>
            </div>
          </div>
          <div className="  flex-1">
            <div
              className={
                'md:h-full h-mobileMainImageHeight w-full bg-cover bg-no-repeat bg-center'
              }
              style={{
                backgroundImage: `url(${imageurl})`,
              }}
            >
              <Gradients>
                <div className="flex flex-col justify-center ml-8">
                  <div className="text-white text-md sm:text-xl 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
                    News
                  </div>
                  <div className="text-white text-md sm:text-xl 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
                    Indiana Truck Show
                  </div>
                  <div className="text-white text-md sm:text-xl 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
                    One click away
                  </div>
                </div>
              </Gradients>
            </div>

            {/* <img
              src="https://raw.githubusercontent.com/kalfreight-in/kalgroup/master/src/assets/Images/blacknewtruck.png"
              alt="truck"
              className="w-full "
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsShowcase;
