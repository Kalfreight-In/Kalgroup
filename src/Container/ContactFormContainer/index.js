import React from 'react';
import Contactform from '../../Components/ContactForm/';

export const ContactFormContainer = () => {
  return (
    // <div id="maincontainer" className='w-70vh' >
    <div
      className=" flex md:flex lg:w-screen w-fit    lg:flex-row-reverse flex-col align-center justify-center bg-whitenew"
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
      <div className="flex-1 ">
        <div
          className={
            'md:h-5/6 h-mobileMainImageHeight w-4/6 bg-cover bg-no-repeat bg-center mt-16 ml-36'  
          }
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/kalcontactimage.png)`,  
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <img
          className="w-full"
          src="https://raw.githubusercontent.com/kalfreight-in/kalgroup/e6c3841952235a1866804c85e994f1d5c540c214/src/assets/Images/rednewtruck.svg" 
          alt=""
        /> */}
        </div>
      </div>
    </div>
    // </div>
  );
};
