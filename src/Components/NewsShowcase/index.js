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
      <div class="flex lg:pt-12  sm:m-4">
        <div class="bg-Lightblue flex  flex-row-reverse ">
          <div class="sm:block hidden 2xl:ml-12 xl:ml-8 md:ml-5  lg:ml-4    mb-10 mt-10 2xl:pt-12 pt-0 mx-6 flex-1 pb-16   ">
            <h1 class="text-white text-sm sm:text- 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
              {data.data.date}
            </h1>
            <h1 className="text-white text-lg  2xl:text-xl  font-heading   px-0 mb-4">
              {data.data.heading}
            </h1>
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white  2xl:text-xl text-sm px-0 text-justify lg:h-32"
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
{
  /* <div
  class="swiper-slide swiper-slide-active"
  data-swiper-slide-index="0"
  style="width: 880px; margin-right: 30px;"
>
  <div class="flex flex-col-reverse lg:flex-row-reverse pt-12 m-4">
    <div class="bg-Lightblue flex lg:flex-row-reverse flex-col ">
      <div class="2xl:ml-12 xl:ml-8 md:ml-5  lg:ml-4    mb-10 mt-10 2xl:pt-12 pt-0 mx-6 flex-1 pb-16   ">
        <h1 class="text-white text-sm sm:text-lg 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
          01/06/2002
        </h1>
        <h1 class="text-white text-md sm:text-xl 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
          Come to our dinner
        </h1>
        <p class="text-white  2xl:text-xl lg:text-base md:text-sm px-0 text-justify">
          We provide a full range of front end mechanical repairs for all makes
          and models of car It doesn't matter if you love Peterbilts.
        </p>
        <div>
          <button class="text-white bg-yellow-bg  font-semibold  mt-4  shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-32 lg:w-21 md:32 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md   2xl:p-0 p-4">
            <p>Register</p>
          </button>
        </div>
      </div>
      <div class="  flex-1">
        <div
          class="md:h-full h-mobileMainImageHeight w-full bg-cover bg-no-repeat bg-center"
          style='background-image: url("https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/KalGroupEvents/kalevent1.png");'
        >
          <div class="sc-bczRLJ dXHsWs">
            <div class="flex flex-col justify-center ml-8">
              <div class="text-white text-md sm:text-xl 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
                Upcoming events
              </div>
              <div class="text-white text-md sm:text-xl 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
                KAL Group Dinner
              </div>
              <div class="text-white text-md sm:text-xl 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
                One click away
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>; */
}
