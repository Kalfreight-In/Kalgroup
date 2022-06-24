import React, { useEffect, useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { RiFacebookCircleLine } from 'react-icons/ri';
// import {SiInstagram} from 'react-icons/si';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { Link as Slink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { IoLogoFacebook } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
export default function Footer() {
  const [Hinventery, setHinventery] = useState(false);
  const [H_WA, setH_WA] = useState(false);
  const [email, setEmail] = useState('');
  const [Hquicklinks, setHquicklinks] = useState(false);
  const [Hcontactus, setHcontactus] = useState(false);

  return (
    <>
      <div
        className="bg-footerbackground md:bg-cover bg-contain "
        style={{
          backgroundImage:
            'url(' +
            'https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/Map/map-bg.png' +
            ')',
          backgroundBlendMode: 'difference',
          backgroundPosition: 'center',
          // backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: 'full',
        }}
      >
        <div className="p-8  md:p-0 xl:block flex justify-center ">
          <img
            src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/kalGfooterlogo.png"
            alt="logo"
            className="2xl:h-28 xl:h-24  h-20 xl:hidden flex md:ml-0 xl:ml-36 mt-4"
          />
        </div>

        <div
          className="flex md:flex-row flex-col-reverse 2xl:pb-8 xl:pt-8 md:pt-4 md:flex md:justify-between md:bg-cover bg-contain"
          // style={{
          //   backgroundImage:
          //     'url(' +
          //     'https://raw.githubusercontent.com/Kalfreight-In/Kalgroups/main/src/assets/Map/map-bg.png' +
          //     ')',

          //   backgroundPosition: 'center',
          //   // backgroundSize: 'cover',
          //   backgroundRepeat: 'no-repeat',
          //   width: 'full',
          // }}
        >
          {/* <div className=" justify-center items-center pb-4  flex md:hidden ">
            <div id="allicons" className="flex  ">
              <RiFacebookCircleLine
                onClick={() =>
                  window.open(
                    'https://www.facebook.com/Kalgroups/',
                    '_blank'
                  )
                }
                className="text-black  h-1.8rem w-1.8rem mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
              />
              <AiOutlineInstagram
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/Kalgroup/',
                    '_blank'
                  )
                }
                className="text-black h-1.8rem w-1.8rem mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
              />
              <TiSocialLinkedinCircular
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/company/Kalgroup',
                    '_blank'
                  )
                }
                className="text-black   h-linkdenheight w-8 mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
              />
            </div>
          </div> */}
          <div className=" ">
            <div className="xl:flex xl:flex-wrap xl:-mx-4 pt-2 xl:pb-2 w-screen">
              <div className="footer-info xl:w-3/12 xl:px-4 xl:block hidden items- start justify- start">
                <div className="xl:ml-16 w-max justify- start ml-4 xl:mt-0">
                  <div>
                    <img
                      src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/kalGfooterlogo.png"
                      alt="logo"
                      className="2xl:h-28 xl:h-24  h-20 md:block hidden"
                      to="mailto:umarkhurshid3@gmail.com"
                    />
                  </div>

                  <div className="text-black flex justify-start  xl:mt-12  ml-0 ">
                    <div className="mt-8">
                      {/* <AiOutlineClockCircle className="md:h-8 h-6 md:w-8 w-6 " /> */}

                      <a href="tel:8003858006" target="_blank">
                        <img
                          src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/navemaillogo.png"
                          alt=""
                          className="h-4 w-6 "
                        />
                      </a>
                    </div>
                    <div className="block xl:ml-0 ">
                      <div className="flex justify-start  items-start  text-left 2xl:-ml-6 font-medium">
                        Reach out to us
                      </div>

                      <div className="md:text-xl text-16px ml-2 xl:ml-4 text-xl md:font-bold font-semibold cursor-pointer">
                        info@kalgroup.com
                        {/* (Monday to Friday)  */}
                      </div>
                    </div>
                  </div>

                  <div className="text-black flex xl:justify- start justify-start mt-4 md:ml-0 ml-0 ">
                    <div className="mt-2">
                      <a href="tel:8009770010" target="_blank" rel="noreferrer">
                        <img
                          src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/newvectorphonefooter.png"
                          alt=""
                          className="text-black"
                          width={20}
                        />
                      </a>
                    </div>
                    <div className="ml-4">
                      <a href="tel:8009770010" target="_blank">
                        {' '}
                        <div className="md:text-xl xl:text-xl text-xl  xl:font-bold font-semibold ml-2  ">
                          800-385-8006
                        </div>{' '}
                      </a>
                    </div>
                  </div>

                  <div className="text-black flex mb-8 xl:mb-2  pt-5">
                    <div className=" ml-0">
                      <div className="w-full  md:ml-0  ml:-0 ">
                        English, ਪੰਜਾਬੀ, Español, हिन्दी, Français
                      </div>
                    </div>
                  </div>

                  {/* <div
id="mainiconcontainer"
className=" justify-end mr-28 pt-4 pr-16 md:flex xl:hidden block "
>
<div id="allicons" className="flex justify-between  ">
  <RiFacebookCircleLine
    onClick={() =>
      window.open(
        'https://www.facebook.com/Kalgroups/',
        '_blank'
      )
    }
    className="text-black  h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
  />
  <AiOutlineInstagram
    onClick={() =>
      window.open(
        'https://www.instagram.com/Kalgroup/',
        '_blank'
      )
    }
    className="text-black h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
  />
  <TiSocialLinkedinCircular
    onClick={() =>
      window.open(
        'https://www.linkedin.com/company/Kalgroup',
        '_blank'
      )
    }
    className="text-black   h-8 w-8 mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
  />
</div>
</div> */}
                </div>
              </div>
              <div className="  xl:w-3/6 md:px-4 ">
                <div className="sm:flex">
                  <div className="sm:flex-1 mt-4 sm:mt-0 ">
                    <div
                      className="text-black cursor-pointer"
                      onClick={() => {
                        setHinventery(!Hinventery);
                        setH_WA(false);
                        setHquicklinks(false);
                        setHcontactus(false);
                      }}
                    >
                      <h1 className="2xl:text-footerheading text-desc md:font-bold font-normal xl:text-left text-center ">
                        Who we are?
                      </h1>
                    </div>

                    <div
                      className={`text-black  2xl:leading-8 leading-6 xl:block   ${
                        Hinventery ? '' : 'hidden'
                      }`}
                    >
                      <Link
                        to="#"
                        className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center  "
                      >
                        <span className="text-xl px-1"> </span>
                        Company Overview
                      </Link>
                      <Link
                        to="#"
                        className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center"
                      >
                        <span className="text-xl px-1"> </span>
                        Core Values
                      </Link>
                      <Link
                        to="#"
                        className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center "
                      >
                        <span className="text-xl px-1"> </span>
                        CSR
                      </Link>
                      {/* <Link
                        to="/newsevents"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center "
                      >
                        KAL Partz
                      </Link> */}
                    </div>
                  </div>

                  <div className="sm:flex-1 mt-4 sm:mt-0 ">
                    <div
                      className="text-black cursor-pointer"
                      onClick={() => {
                        setH_WA(!H_WA);
                        setHinventery(false);
                        setHquicklinks(false);
                        setHcontactus(false);
                      }}
                    >
                      <h1 className="2xl:text-footerheading text-desc md:font-bold font-normal xl:text-left text-center   ">
                        Business
                      </h1>
                    </div>

                    <div
                      className={`text-black 2xl:leading-8 leading-6 xl:block   ${
                        H_WA ? '' : 'hidden'
                      }`}
                    >
                      <Link
                        to="/newsevents"
                        className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center  "
                      >
                        <span className="text-xl px-1"> </span>
                        KAL Freight
                      </Link>
                      <Link
                        to="/newsevents"
                        className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center"
                      >
                        <span className="text-xl px-1"> </span>
                        KAL Trailers & Leasing
                      </Link>
                      <Link
                        to="/newsevents"
                        className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center "
                      >
                        <span className="text-xl px-1"> </span>
                        KVL Tires
                      </Link>
                      <Link
                        to="/newsevents"
                        className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center "
                      >
                        <span className="text-xl px-1"> </span>
                        KAL Partz
                      </Link>
                      <Link
                        to="/newsevents"
                        className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center "
                      >
                        <span className="text-xl px-1"> </span>
                        KALWAY
                      </Link>
                    </div>
                  </div>

                  <div className="sm:flex-1 mt-4 sm:mt-0 ">
                    <div
                      className="text-black cursor-pointer"
                      onClick={() => {
                        setHinventery(false);
                        setHquicklinks(!Hquicklinks);
                        setH_WA(false);
                        setHcontactus(false);
                      }}
                    >
                      <h1 className="2xl:text-footerheading text-desc md:font-bold font-normal xl:text-left  text-center ">
                        Inventory
                      </h1>
                    </div>

                    <div
                      className={`text-black  2xl:leading-8 leading-6 xl:block  ${
                        Hquicklinks ? '' : 'hidden'
                      }`}
                    >
                      <div>
                        {/* <Link
                    to="#aboutus "
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center"
                  >
                    About us
                  </Link> */}

                        {/* {window.location.pathname == "/" ? (
                          <Slink
                            className="block md:text-16px text-navsmall hover:text-yellow-shadowhover   mt-1   xl:text-left text-center cursor-pointer "
                            to="aboutus"
                            smooth={true}
                            duration={1000}
                            spy={true}
                            exact={true}
                            offset={-80}
                          >
                            About Us
                          </Slink>
                        ) : (
                          <a
                            className="block md:text-16px text-navsmall hover:text-yellow-shadowhover   mt-1   xl:text-left text-center cursor-pointer "
                            href="/#aboutus"
                            smooth={true}
                            duration={1000}
                            spy={true}
                            exact={true}
                            offset={-80}
                          >
                            About Us
                          </a>
                        )} */}
                      </div>
                      <div>
                        <Link
                          to="/newsevents"
                          className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1   xl:text-left text-center "
                        >
                          <span className="text-xl px-1"> </span>
                          Flatbed for sale
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/newsevents"
                          className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1   xl:text-left text-center "
                        >
                          <span className="text-xl px-1"> </span>
                          Used Dry van for sale
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/newsevents"
                          className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1   xl:text-left text-center  "
                        >
                          <span className="text-xl px-1"> </span>
                          Reefer Trailer for sale
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/newsevents"
                          className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1   xl:text-left text-center "
                        >
                          <span className="text-xl px-1"> </span>
                          New Trailers for sale
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/newsevents"
                          className="block md:text-sm text-navsmall hover:text-yellow-shadowhover   mt-1   xl:text-left text-center"
                        >
                          <span className="text-xl px-1"> </span>
                          Used Trucks for sale
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 block xl:block mt-4 sm:mt-0">
                    <div
                      className="text-black cursor-pointer"
                      onClick={() => {
                        setHinventery(false);
                        setHquicklinks(false);
                        setH_WA(false);
                        setHcontactus(!Hcontactus);
                      }}
                    >
                      <h1 className=" md:font-bold font-normal  xl:text-left text-center   2xl:text-footerheading text-desc md:ml-0 pl-0  ">
                        Quick Links
                      </h1>
                    </div>

                    <div
                      className={`text-black 2xl:leading-8 leading-6 xl:block   ${
                        Hcontactus ? '' : 'hidden'
                      }`}
                    >
                      <div className="flex flex-row space-x-2  align-center justify-center xl:justify-start  mt-1">
                        <div className="block md:text-sm text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8 ">
                          <span className="flex cursor-pointer">
                            <span className="text-xl px-1 md:mt-0 mt-QuickLinkarrow"></span>
                            <span className="mt-5px">Careers</span>
                          </span>
                        </div>
                        {/* <span> » </span> */}
                        <a
                          href="mailto:hr@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-sm text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8"
                        >
                          {/* <span className="flex">
                            <span className='text-xl px-1'> </span>
                            Newsroom
                          </span> */}
                        </a>
                      </div>
                      <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start  mt-1">
                        <div className="block md:text-sm text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8">
                          <span className="flex cursor-pointer">
                            <span className="text-xl px-1 md:mt-0 mt-QuickLinkarrow"></span>
                            <span className="mt-5px">Newsroom</span>
                          </span>
                        </div>
                        {/* <span> » </span> */}
                        {/* <a
                          href="mailto:tires@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover   xl:text-left text-center md:ml-0 ml-8"
                        >
                          <span className="flex">
                            <span className='text-xl px-1'> </span>
                            Financing Solutions
                          </span>
                        </a> */}
                      </div>
                      <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start   mt-1">
                        <div className="block md:text-sm text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8">
                          <span className="flex cursor-pointer">
                            <span className="text-xl px-1 md:mt-0 mt-QuickLinkarrow"></span>
                            <span className="mt-5px">Services</span>
                          </span>
                        </div>
                        {/* <span> » </span> */}
                        {/* <a
                          href="mailto:partz@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8"
                        >
                          info@kalfreight.com
                        </a> */}
                      </div>

                      <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start   mt-1">
                        <div className=" antialiased w-max block md:text-sm text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8">
                          <span className="flex cursor-pointer">
                            <span className="text-xl px-1 md:mt-0 mt-QuickLinkarrow"></span>
                            <span className="mt-5px">Financing Solutions</span>
                          </span>
                        </div>
                        {/* <span> » </span> */}
                        {/* <a
                          href="mailto:trailers@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8"
                        >
                          info@kaltrailers.com
                        </a> */}
                      </div>
                      <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start   mt-1">
                        <div className=" antialiased w-max block md:text-sm text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8">
                          <span className="flex cursor-pointer">
                            <span className="text-xl px-1 md:mt-0 mt-QuickLinkarrow"></span>
                            <span className="mt-5px">
                              24x7 Roadside Assistance
                            </span>
                          </span>
                        </div>
                        {/* <span> » </span> */}
                        {/* <a
                          href="mailto:info@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center cursor-pointer md:ml-0 ml-8"
                        >
                          info@kalgroup.com
                        </a> */}
                      </div>
                      {/* <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start">
                    <div>For all other enquires reach us at</div>
                    <span> »  </span>
                    <Link
                      to=""
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover   mt-1  xl:text-left text-center"
                    >
                      info@bigrigcanada.com{" "}
                    </Link>
                  </div> */}

                      {/* <div
                        id="mainiconcontainer"
                        className=" justify-end mr-28 pt-4 pr-16 hidden xl:flex "
                      >
                        <div id="allicons" className="flex justify-between  ">
                          <RiFacebookCircleLine
                            onClick={() =>
                              window.open(
                                'https://www.facebook.com/Kalgroups/',
                                '_blank'
                              )
                            }
                            className="text-black  h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                          />
                          <AiOutlineInstagram
                            onClick={() =>
                              window.open(
                                'https://www.instagram.com/Kalgroup/',
                                '_blank'
                              )
                            }
                            className="text-black h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                          />
                          <TiSocialLinkedinCircular
                            onClick={() =>
                              window.open(
                                'https://www.linkedin.com/company/Kalgroup',
                                '_blank'
                              )
                            }
                            className="text-black   h-8 w-8 mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="  xl:flex-1 flex-1 xl:w-2/12 hidden xl:flex md:justify-end justify-center mr-12  ">
                <div>
                  <div
                    className="text-black cursor-pointer"
                    onClick={() => {
                      setHinventery(false);
                      setHquicklinks(false);
                      setH_WA(false);
                      setHcontactus(!Hcontactus);
                    }}
                  >
                    <h1 className=" md:font-bold font-normal  xl:text-left text-center   2xl:text-footerheading text-desc md:ml-0 pl-0  ">
                      For latest news & updates
                    </h1>
                  </div>

                  <div
                    className={`text-black 2xl:leading-8 leading-6 xl:block ${
                      Hcontactus ? '' : 'hidden'
                    }`}
                  >
                    <div class="  mt-8">
                      <div class="w-full ">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="email"
                          placeholder="Email Address"
                          type="email"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-row space-x-2 align-center justify-center xl:justify-end">
                      <Link
                        to=""
                        className="block md:text-xl text-navsmall font-semibold hover:text-yellow-shadowhover   mt-1  xl:text-left text-center"
                      >
                        Subscribe Now
                      </Link>
                    </div>

                    <div
                      id="mainiconcontainer"
                      className=" justify-end  mt-20  "
                    >
                      <div id="allicons" className="flex justify-end">
                        <IoLogoFacebook
                          onClick={() =>
                            window.open(
                              'https://www.facebook.com/kalgroupusa',
                              '_blank'
                            )
                          }
                          className="text-black hover:text-footersocialnew  h-8 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                        />
                        <RiInstagramFill
                          onClick={() =>
                            window.open(
                              'https://www.instagram.com/kalgroupusa/',
                              '_blank'
                            )
                          }
                          className="text-black hover:text-instafooterhover  h-8 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                        />
                        <IoLogoLinkedin
                          onClick={() => window.open('', '_blank')}
                          className="text-black hover:text-linkdenfooterhover   h-8 w-8 mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-info xl:w-1/3 md:px-4 xl:hidden flex items-center justify-center mt-4">
                <div className="xl:ml-16 w-max justify-center items-center  flex flex-col ml-4 xl:mt-0">
                  <div>
                    <img
                      src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/kalGfooterlogo.png"
                      alt="logo"
                      className="2xl:h-28 xl:h-24  h-20 xl:block hidden"
                      to="mailto:umarkhurshid3@gmail.com"
                    />
                  </div>
                  <div className="md:flex block md:flex-row gap-x-8">
                    <div className="text-black flex justify-center  xl:mt-12 mt-4 ml-0 ">
                      <div className="mt-0">
                        {/* <img
                    src="https://raw.githubusercontent.com/kalfreight-in/Kalgroups/master/src/assets/Images/Vectoremail.svg"
                    alt=""
                    className="text-black mt-2 "
                  /> */}
                        <a href="mailto:info@kalgroup.com">
                          <MdEmail className="md:h-8 h-6 md:w-8 w-6  " />
                        </a>
                      </div>
                      <div className="block xl:ml-3 ml-2 text-center">
                        {/* <div className="block">Working hours</div> */}
                        <div className="md:text-xl text-lg font-bold xl:font-semibold text-center">
                          <a href="mailto:info@kalgroup.com">
                            info@kalgroup.com
                          </a>

                          {/* (Monday to Friday)  */}
                        </div>
                      </div>
                    </div>

                    <div className="text-black flex xl:justify-center justify-start mt-4 md:ml-0 ml- ">
                      <div className="mt-2">
                        <a
                          href="tel:8009770010"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/newvectorphonefooter.png"
                            alt=""
                            className="text-black h-4 w-4"
                            width={50}
                          />
                        </a>
                      </div>
                      <div className="ml-4">
                        {/* <div className="block">
                    Why speak to robots when
                    <br></br>
                    we have subject matter experts just a call away.
                  </div> */}
                        <a href="tel:8009770010" target="_blank">
                          {' '}
                          <div className="md:text-2xl text-lg font-bold xl:font-semibold  ">
                            800-385-8006
                          </div>{' '}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="text-black flex mb-8 xl:mb-2  pt-5">
                    <div className="xl:ml-4 ml-0">
                      <div className="w-full  md:ml-0 xl:ml-12 ml:-0 ">
                        English, ਪੰਜਾਬੀ, Español, हिन्दी, Français
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-black cursor-pointer"
                      onClick={() => {
                        setHinventery(false);
                        setHquicklinks(false);
                        setH_WA(false);
                        setHcontactus(!Hcontactus);
                      }}
                    >
                      <h1 className=" md:font-semibold   xl:text-left text-center text-Description   text-lg md:ml-0 pl-0  ">
                        For latest news & updates
                      </h1>
                    </div>

                    <div
                      className={`text-black 2xl:leading-8 leading-6 xl:block `}
                    >
                      <div class="  mt-1">
                        <div class="w-full ">
                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="email"
                            placeholder="Email Address"
                            type="email"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-row align-center justify-center xl:justify-end">
                        <Link
                          to=""
                          className="block md:text-xl text-navsmall font-normal hover:text-yellow-shadowhover  text-Description   text-center"
                        >
                          Subscribe Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    id="mainiconcontainer"
                    className=" justify-end pb-4 mt-4  "
                  >
                    <div id="allicons" className="flex justify-between  ">
                      <IoLogoFacebook
                        onClick={() =>
                          window.open(
                            'https://www.facebook.com/kalgroupusa',
                            '_blank'
                          )
                        }
                        className="text-black hover:text-footersocialnew  h-8 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                      />
                      <RiInstagramFill
                        onClick={() =>
                          window.open(
                            'https://www.instagram.com/kalgroupusa/',
                            '_blank'
                          )
                        }
                        className="text-black hover:text-instafooterhover  h-8 w-8 mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                      />
                      <IoLogoLinkedin
                        onClick={() => window.open('', '_blank')}
                        className="text-black hover:text-linkdenfooterhover   h-8 w-8 mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
                      />
                    </div>
                  </div>
                  {/* <div
                id="mainiconcontainer"
                className=" justify-end mr-28 pt-4 pr-16 md:flex xl:hidden block "
              >
                <div id="allicons" className="flex justify-between  ">
                  <RiFacebookCircleLine
                    onClick={() =>
                      window.open(
                        'https://www.facebook.com/Kalgroups/',
                        '_blank'
                      )
                    }
                    className="text-black  h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-facebook ease-in duration-300"
                  />
                  <AiOutlineInstagram
                    onClick={() =>
                      window.open(
                        'https://www.instagram.com/Kalgroup/',
                        '_blank'
                      )
                    }
                    className="text-black h-1.8rem w-1.8rem mx-4 cursor-pointer hover:drop-shadow-socialicons hover:text-instagram ease-in duration-300"
                  />
                  <TiSocialLinkedinCircular
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/company/Kalgroup',
                        '_blank'
                      )
                    }
                    className="text-black   h-8 w-8 mx-4  cursor-pointer hover:drop-shadow-socialicons hover:text-linkden ease-in duration-300 "
                  />
                </div>
              </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-1 flex-row items-center justify-center mb-0 xl:mb-2 mt-4 xl:mr-12">
            <div className="xl:flex-1  flex xl:justify-end xl:w-1/6 xl:ml-8 ml-0 ">
             
            </div>
          </div> */}
          {/* flex flex-auto xl:flex-row flex-col  mb-0 xl:mb-2 mt-6 md:ml-28 xl:ml-8 ml-0 xl:items-start items-center */}
        </div>

        {/* <div id="mainiconcontainer">
        <div id="allicons" className="flex justify-end mx-48 ">
        <RiFacebookCircleLine onClick={()=> window.open('https://www.facebook.com/kaxlroupusa','_blank')} className="text-black mx-2 cursor-pointer h-1.8rem w-1.8rem" />
        <LinkiOutlineInstagram onClick={()=> window.open('https://www.instagram.com/Kalgroup/', '_blank')} className='text-black  mx-2 cursor-pointer h-1.8rem w-1.8rem' />
        <TiSocialLinkedinCircular onClick={()=> window.open('https://www.linkedin.com/company/Kalgroup','_blank')} className="text-black mx-2 cursor-pointer h-8 w-8" />    
        </div> */}
        {/* </div>   */}
      </div>
    </>
  );
}
