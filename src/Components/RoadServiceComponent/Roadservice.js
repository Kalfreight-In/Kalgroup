import React, { useState } from 'react';

export default function Roadservice() {
  const [CTA, setCTA] = useState('See More');

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row-reverse pt-12 ">
        <div className="bg-Lightblue flex lg:flex-row-reverse flex-col ">
          <div
            // className="2xl:ml-42 xl:ml-28 md:ml-5  lg:ml-10 mb-10 mt-24 2xl:pt-12 pt-0 mx-6 flex-1 " 
            className="2xl:ml-42 xl:ml-28 md:ml-5  lg:ml-10 mb-10 mt-24 2xl:pt-12 pt-0 mx-6 flex-1 mr-20"   
          
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
              <br></br><br />
              We’ve matured into an industry leader and trusted resource for
              those seeking quality, innovation and reliability when building in
              the U.S.
            </p>
            <div>
              <button
                onClick={() => { 
                  setCTA("800-977-0010");
                }}
                className="text-white bg-yellow-bg  font-semibold  mt-12  shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-52 lg:w-36 md:32 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md   2xl:p-0 p-4"
              >
                <p>{CTA}</p>
              </button>
            </div>
          </div>
          <div className=" flex-2"> 
            <img
              src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/officephotokalg.png" 
              alt="truck"
              className="w-full "
            />
          </div>
        </div>
      </div>
    </>
  );
}


