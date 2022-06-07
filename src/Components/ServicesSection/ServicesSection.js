import React from 'react';
import { ServiceComponentdata } from '../../data.js';

export default function ServicesSection() {
  var dataservice = ServiceComponentdata[0];

  return (
    <>
      <div
        id="maincontainer"
        className="bg-Lightblue flex flex-col justify-between md:flex-row"
      >
        <div id="firstmain" className="mt-56  xl:ml-60 ml-10 md:w-1/2 ">
          <div>
            <h1 className="text-heading text-white font-heading  ">
              {dataservice.Heading}
            </h1>
            <p className="text-desc font-desc text-white w-2/3  ">
              {dataservice.Desc}
            </p>
            <button className="text-white bg-yellow-bg  font-semibold  mt-8 rounded-md shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-80 lg:w-36 md:32 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md ">
              {dataservice.CTA.heading}
            </button>
          </div>
        </div>

        <div id="Secondmain" className=" mt-24 pb-8 xl:ml-0 ml-10 w-1/2">
          {dataservice.services.map((service) => (
            <div
              id="innermain"
              className="flex justify-between mr-72 mt-16 "
              key={service.id}
            >
              <div className="mr-6 mt-16">
                <img className="mr-6" src={service.Logo} alt="truck" />
              </div>

              <div>
                <h1 className="text-white text-subheading font-sub-heading">
                  {service.Heading}
                </h1>
                <p className="text-desc font-desc text-white w-96 mt-4">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
