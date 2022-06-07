import React from 'react';
import arrow from '../../assets/Images/arrow.svg';
import { motion } from 'framer-motion';
import BgImage from '../../assets/Images/GroupWebsitesBackground.png';
import { GroupWebsiteComponentdata } from '../../data.js';
function GroupWebsiteComponent() {
  return (
    <>
      <div
        className=" bg-white  "
        // style={{ backgroundImage: `url(${BgImage})` }}
      >
        {GroupWebsiteComponentdata.map((data) => (
          <div className="container   w-screen   text-gray-600" key={data.id}>
            <div
              className={
                data.id % 2 !== 0
                  ? 'md:flex lg:w-screen w-fit'
                  : 'md:flex md:flex-row-reverse lg:w-screen flex-col-reverse w-fit'
              }
            >
              <motion.div
                whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="app__header-info flex-1"
              >
                <div className={data.id % 2 !== 0 ? 'md:5/12 ' : 'md:5/12 '}>
                  <div className="relative">
                    <div
                      className={
                        'md:h-screen h-mobileMainImageHeight w-full bg-cover bg-no-repeat bg-center'
                      }
                      style={{ backgroundImage: `url(${data.imageurl})` }}
                      // src={data.imageurl}

                      loading="lazy"
                    />
                    {/* <div className="cursor-pointer absolute top-0 right-0  hover:shadow-outline drop-shadow-lg bg-white">
                      <img src={data.Logourl} width="200" />
                    </div> */}
                  </div>
                </div>
              </motion.div>
              <div className="md:6/12 flex-col flex content-center  flex-1">
                <div className="md:6/12 flex-col flex content-center justify-center lg:w-4/3 flex-1 self-start items-start m-4 laptop:ml-28  mt-2">
                  <div className="flex flex-row items-center content-start mt-2 lg:-ml-32 pl-6">
                    <motion.img
                      whileInView={{ scale: [0.5, 1] }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      alt="profile_circle"
                      //  className="overlay_circle"
                      src={data.icon}
                      width="100"
                      className="pr-8"
                    ></motion.img>

                    <div className="font-display  text-2xl font-bold leading-tight">
                      <h2 className="xl:text-5xl self-start text-Heading font-bold md:text-2xl link link-underline link-underline-black 2xl:pb-8 pb-2 2xl::mb-4 mb-2">
                        {data.heading}
                      </h2>
                    </div>
                  </div>
                  {data.desc.map((data) => (
                    <div className="2xl:w-3/4 2xl:mt-4 lg:mt-2  " key={data.id}>
                      {/* <h2 className="2xl:mt-4  lg:mt-2 text-2xl text-Heading font-bold md:text-subheading ">
                        {data.head}
                      </h2> */}
                      <p className="mt-2  text-Description font-desc text-descnew text-justify">
                        {data.desc}
                      </p>
                      {data.desc1 ? (
                        <div className="lg:mt-2 ">
                          <p className="text-Description font-desc text-descnew text-justify">
                            {data.desc1[0].head}
                          </p>
                          {data.desc1[0].desc.map((info) => (
                            <p className=" laptop:mt-2 text-Description font-desc text-descnew text-justify">
                              * {info.desc}
                            </p>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                  {data.comingsoon ? (
                    <section className="centered-container">
                      <a className="link link--arrowed " href="#">
                        <div className="flex flex-row align-center justify-center pt-2">
                          <h2 className="text-lg text-Lightblue font-semibold md:text-md text-center pr-4">
                            Coming soon
                          </h2>

                          <svg
                            className="arrow-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                          >
                            <g
                              fill="none"
                              stroke="#2175FF"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            >
                              <circle
                                className="arrow-icon--circle"
                                cx="16"
                                cy="16"
                                r="15.12"
                              ></circle>
                              <path
                                className="arrow-icon--arrow"
                                d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </a>
                    </section>
                  ) : (
                    <div>
                      <button className=" px-2 py-2 lg:px-0 lg:py-0 text-white bg-yellow-bg  font-semibold  2xl:mt-6 mt-2 rounded-md shadow-sm hover:shadow-md italic  shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-80 lg:w-36 md:32 2xl:h-12 xl:h-10 lg:h-8 2xl:text-2xl lg:text-md md:text-md ">
                        {data.cta.heading}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <InformationComponent></InformationComponent> */}
    </>
  );
}

export default GroupWebsiteComponent;
