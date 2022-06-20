import React from 'react';
import Contactformnew from '../Contnewformm';



export const ContactFormContainernew = () => {
  return (
    // <div id="maincontainer" className='w-70vh' >
    <div id='ContactSection'>
      <div className="flex md:flex-row flex-col-reverse">
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
     <Contactformnew></Contactformnew>
        </div>

        {/* <div className="flex ">
        <img
          src="https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/Partz.png"  
          width="300"
        />
      </div> */}
        <div className="flex-1 ">
          <div className="md:h-full h-mobileMainImageHeight w-full bg-cover bg-no-repeat bg-center contactimg">
            <h4 className="text-Heading text-3xl font-bold  flex justify-center items-center md:hidden pt-20">
              Contact Us
            </h4>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
