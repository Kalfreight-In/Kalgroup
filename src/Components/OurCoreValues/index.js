import React from 'react';
import { motion } from 'framer-motion';
// import businesstrailernew from "../../assets/Images/businesstrailernew.png";
// import businesstruck from "../../assets/Images/businesstruck.png";
// import businesstrailernew from "../../assets/Images/businesstrailernew";
import { CoreValuedata } from '../../data';
import Accordion from '../Accordion';
import { useSpring, animated } from 'react-spring';
import { useHover } from '../../Hooks/Hover';
import styled from 'styled-components';
var mydata = CoreValuedata[0];

export default function OurCoreValues() {
  const [hoverRef, isHovered] = useHover();
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
      <div className="bg-businessbackground">
        <div className="lg:p-12 p-2 drop-shadow-2xl">
          <div className="flex justify-center items-center font-semibold">
            <h1 className="text-5xl font-bold link link-underline link-underline-black text-Heading mb-6 pb-2">
              {mydata.heading}
            </h1>
          </div>
          <div className="">
            {mydata.thebox.map((data, index) => (
              <div className="flex flex-row">
                <div className="flex-1 flex-col">
                  <div
                    className={' bg-cover bg-no-repeat bg-center'}
                    style={{
                      backgroundImage: `url(${data.Bimg})`,
                      flex: '0  3  40%',
                    }}
                  ></div>
                  <div className="flex-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
