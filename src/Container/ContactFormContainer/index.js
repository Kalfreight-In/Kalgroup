import React from 'react';
import Contactform from '../../Components/ContactForm/';

// import { isMobile } from 'react-device-detect';

export const ContactFormContainer = () => {
  return (
    // <div id="maincontainer" className='w-70vh' >
    <div
      className=" flex md:flex lg:w-screen   lg:flex-row-reverse flex-col-reverse align-center justify-center lg:bg-whitenew "
      id="ContactSection"
    >
      <div className="lg:mt-16 lg:mb-16 h-fit flex content-center justify-center  flex-1 ">
        {/* <div>
          <h1 className="xl:text-5xl text-Heading font-semibold md:text-2xl link link-underline link-underline-black pb-8">
            Contact Formsdfd
          </h1>
          <p className="mt-2 text-Description font-desc text-desc ">
            we are ready to work on a project f any complexity
          </p>
        </div> */}

        {/* <Formcomp /> */}
        <Contactform></Contactform>
      </div>

      {/* <div className="flex ">
        <img
          src="https://raw.githubusercontent.com/kalfreight-in/kalgroup/master/src/assets/Images/Partz.png"
          width="300"
        />
      </div> */}

      <div className="flex-1 lg:block sm:hidden">
        <div
          className={
            // 'lg:h-5/6 md:h-mobileMainImageHeight xl:w-4/5 w-full 2 bg-contain lg:bg-cover  xl:contain bg-no-repeat bg-center xl:mt-16 mt-2 2xl:ml-36 xl:ml-12 '
            "lg:h-5/6 md:h-mobileMainImageHeight xl:w-4/5 w-full 2 bg-contain lg:bg-cover  xl:contain bg-no-repeat bg-center xl:mt-16 mt-2 2xl:ml-36 xl:ml-12 "
          }
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/contactimagenew.png)`,
            display: "flex",
          }}
        >
          {/* <div>
            <div className="text-white flex justify-start  xl:mt-12  ml-0 ">
              <div className="mt-8">
                <AiOutlineClockCircle className="md:h-8 h-6 md:w-8 w-6 " />
                <img
                  src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/navemaillogo.png"
                  alt=""
                  className="h-4 w-6 "
                />
              </div>
              <div className="block xl:ml-0 ">
                <div className="flex justify-start items-start text-left 2xl:-ml-6 font-medium">
                  Reach out to us
                </div>
                <div className="md:text-xl text-16px ml-2 xl:ml-4 text-xl md:font-bold font-semibold ">
                  info@kalgroup.com
                  (Monday to Friday) 
                </div>
              </div>
            </div>

            <div className="text-white flex xl:justify- start justify-start mt-4 md:ml-0 ml-0 ">
              <div className="mt-2">
                <a href="tel:8009770010" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/newvectorphonefooter.png"
                    alt=""
                    className="text-white"
                    width={20}
                  />
                </a>
              </div>
              <div className="ml-4">
                <a href="tel:8009770010" target="_blank">
                  {' '}
                  <div className="md:text-xl xl:text-2xl text-xl font-bold xl:font-semibold ml-2  ">
                    800-385-8006
                  </div>{' '}
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="flex-1 lg:hidden">
        <div
          className={
            // 'lg:h-5/6 md:h-mobileMainImageHeight xl:w-4/5 w-full 2 bg-contain lg:bg-cover  xl:contain bg-no-repeat bg-center xl:mt-16 mt-2 2xl:ml-36 xl:ml-12 '
            "lg:h-5/6 md:h-cropcontact xl:w-4/5 w-full 2 bg-contain lg:bg-cover  xl:contain bg-no-repeat bg-center xl:mt-16 mt-2 2xl:ml-36 xl:ml-12 "
          }
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/contactcropmain.png)`,
            display: "flex",
          }}
        >
         
        </div>
      </div>
    </div>
    // </div>
  );
};
