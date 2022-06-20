import React, { useEffect, useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { RiFacebookCircleLine } from 'react-icons/ri';
// import {SiInstagram} from 'react-icons/si';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { Link as Slink } from 'react-scroll';
import { Link } from 'react-router-dom';
export default function Footer() {
  const [Hinventery, setHinventery] = useState(false);
  const [Hquicklinks, setHquicklinks] = useState(false);
  const [Hcontactus, setHcontactus] = useState(false);

  return (
    <>
      <div
        className="bg-footerbackground md:bg-cover bg-contain"
        style={{
          backgroundImage:
            'url(' +
            'https://raw.githubusercontent.com/Kalfreight-In/Kalgroups/main/src/assets/Map/map-bg.png' +
            ')',

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
            <div className="xl:flex xl:flex-wrap xl:-mx-4 pt-6 xl:pb-12 w-screen">
              <div className="footer-info xl:w-1/3 xl:px-4 xl:block hidden items- start justify- start">
                <div className="xl:ml-16 w-max justify- start ml-4 xl:mt-0">
                  <div>
                    <img
                      src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/kalGfooterlogo.png"
                      alt="logo"
                      className="2xl:h-28 xl:h-24  h-20 md:block hidden"
                      to="mailto:umarkhurshid3@gmail.com"
                    />
                  </div>

                  <div className="text-black flex justify-start  xl:mt-12 mt-4 ml-0 ">
                    <div className="mt-3">
                      <AiOutlineClockCircle className="md:h-8 h-6 md:w-8 w-6 " />
                    </div>
                    <div className="block xl:ml-3 ml-0">
                      {/* <div className="block">Working hours</div> */}
                      <div className="md:text-xl text-16px ml-2 xl:ml-0 text-xl md:font-bold font-semibold ">
                        8 AM to 5 PM <br />
                        (Monday to Friday) 
                      </div>
                    </div>
                  </div>

                  <div className="text-black flex xl:justify- start justify-start mt-4 md:ml-0 ml-0 ">
                    <div className="mt-2">
                      <a href="tel:8009770010" target="_blank" rel="noreferrer">
                        <img
                          src="https://raw.githubusercontent.com/kalfreight-in/Kalgroups/master/src/assets/Images/Vectorphone.svg"
                          alt=""
                          className="text-black"
                          width={20}
                        />
                      </a>
                    </div>
                    <div className="ml-4">
                      <a href="tel:8009770010" target="_blank">
                        {' '}
                        <div className="md:text-xl xl:text-2xl text-xl font-bold xl:font-semibold ml-2  ">
                          800-977-0010
                        </div>{' '}
                      </a>
                    </div>
                  </div>

                  <div className="text-black flex mb-8 xl:mb-2  pt-5">
                    <div className=" ml-0">
                      <div className="w-full  md:ml-0  ml:-0 ">
                        English, ਪੰਜਾਬੀ, Español, हिन्दी,
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
              <div className="  xl:w-1/3 md:px-4 ">
                <div className="sm:flex">
                  <div className="sm:flex-1">
                    <div
                      className="text-black cursor-pointer"
                      onClick={() => {
                        setHinventery(!Hinventery);
                        setHquicklinks(false);
                        setHcontactus(false);
                      }}
                    >
                      <h1 className="2xl:text-footerheading text-desc md:font-bold font-normal xl:text-left text-center   ">
                        Inventory
                      </h1>
                    </div>

                    <div
                      className={`text-black 2xl:leading-8 leading-6 xl:block   ${
                        Hinventery ? '' : 'hidden'
                      }`}
                    >
                      <Link
                        to="/newsevents"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  xl:text-left text-center  "
                      >
                        Flatbed for sale
                      </Link>
                      <Link
                        to="/newsevents"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  xl:text-left text-center"
                      >
                        Used Trucks for sale
                      </Link>
                      <Link
                        to="/newsevents"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  xl:text-left text-center "
                      >
                        New Trailers for sale
                      </Link>
                      <Link
                        to="/newsevents"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  xl:text-left text-center "
                      >
                        Used Dry van for sale
                      </Link>
                      <Link
                        to="/newsevents"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  xl:text-left text-center "
                      >
                        Reefer trailers for sale
                      </Link>
                    </div>
                  </div>

                  <div className="sm:flex-1 mt-4 sm:mt-0">
                    <div
                      className="text-black cursor-pointer"
                      onClick={() => {
                        setHinventery(false);
                        setHquicklinks(!Hquicklinks);
                        setHcontactus(false);
                      }}
                    >
                      <h1 className="2xl:text-footerheading text-desc md:font-bold font-normal xl:text-left  text-center ">
                        Quick Links
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
                    className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  xl:text-left text-center"
                  >
                    About us
                  </Link> */}

                        {window.location.pathname == '/' ? (
                          <Slink
                            className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3   xl:text-left text-center cursor-pointer "
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
                            className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3   xl:text-left text-center cursor-pointer "
                            href="/#aboutus"
                            smooth={true}
                            duration={1000}
                            spy={true}
                            exact={true}
                            offset={-80}
                          >
                            About Us
                          </a>
                        )}
                      </div>
                      <div>
                        <Link
                          to="/newsevents"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3   xl:text-left text-center "
                        >
                          News & Events
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/newsevents"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3   xl:text-left text-center  "
                        >
                          Parts Inventory
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/newsevents"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3   xl:text-left text-center "
                        >
                          Financing Options
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/newsevents"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3   xl:text-left text-center"
                        >
                          24X7 Roadside Assistance
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 block xl:hidden mt-4 sm:mt-0">
                    <div
                      className="text-black cursor-pointer"
                      onClick={() => {
                        setHinventery(false);
                        setHquicklinks(false);

                        setHcontactus(!Hcontactus);
                      }}
                    >
                      <h1 className=" md:font-bold font-normal  xl:text-left text-center   2xl:text-footerheading text-desc md:ml-0 pl-0  ">
                        Contact Us
                      </h1>
                    </div>

                    <div
                      className={`text-black 2xl:leading-8 leading-6 xl:block ${
                        Hcontactus ? '' : 'hidden'
                      }`}
                    >
                      <div className="flex flex-row space-x-2  align-center justify-center xl:justify-start mt-3">
                        <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8 ">
                          Careers
                        </div>
                        <span> » </span>
                        <a
                          href="mailto:hr@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8"
                        >
                          hr@bigrigcanada.com{' '}
                        </a>
                      </div>
                      <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start mt-3">
                        <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8">
                          Tires
                        </div>
                        <span> » </span>
                        <a
                          href="mailto:tires@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover   xl:text-left text-center md:ml-0 ml-8"
                        >
                          tires@bigrigcanada.com
                        </a>
                      </div>
                      <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start  mt-3">
                        <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8">
                          {' '}
                          Partz{' '}
                        </div>
                        <span> » </span>
                        <a
                          href="mailto:partz@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8"
                        >
                          partz@bigrigcanada.com{' '}
                        </a>
                      </div>

                      <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start  mt-3">
                        <div className=" antialiased w-max block md:text-16px text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8">
                          Trailers & Leasing
                        </div>
                        <span> » </span>
                        <a
                          href="mailto:trailers@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8"
                        >
                          trailers@bigrigcanada.com
                        </a>
                      </div>
                      <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start  mt-3">
                        <div className=" antialiased w-max block md:text-16px text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8">
                          For any other inquiry
                        </div>
                        <span> » </span>
                        <a
                          href="mailto:info@bigrigcanada.com"
                          target="_blank"
                          rel="noreferrer"
                          className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center cursor-pointer md:ml-0 ml-8"
                        >
                          info@bigrigcanada.com
                        </a>
                      </div>
                      {/* <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start">
                    <div>For all other enquires reach us at</div>
                    <span> »  </span>
                    <Link
                      to=""
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  xl:text-left text-center"
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
              <div className="  xl:flex-1 flex-1 xl:w-2/12 hidden xl:flex md:justify-end justify-center  ">
                <div>
                  <div
                    className="text-black cursor-pointer"
                    onClick={() => {
                      setHinventery(false);
                      setHquicklinks(false);

                      setHcontactus(!Hcontactus);
                    }}
                  >
                    <h1 className=" md:font-bold font-normal  xl:text-left text-center   2xl:text-footerheading text-desc md:ml-0 pl-0  ">
                      Contact Us
                    </h1>
                  </div>

                  <div
                    className={`text-black 2xl:leading-8 leading-6 md:block ${
                      Hcontactus ? '' : 'hidden'
                    }`}
                  >
                    <div className="flex flex-row space-x-2  align-center justify-center xl:justify-start mt-3">
                      <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8 ">
                        Careers
                      </div>
                      <span> » </span>
                      <a
                        href="mailto:hr@bigrigcanada.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8"
                      >
                        hr@bigrigcanada.com{' '}
                      </a>
                    </div>
                    <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start mt-3">
                      <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8">
                        Tires
                      </div>
                      <span> » </span>
                      <a
                        href="mailto:tires@bigrigcanada.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover   xl:text-left text-center md:ml-0 ml-8"
                      >
                        tires@bigrigcanada.com
                      </a>
                    </div>
                    <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start  mt-3">
                      <div className="block md:text-16px text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8">
                        {' '}
                        Partz{' '}
                      </div>
                      <span> » </span>
                      <a
                        href="mailto:partz@bigrigcanada.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center md:ml-0 ml-8"
                      >
                        partz@bigrigcanada.com{' '}
                      </a>
                    </div>

                    <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start  mt-3">
                      <div className=" antialiased w-max block md:text-16px text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8">
                        Trailers & Leasing
                      </div>
                      <span> » </span>
                      <a
                        href="mailto:trailers@bigrigcanada.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8"
                      >
                        trailers@bigrigcanada.com
                      </a>
                    </div>
                    <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start  mt-3">
                      <div className=" antialiased w-max block md:text-16px text-navsmall hover:text-yellow-shadowhover    xl:text-left text-center md:ml-0 ml-8">
                        For any other inquiry
                      </div>
                      <span> » </span>
                      <a
                        href="mailto:info@bigrigcanada.com"
                        target="_blank"
                        rel="noreferrer"
                        className="block md:text-16px text-navsmall hover:text-yellow-shadowhover     xl:text-left text-center cursor-pointer md:ml-0 ml-8"
                      >
                        info@bigrigcanada.com
                      </a>
                    </div>
                    {/* <div className="flex flex-row space-x-2 align-center justify-center xl:justify-start">
                    <div>For all other enquires reach us at</div>
                    <span> »  </span>
                    <Link
                      to=""
                      className="block md:text-16px text-navsmall hover:text-yellow-shadowhover  mt-3  xl:text-left text-center"
                    >
                      info@bigrigcanada.com{" "}
                    </Link>
                  </div> */}

                    <div
                      id="mainiconcontainer"
                      className=" justify-end mr-28 pt-4 pr-16  "
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
                      <div className="mt-3">
                        {/* <img
                    src="https://raw.githubusercontent.com/kalfreight-in/Kalgroups/master/src/assets/Images/Vectoremail.svg"
                    alt=""
                    className="text-black mt-2 "
                  /> */}
                        <AiOutlineClockCircle className="md:h-8 h-6 md:w-8 w-6 " />
                      </div>
                      <div className="block xl:ml-3 ml-0">
                        {/* <div className="block">Working hours</div> */}
                        <div className="md:text-xl text-16px ml-2 xl:ml-0 text-xl md:font-bold font-semibold ">
                          8 AM to 5 PM <br />
                          (Monday to Friday) 
                        </div>
                      </div>
                    </div>

                    <div className="text-black flex xl:justify-center justify-start mt-4 md:ml-0 ml-0 ">
                      <div className="mt-2">
                        <a
                          href="tel:8009770010"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="https://raw.githubusercontent.com/kalfreight-in/Kalgroups/master/src/assets/Images/Vectorphone.svg"
                            alt=""
                            className="text-black"
                            width={23}
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
                            800-977-0010
                          </div>{' '}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="text-black flex mb-8 xl:mb-2  pt-5">
                    <div className="xl:ml-4 ml-0">
                      <div className="w-full  md:ml-0 xl:ml-12 ml:-0 ">
                        English, ਪੰਜਾਬੀ, Español, हिन्दी,
                      </div>
                    </div>
                  </div>
                  <div id="mainiconcontainer" className=" justify-end pb-4  ">
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
