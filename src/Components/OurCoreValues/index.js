import React from 'react';
import { motion } from 'framer-motion';
// import businesstrailernew from "../../assets/Images/businesstrailernew.png";
// import businesstruck from "../../assets/Images/businesstruck.png";
// import businesstrailernew from "../../assets/Images/businesstrailernew";
import { CoreValuedata } from '../../data';
import Accordion from '../Accordion';
import { useSpring, animated } from 'react-spring';
import { useHover } from '../../Hooks/Hover';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper';
import styled from 'styled-components';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
var mydata = CoreValuedata[0];

export default function OurCoreValues() {
  const [hoverRef, isHovered] = useHover();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const Quality = styled.div`
    background: ${(props) => `url(${props.background}) no-repeat top center`};
    flex: 1;
    margin: 0.3rem;
    height: 100%;
    background-position: left;
    background-size: cover;
    background-repeat: none;
    transition: flex 0.8s ease;

    &:hover {
      background: ${(props) => `url(${props.hoverBackground}) `};
    }
  `;
  const titleAnimation = useSpring({
    from: {
      transform: 'translateY(-30px)',
    },
    to: [{ transform: 'translateY(15px)' }],
    config: { mass: 3, tension: 500, friction: 25 },
  });

  return (
    <>
      {/* <div class="social"></div> */}
      <div className="bg-businessbackground" id='corevaluemain'>
        <div className="lg:p-8 p-2 ">
          <div className="flex justify-center items-center font-semibold">
            <h1 className="text-3xl font-bold link link-underline link-underline-black text-Description mb-6 pb-2">
              {mydata.heading}
            </h1>
          </div>
          <div className="">
            {isDesktop ? (
              <div className="flex flex-row">
                {mydata.thebox.map((data, index) => (
                  <div className="flex-1  flex-col hover:scale-105 hover:z-10 drop-shadow-md hover:drop-shadow-2xl transition-all delay-100 ease-in duration-300 bg-whitenew m-1">
                    <div
                      className={
                        'flex-1 h-80  transition-all delay-75 bg-cover bg-no-repeat bg-center '
                      }
                      style={{
                        backgroundImage: `url(${data.Bimg})`,
                        flex: '0  3  40%',
                      }}
                    ></div>
                    <div className="flex-1">
                      <div className="p-2">
                        <div className="text-Description text-center  2xl:text-2xl font-bold lg:text-base md:text-sm px-0">
                          {data.heading}
                        </div>
                        <div className="text-Description text-left  2xl:text-lg lg:text-base md:text-sm px-0  pt-4 mx-8 mb-8">
                          {data.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Swiper
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {mydata.thebox.map((data, index) => (
                  <SwiperSlide>
                    <div className="flex-1  flex-col hover:scale-105 hover:z-10 drop-shadow-md hover:drop-shadow-2xl transition-all delay-100 ease-in duration-300 bg-white m-1">
                      <div
                        className={
                          'flex-1 h-80  transition-all delay-75 bg-cover bg-no-repeat bg-center '
                        }
                        style={{
                          backgroundImage: `url(${data.Bimg})`,
                          flex: '0  3  40%',
                        }}
                      ></div>
                      <div className="flex-1">
                        <div className="p-2 ">
                          <div className="text-Description text-center  2xl:text-3xl font-bold lg:text-base text-lg px-0">
                            {data.heading}
                          </div>
                          <div className="text-Description  text-left   lg:text-base md:text-sm px-0 pt-2 h-26 mx-8 mb-8">
                            {data.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
