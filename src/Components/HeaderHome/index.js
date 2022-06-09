import React, { useState } from 'react';
import Video from './media/bgvideo2(1).mp4';
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
  width: 100%;
  height: 100%;
  transform: rotate(-180deg);
  object-fit: cover;
  position: absolute;
  z-index: 2;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Gradients></Gradients>
      <HeroBg className=" mt-0">
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
      </HeroBg>
      <HeroContent>
        <ContainerMain>
          <HeroP>Transforming Trucking Dynamics </HeroP>

          <Samosa>
            Offering New & Used Dry Vans, Trucks & Reefers
            {!isMobile ? <br></br> : null}
            OEM Parts, Tires, and Services
          </Samosa>
        </ContainerMain>

        {/* <PCENTER class="text-gray-600 p-8">
          Work with a trusted global third-party logistics provider that has
          been empowering business growth for over 15 years. Our centralized
          marketplace connects you to the people, technology, data and capacity
        </PCENTER> */}

        {/* <button className="btn block lg:hidden">
          <span className="btn-text">Contact us</span>
        </button> */}
      </HeroContent>
      <HeroPromoContainer></HeroPromoContainer>
    </HeroContainer>
  );
};
export default HeroSection;
