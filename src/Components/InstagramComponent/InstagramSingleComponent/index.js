import React from 'react';
import styled from 'styled-components';
import { RiInstagramLine } from 'react-icons/ri';
const Gradients = styled.div`
  background: linear-gradient(
    9.15deg,
    #0000007d -4.43%,
    rgba(0, 0, 0, 0) 93.09%
  );

  height: 100%;
  display: flex;

  object-fit: cover;

  z-index: 5;
`;
var imageurl =
  'https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/Instagramfeed-D.png';
const InstagramSingleComponent = ({ data }) => {
  return (
    <>
      <div className="  flex flex-col-reverse lg:flex-row-reverse w-fit h-full ">
        <div
          className=" flex flex-1  flex-col max-w-screen-2xl "
          style={{
            backgroundImage: `linear-gradient(
              90deg,
              hsl(13deg 77% 59%) 0%,
              hsl(9deg 76% 60%) 6%,
              hsl(6deg 75% 61%) 13%,
              hsl(3deg 72% 62%) 19%,
              hsl(359deg 70% 63%) 25%,
              hsl(356deg 68% 62%) 31%,
              hsl(353deg 66% 61%) 37%,
              hsl(350deg 63% 61%) 44%,
              hsl(347deg 60% 60%) 50%,
              hsl(347deg 62% 62%) 56%,
              hsl(346deg 64% 64%) 63%,
              hsl(345deg 66% 66%) 69%,
              hsl(344deg 68% 68%) 75%,
              hsl(343deg 71% 70%) 81%,
              hsl(342deg 74% 72%) 87%,
              hsl(341deg 77% 74%) 94%,
              hsl(340deg 80% 76%) 100%
            )`,
          }}
        >
          <div className="absolute text-5xl  xl:hidden ">
            <RiInstagramLine color="#fff" className="m-2"></RiInstagramLine>
          </div>
          <div
            // className="2xl:ml-42 xl:ml-28 md:ml-5  lg:ml-10 mb-10 mt-10 2xl:pt-12 pt-0 flex-1"
            className="2xl:ml-12 xl:ml-8 md:ml-5       mt-20  2xl:pt-12 pt-0 mx-6 flex-1 mb-16 mr-46"
          >
            {/* <h1 className="text-white text-sm sm:text-lg 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
              This is an Instagram post caption
            </h1>
            <h1 className="text-white text-md sm:text-xl 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
              Indiana Truck Show
            </h1> */}

            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white  2xl:text-xl font-bold lg:text-base md:text-sm px-0"
            >
              {data.message}
            </p>
            <div>
              <p
                //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
                className="text-white  2xl:text-lg lg:text-base md:text-sm mt-2 px-0 h-36"
              >
                {data.created_time}
              </p>
            </div>

            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white  2xl:text-sm lg:text-base md:text-sm px-0  pt-12"
            >
              {data.time}
            </p>
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white underline   2xl:text-md lg:text-base md:text-sm px-0  underline-offset-4 mt-10"
            >
              <a href={data.follow} target="_blank">
                Go to our Feed
              </a>
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
        <div className=" w-full hidden xl:block" style={{ flex: '0  3  45%' }}>
          <div
            className={
              'md:h-full  h-mobileMainImageHeight bg-contain bg-no-repeat bg-center'
            }
            style={{
              backgroundImage: `url(${data.full_picture})`,
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
