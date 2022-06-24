import React, { useState } from 'react';

export default function AboutUs() {
  const [CTA, setCTA] = useState('See More');

  return (
    <>
      <div className="flex md:pt-4 w-screen ">
        <div className="bg-Lightblue flex lg:flex-row-reverse flex-col-reverse w-screen">
          <div
            // className="2xl:ml-42 xl:ml-28 md:ml-5  lg:ml-10 mb-10 mt-10 2xl:pt-12 pt-0 flex-1"
            className="2xl:ml-42 xl:ml-28   lg:ml-10 mb-10 mt-10 2xl:pt-12 pt-0 lg:mx-12  mx-20  "
            style={{ flex: '0  3  30%' }}
          >
            <h1 className="text-white  sm:text-3xl md:text-4xl   2xl:text-5xl font-heading lg:text-2xl  lg:text-left px-0 mb-4  text-center">
              About Us
            </h1>
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white font-desc 2xl:text-xl text-descnew md:text-base px-0   text-justify  pt-8"
            >
              {/* For more than 30 years we have been delivering world-class
              construction and we’ve built many lasting relationships along the
              way.
              <br></br>
              We’ve matured into an industry leader and trusted resource for
              those seeking quality, innovation and reliability when building in
              the U.S. */}
              KAL Group is a diversified transportation and logistics
              service-driven organization formed in 2014, in the United States
              of America. Our headquarters is based in Fontana, California. With
              a vast ecosystem of facilities, we ensure that small fleet
              business owners are empowered to achieve operational excellence.
            </p>
            <div className="flex xl:justify-start  xl:items-start justify-center items-center md:mt-6 xl:mt-0">
              {/* <button
                onClick={() => {
                  setCTA("800-977-0010");
                }}
                className="text-white bg-yellow-bg  font-semibold  mt-4 rounded-md shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg   2xl:w-80 lg:w-56 w-full md:w-52 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md   2xl:p-0 p-2 flex justify-center items-center"
              >
                <p>{CTA}</p>
              </button> */}

              <button
                // onClick={() => {
                //   setCTA('800-977-0010');
                // }}
                className="text-white bg-yellow-bg  font-semibold px-8 py-3 2xl:mt-12 xl:mt-8 lg:mt-4 md:px-24 xl:px-12  shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg "
              >
                <p>{CTA}</p>
              </button>
            </div>
          </div>
          <div
            className="md:flex-1  bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/officephotokalg.png)`,
            }}
          >
            <img
              src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/officephotokalg.png"
              alt="truck"
              className="w-full block xl:hidden bg-no-repeat"
            />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col-reverse lg:flex-row-reverse h-contactimg">
        <div className="bg-Lightblue flex flex-1 lg:flex-row-reverse flex-col justify-center items-start ">
          <div
            // className="2xl:ml-42 xl:ml-28 md:ml-5  lg:ml-10 mb-10 mt-24 2xl:pt-12 pt-0 mx-6 flex-1 "
            className="2xl:ml-42 xl:ml-28 md:ml-5  lg:ml-10 mb-10 mt-24 2xl:pt-12 pt-0 md:mx-6  md:mr-20 md:block justify-center items-center mx-16 "
          >
            <h1 className="text-white text-3xl sm:text-2xl 2xl:text-5xl font-heading lg:text-2xl  px-0 mb-4">
              About us
            </h1>
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white font-desc 2xl:text-xl text-descnew lg:text-base md:text-sm px-0 text-justify"
            >
              For more than 30 years we have been delivering world-class
              construction and we’ve built many lasting relationships along the
              way.
              <br></br>
              <br />
              We’ve matured into an industry leader and trusted resource for
              those seeking quality, innovation and reliability when building in
              the U.S.
            </p>
            <div>
              <button
                onClick={() => {
                  setCTA("800-977-0010");
                }}
                className="text-white bg-yellow-bg  font-semibold  mt-12  shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-52 lg:w-36 md:32 w-64 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md   2xl:p-0 p-4"
              >
                <p>{CTA}</p>
              </button>
            </div>
          </div>
        </div>
        <div className=" flex-1  w-screen">
          <div
            className={
              "md:h-contactimg h-mobileMainImageHeight flex-1 w-full bg-cover bg-no-repeat bg-center "
            }
            style={{
              backgroundImage: `url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/officephotokalg.png)`,
            }}
          ></div>
        </div>
      </div> */}
    </>
  );
}
