import React from 'react';
import Video from './media/Bgvideo.mp4';
import {
  HeroContainer,
  HeroContent,
  HeroBg,
  HeroPromoContainer,
  VideoBg,
} from './HeroElements';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const Gradients = styled.div`
  background-image: linear-gradient(
    230.87deg,
    rgba(0, 0, 0, 0.7) 10.28%,
    rgba(0, 0, 0, 0) 91.36%
  );
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
    <HeroContainer>
      <Gradients></Gradients>
      <HeroBg className=" mt-0 ">
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <div className=" md:pl-48  text-center items-center">
          {/* <button
          
            className="text-white  font-semibold mb-4  shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-20 lg:w-18 md:8 2xl:h-8 h-8 2xl:text-md lg:text-md md:text-md   2xl:p-0 p-4"
          >
            <p>{data.data.site.heading}</p>
          </button> */}

          <div className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-3xl text-white font-bold md:w-4/5 md:text-left text-center">
            Transforming Trucking Dynamics
          </div>
          <div className="flex flex-row md:mt-16 mt-8  justify-center items-center">
            <div className="md:border-l-2 border-x-amber-400 sm:block hidden"></div>

            <div className="lg:ml-8 ml-0">
              <div className="2xl:text-1xl text-white font-medium">
                Comprehensive, Consistent {isMobile ? <br /> : null} &
                Convenient
              </div>
              <div className="md:mt-4 mt-16 flex md:justify-start justify-center  md:items-start items-center">
                <button
                  // onClick={() => {
                  //   setCTA('800-977-0010');
                  // }}
                  className="text-white bg-yellow-bg  font-semibold   shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-52 lg:w-36 w-48 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md   2xl:p-0 p-4 md:text-left"
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
