import React from 'react';
import { RiFacebookCircleLine } from 'react-icons/ri';
const FaceBookSingleCompnent = (data) => {
  return (
    <>
      <div className=" bg-facebookblue lg:flex-row-reverse w-full h-full sm:m-2 m-0 ">
        <div className=" flex lg:flex-row-reverse flex-col relative ">
          <div
            // className="2xl:ml-42 xl:ml-28 md:ml-5  lg:ml-10 mb-10 mt-10 2xl:pt-12 pt-0 flex-1"
            className="2xl:ml-12 xl:ml-8 md:ml-5  lg:ml-4    mb-4 mt-20   2xl:pt-12 pt-0 mx-6 flex-1  max-w-screen-lg pr-0 "
          >
            <h1 className="text-white text-sm md:text-sm 2xl:text-xl font-heading   px-0 mb-4">
              {data.data.caption}
            </h1>

            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white  2xl:text-lg lg:text-base md:text-sm mt-2 px-0"
            >
              {data.data.desc}
            </p>
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white  2xl:text-md lg:text-base md:text-sm px-0 text-justify lg:mt-4 mt-4"
            >
              {data.data.time}
            </p>
            <p
              //  className="text-white  font-desc 2xl:text-xl text-descnew 2xl:w-11/12 w-full 2xl:pl-0 pl-6 2xl:pt-4 pt-2"
              className="text-white underline underline-offset-8 underline-black  2xl:text-md lg:text-base md:text-sm px-0 text-justify lg:mt-16 mt-8"
            >
              <a href={data.data.follow}>Follow</a>
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
            <div className="absolute text-5xl top-0 left-0  ">
              <RiFacebookCircleLine
                color="#fff"
                className="m-2"
              ></RiFacebookCircleLine>
            </div>
          </div>
          {/* <div className="  flex-1"> */}
          {/* <div
              className={
                'md:h-full h-mobileMainImageHeight w-full bg-cover bg-no-repeat bg-center'
              }
              style={{
                backgroundImage: `url(${imageurl})`,
              }}
            >
              <Gradients>
                <div className="flex flex-col justify-center ml-8">
                  <div className="text-white text-md sm:text-xl 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
                    News
                  </div>
                  <div className="text-white text-md sm:text-xl 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
                    Indiana Truck Show
                  </div>
                  <div className="text-white text-md sm:text-xl 2xl:text-xl font-heading lg:text-2xl  px-0 mb-4">
                    One click away
                  </div>
                </div>
              </Gradients>
            </div> */}

          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default FaceBookSingleCompnent;
