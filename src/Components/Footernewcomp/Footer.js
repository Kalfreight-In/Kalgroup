import React from 'react';
import Navbar from '../../Components/Navbar';
import { AiOutlineClockCircle } from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <div className="bg-footerbackground"> 
        <div
          className="flex lg:flex-row flex-col 2xl:pb-8 xl:pt-8 lg:pt-4 lg:flex lg:justify-between"
          style={{
            backgroundImage:
              'url(' +
              'https://raw.githubusercontent.com/Kalfreight-In/kalgroup/main/src/assets/Map/map-bg.png' +
              ')',

            backgroundPosition: 'center',
            backgroundSize: 'cover',

            backgroundRepeat: 'no-repeat',
            width: 'full',
          }}
        >
          <div
            className="flex-1 w-7/12  lg:block "
            // className="flex-1 lg:block hidden"
          >
            <div className="lg:ml-16 w-max ml-4 lg:mt-0 ">
              <div>
                <img
                  src="https://raw.githubusercontent.com/kalfreight-in/kalgroup/master/src/assets/Images/bigrigfooterlogo.png"
                  alt="logo"
                  className="2xl:h-28 lg:h-24  h-20"
                  href="mailto:umarkhurshid3@gmail.com"
                />
              </div>
              <div className="text-black flex  lg:mt-12 mt-4">
                <div className="mt-3">
                  {/* <img
                    src="https://raw.githubusercontent.com/kalfreight-in/kalgroup/master/src/assets/Images/Vectoremail.svg"
                    alt=""
                    className="text-black mt-2 "
                  /> */}
                  <AiOutlineClockCircle className="h-8 w-8 " />
                </div>
                <div className="block ml-3">
                  {/* <div className="block">Working hours</div> */}
                  <div className="text-xl font-bold">
                    8 AM to 5 PM <br />
                    (Monday to Friday) 
                  </div>
                </div>
              </div>

              <div className="text-black flex mt-4">
                <div className="mt-2">
                  <img
                    src="https://raw.githubusercontent.com/kalfreight-in/kalgroup/master/src/assets/Images/Vectorphone.svg"
                    alt=""
                    className="text-black"
                    width={20}
                  />
                </div>
                <div className="ml-4">
                  {/* <div className="block">
                    Why speak to robots when
                    <br></br>
                    we have subject matter experts just a call away.
                  </div> */}
                  <div className="text-xl font-bold">800-977-0010</div>
                </div>
              </div>

              <div className="text-black flex mb-8 lg:mb-2  pt-5">
                <div className="ml-4">
                  <div>English, ਪੰਜਾਬੀ, Español, Français, हिन्दी</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-auto flex-row mb-8 lg:mb-2 mt-6 md:ml-28 ml-8 ">
            <div className="lg:flex-1  flex-1  lg:w-2/12 ">
              <div className="text-black ">
                <h1 className="2xl:text-footerheading text-desc font-bold w-4/5 ">
                  Inventory
                </h1>
              </div>
              <br />

              <div className="text-black 2xl:leading-8 leading-6 ">
                <a
                  href=""
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                >
                  Flatbed for sale
                </a>
                <a
                  href=""
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                >
                  Used Trucks for sale
                </a>
                <a
                  href=""
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                >
                  New Trailers for sale
                </a>
                <a
                  href=""
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                >
                  Used Dry van for sale
                </a>
                <a
                  href=""
                  className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                >
                  Reefer trailer for sale
                </a>
              </div>
            </div>

            <div className="lg:flex-1 flex-1 lg:w-2/12 ">
              <div className="text-black">
                <h1 className="2xl:text-footerheading text-desc font-bold  ">
                  Quick Links
                </h1>
              </div>
              <br />

              <div className="text-black  2xl:leading-8 leading-6">
                <div>
                  <a
                    href=""
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                  >
                    About us
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                  >
                    News & Events
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                  >
                    Parts Inventory
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                  >
                    Financing Options
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                  >
                    24*7 Roadside Assistance
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-row  mb-8 lg:mb-2 mt-6 lg:mr-12">
            <div className="lg:flex-1 flex-1 flex lg:justify-end lg:w-1/6 ml-8 ">
              <div>
                <div className="text-black">
                  <h1 className=" font-bold  2xl:text-footerheading text-desc">
                    Contact Us
                  </h1>
                </div>
                <br />

                <div className="text-black 2xl:leading-8 leading-6 ">
                  <div className="flex flex-row space-x-2">
                    <div>Careers</div>
                    <span> » </span>
                    <a
                      href=""
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                    >
                      hr@bigrigcanada.com{' '}
                    </a>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <div>Tires</div>
                    <span> » </span>
                    <a
                      href=""
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                    >
                      tires@bigrigcanada.com
                    </a>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <div> Partz </div>
                    <span> » </span>
                    <a
                      href=""
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                    >
                      partz@bigrigcanada.com{' '}
                    </a>
                  </div>

                  <div className="flex flex-row space-x-2">
                    <div className="antialiased w-max">Trailers & Leasing</div>
                    <span> » </span>
                    <a
                      href=""
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                    >
                      trailers@bigrigcanada.com
                    </a>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <div className="w-max">For any other inquiry</div>
                    <span> » </span>
                    <a
                      href=""
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                    >
                      info@bigrigcanada.com
                    </a>
                  </div>
                  {/* <div className="flex flex-row space-x-2">
                    <div>For all other enquires reach us at</div>
                    <span> »  </span>
                    <a
                      href=""
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover"
                    >
                      info@bigrigcanada.com{" "}
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="secondmain">
        <Navbar /> 
      </div> */}
    </>
  );
}
