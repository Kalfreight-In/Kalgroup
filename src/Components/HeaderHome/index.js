import React from 'react';
import Video from './media/Bgvideo.mp4';
import {
  HeroContainer,
  HeroContent,
  HeroBg,
  HeroPromoContainer,
  VideoBg,
} from './HeroElements';
import { Link } from 'react-scroll';
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
        <div className=" lg:pl-48 lg:-mb-20 2xl:-mb-0  text-center items-center">
          {/* <button
          
            className="text-white  font-semibold mb-4  shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-20 lg:w-18 lg:8 2xl:h-8 h-8 2xl:text-md lg:text-md lg:text-md   2xl:p-0 p-4"
          >
            <p>{data.data.site.heading}</p>
          </button> */}

          <div className="2xl:text-5xl xl:text-4xl lg:text-3xl  text-3xl text-white font-bold lg:w-4/5 lg:text-left text-center">
            Transforming Trucking Dynamics
          </div>
          <div className="lg:flex flex-row 2xl:mt-12 mt-4 hidden">
            <div className="lg:border-l-2 border-x-amber-400 sm:block hidden"></div>

            <div className="lg:ml-8 ml-0">
              <div className="2xl:text-2xl text-white font-xl">
                Comprehensive, Consistent {isMobile ? <br /> : null} &
                Convenient
              </div>
              <div className="lg:mt-4 mt-16 text-lg flex lg:justify-start justify-center  lg:items-start items-center">
                <Link
                  to="AboutUs-Scroll"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  <button
                    // onClick={() => {
                    //   setCTA('800-977-0010');
                    // }}
                    className="text-white bg-yellow-bg  font-semibold   shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-52 lg:w-36 w-48 2xl:h-12 h-12 2xl:text-descnew lg:text-md lg:text-md   2xl:p-0 p-4 lg:text-left"
                  >
                    <p>Learn More</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-row lg:mt-16 mt-8  justify-center items-center lg:hidden">
            <div className="lg:border-l-2 border-x-amber-400 sm:block hidden"></div>

            <div className="lg:ml-8 ml-0">
              <div className="2xl:text-2xl text-lg text-white font-xl">
                Comprehensive, Consistent {isMobile ? <br /> : null} &
                Convenient
              </div>
              <div className="lg:mt-4 mt-16 flex lg:justify-start justify-center  lg:items-start items-center">
                <Link
                  to="AboutUs-Scroll"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  <button
                    // onClick={() => {
                    //   setCTA('800-977-0010');
                    // }}
                    className="text-white bg-yellow-bg  font-semibold   shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-52 lg:w-36 w-48 2xl:h-12 h-12 2xl:text-xl lg:text-md lg:text-sm  2xl:p-0 p-4 lg:text-left"
                  >
                    <p>Learn More</p>
                  </button>
                </Link>
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
