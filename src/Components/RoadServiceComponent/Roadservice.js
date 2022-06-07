import React, { useState } from 'react';

export default function Roadservice() {
  const [CTA, setCTA] = useState('Call for a service');

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row pt-12 ">
        <div className="bg-Darkblue flex lg:flex-row flex-col ">
          <div
            // className="2xl:ml-42 xl:ml-28 md:ml-5  lg:ml-10 mb-10 mt-10 2xl:pt-12 pt-0 flex-1"
            className="2xl:ml-42 xl:ml-28 md:ml-5  lg:ml-10 mb-10 mt-10 2xl:pt-12 pt-0 mx-6 flex-1"
          >
            <h1 className="text-white text-3xl sm:text-2xl 2xl:text-5xl font-heading lg:text-2xl  px-0 mb-4">
              24/7 Roadside Assistance
            </h1>
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white font-desc 2xl:text-xl text-descnew lg:text-base md:text-sm px-0 text-justify"
            >
              We understand the value of your time. Hence to minimize delays and
              improve downtime, we offer 24*7 roadside assistance for tires,
              even in remote areas. A vast vendor network spread across Western
              Canada and an impressive team of tire specialists enable us to
              respond efficiently and keep you always on the go.
            </p>
            <div>
              <button
                onClick={() => {
                  setCTA('800-977-0010');
                }}
                className="text-white bg-yellow-bg  font-semibold  mt-4 rounded-md shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-80 lg:w-36 md:32 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md   2xl:p-0 p-4"
              >
                <p>{CTA}</p>
              </button>
            </div>
          </div>
          <div className="  flex-1">
            <img
              src="https://raw.githubusercontent.com/kalfreight-in/kalgroup/master/src/assets/Images/blacknewtruck.png"
              alt="truck"
              className="w-full "
            />
          </div>
        </div>
      </div>
    </>
  );
}
