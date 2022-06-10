import React from 'react';
import styled from 'styled-components';
import { RiInstagramLine } from 'react-icons/ri';
const Gradients = styled.div`
  background: linear-gradient(9.15deg, #000000 -4.43%, rgba(0, 0, 0, 0) 93.09%);

  height: 100%;
  display: flex;

  object-fit: cover;

  z-index: 5;
`;
var imageurl =
  'https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/Instagramfeed-D.png';
const InstagramSingleComponent = (data) => {
  return (
    <>
      <div className="bg-yellow-bg  flex flex-col-reverse lg:flex-row-reverse w-fit h-full m-2 ">
        <div className=" flex lg:flex-row-reverse flex-col max-w-screen-2xl ">
          <div
            // className="2xl:ml-42 xl:ml-28 md:ml-5  lg:ml-10 mb-10 mt-10 2xl:pt-12 pt-0 flex-1"
            className="2xl:ml-12 xl:ml-8 md:ml-5       mt-20  2xl:pt-12 pt-0 mx-6 flex-1 mb-16 mr-32"
          >
            {/* <h1 className="text-white text-sm sm:text-lg 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
              This is an Instagram post caption
            </h1>
            <h1 className="text-white text-md sm:text-xl 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
              Indiana Truck Show
            </h1> */}
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white  2xl:text-2xl font-semibold lg:text-base md:text-sm px-0  "
            >
              {data.data.caption}
            </p>
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white  2xl:text-md lg:text-base md:text-sm px-0 "
            >
              {data.data.desc}
            </p>
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white  2xl:text-sm lg:text-base md:text-sm px-0  pt-12"
            >
              {data.data.time}
            </p>
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white  2xl:text-md lg:text-base md:text-sm px-0  underline-offset-4 mt-20"
            >
              <a href={data.data.follow}>Go to our Feed</a>
            </p>
            {/* <div>
              <button
                onClick={() => {
                  setCTA('800-977-0010');
                }}
                className="text-white bg-yellow-bg  font-semibold  mt-4  shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-32 lg:w-21 md:32 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md   2xl:p-0 p-4"
              >
                <p>{CTA}</p>
              </button>
            </div> */}
          </div>
        </div>
        <div className=" w-full">
          <div
            className={
              'md:h-full h-mobileMainImageHeight bg-cover bg-no-repeat bg-center'
            }
            style={{
              backgroundImage: `url(${data.data.img})`,
            }}
          >
            <Gradients>
              <div className="absolute text-5xl    ">
                <RiInstagramLine color="#fff" className="m-2"></RiInstagramLine>
              </div>
            </Gradients>
          </div>

          {/* <img
              src="https://raw.githubusercontent.com/kalfreight-in/kalgroup/master/src/assets/Images/blacknewtruck.png"
              alt="truck"
              className="w-full "
            /> */}
        </div>
      </div>
    </>
  );
};

export default InstagramSingleComponent;
