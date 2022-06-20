import React, { useState } from 'react';
import Video from './media/bgvideo.mp4';
import { isMobile } from 'react-device-detect';
import {
  HeroContainer,
  HeroP,
  HeroContent,
  HeroBg,
  HeroPromoContainer,
  VideoBg,
  ContainerMain,
  Samosa,
} from './HeroElements';

import styled from 'styled-components';

const Gradients = styled.div`
  background-image: linear-gradient( to right, #0519374f, #004d7a82)
  width: 100%;
  height: 100%;
  transform: rotate(-180deg);
  object-fit: cover;
  position: absolute;
  z-index: 2;
`;

const HeroSection = (data) => {
  // console.log(data.data.id);
  return (
    <HeroContainer bgImage="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/SliderSection/kalSlider-1.png">
      <Gradients></Gradients>
      <HeroBg className=" mt-0">
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <div className=" pl-48">
          {/* <button
          
            className="text-white  font-semibold mb-4  shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-20 lg:w-18 md:8 2xl:h-8 h-8 2xl:text-md lg:text-md md:text-md   2xl:p-0 p-4"
          >
            <p>{data.data.site.heading}</p>
          </button> */}

          <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-1xl text-white font-bold w-4/5">
            Transforming Trucking Dynamics
          </div>
          <div className="flex flex-row mt-16">
            <div className="border-l-2 border-x-amber-400"></div>
            <div className="ml-8">
              <div className="2xl:text-1xl text-white font-medium w-4/5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique arcu a nisi, semper. Ut cras odio ac sem ac.
              </div>
              <div className="mt-8">
                <button
                  // onClick={() => {
                  //   setCTA('800-977-0010');
                  // }}
                  className="text-white bg-yellow-bg  font-semibold   shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-52 lg:w-36 md:32 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md   2xl:p-0 p-4"
                >
                  <p>Learn More</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <PCENTER class="text-gray-600 p-8">
          Work with a trusted global third-party logistics provider that has
          been empowering business growth for over 15 years. Our centralized
          marketplace connects you to the people, technology, data and capacity
        </PCENTER> */}

        {/* <button className="btn block lg:hidden">
          <span className="btn-text">Contact us</span>
        </button> */}
      </HeroContent>
      <div></div>
      <HeroPromoContainer></HeroPromoContainer>
    </HeroContainer>
  );
};
export default HeroSection;
