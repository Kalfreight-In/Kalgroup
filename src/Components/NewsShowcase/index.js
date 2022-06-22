import React, { useState } from 'react';
import styled from 'styled-components';
const Gradients = styled.div`
  background: linear-gradient(9.15deg, #000000 -4.43%, rgba(0, 0, 0, 0) 93.09%);

  height: 100%;
  display: flex;

  object-fit: cover;

  z-index: 5;
`;
const NewsShowcase = (data) => {
  const [CTA, setCTA] = useState(data.data.CTA.heading);
  var imageurl = data.data.imageUrl;
  return (
    <>
      <div class="flex bg-Lightblue   sm:m-4">
        <div class="flex  flex-row-reverse ">
          <div class="sm:block hidden 2xl:ml-12 xl:ml-8 md:ml-5  lg:ml-4    mb-10 mt-10 2xl:pt-12 pt-0 mx-6 flex-1 pb-1 ">
            <h1 class="text-white text-sm sm:text- 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
              {data.data.date}
            </h1>
            <h1 className="text-white text-lg  2xl:text-xl  font-heading   px-0 mb-4">
              {data.data.heading}w-full
            </h1>
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white  2xl:text-xl text-sm px-0 text-justify lg:h-32 "
            >
              {data.data.desc}
            </p>
            <div>
              <button
                onClick={() => {
                  setCTA(data.data.CTA.heading);
                }}
                className="text-white bg-yellow-bg  font-semibold  mt-4  shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center lg:w-32 sm:w-full md:32 2xl:h-16 h-12 2xl:text-2xl lg:text-base md:text-base text-base   2xl:p-0 p-4"
              >
                <p>{CTA}</p>
              </button>
            </div>
          </div>
          <div className="  sm:flex-1 flex w-full">
            <div
              className={
                'md:h-full h-mobileMainImageHeight w-full bg-cover bg-no-repeat bg-center'
              }
              style={{
                backgroundImage: `url(${imageurl})`,
              }}
            >
              <Gradients>
                <div className="flex flex-col justify-end ml-8 sm:mb-4 mb-12 sm:w-fit w-screen ">
                  <div className="text-white text-base xl:text-base font-heading   px-0 mb-2">
                    {data.data.category}
                  </div>
                  <div className="text-white text-3xl  lg:text-3xl font-bold   px-0 mb-2">
                    {data.data.PhotoHeading}
                  </div>
                  <div className="text-white text-lg  lg:text-lg font-normal   px-0 mb-2">
                    {data.data.Tag}
                  </div>
                  <button
                    onClick={() => {
                      setCTA(data.data.CTA.heading);
                    }}
                    className="sm:hidden   text-white bg-yellow-bg  font-semibold text-lg mt-4  shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center w-1/2    h-12   p-4"
                  >
                    <p>{CTA}</p>
                  </button>
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
