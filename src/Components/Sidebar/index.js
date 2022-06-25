import React, { useRef, useState } from 'react';

import { animateScroll as scroll, Link } from 'react-scroll';
import { NavbarData } from '../../data';

import {
  CloseIcon,
  Icon,
  SlidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinkR,
  SideBtnWrap,
  Divlink,
  SidebarRoute,
} from './SlidebarElement';

// import { animateScroll as scroll, Link } from 'react-scroll';
const Sidebar = ({ isOpen, toggle }) => {
  const [Services, setServices] = useState(false);
  const [NewsRoom, setNewsRoom] = useState(false);
  const [AboutUs, setAboutUs] = useState(false);
  const [BusinessVerticles, setBusinessVerticles] = useState(false);
  // const [Logistics, setLogistics] = useState(false);
  // const [Partz, setPartz] = useState(false);
  // const [Tires, setTires] = useState(false);
  // const [TrailersLeasing, setTrailersLeasing] = useState(false);
  // const [Brokerage, setBrokerage] = useState(false);

  function disabel() {
    const path = window.location.pathname;

    if (path === '/') {
      return true;
    }
    return false;
  }
  return (
    <SlidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkR to="/" onClick={toggle}>
            HOME
          </SidebarLinkR>

          {/* <SidebarLinkR onClick={toggle} to="/kalgroup/tires">
           
          </SidebarLinkR>
          <SidebarLinkR onClick={toggle} to="/kalgroup/tires">
            About Us
          </SidebarLinkR>
          <SidebarLinkR onClick={toggle} to="/kalgroup/tires">
            {' '}
            Newsroom
          </SidebarLinkR> */}
          <Divlink
            onClick={() => {
              setBusinessVerticles(!BusinessVerticles);
              setAboutUs(false);
              setNewsRoom(false);
              setServices(false);
            }}
          >
            Business Verticals
            <span>
              <svg
                class="fill-current h-4 w-4 transform group-hover:-rotate-180
 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </span>
          </Divlink>
          {BusinessVerticles
            ? NavbarData[0].navItems.map((data) => (
                <a href={data.url.url}>
                  <div className=" text-black  justify-center items-center text-center p-1">
                    {data.navItem}
                    {/* {data.navItems
                ? data.navItems.map((data) => (
                    <div className=" text-Heading  justify-center text-center items-center">
                      {data.navItem}
                    </div>
                  ))
                : null} */}
                  </div>
                </a>
              ))
            : null}
          <Divlink
            onClick={() => {
              setAboutUs(!AboutUs);
              setBusinessVerticles(false);

              setNewsRoom(false);
              setServices(false);
            }}
          >
            About Us
            <span>
              <svg
                class="fill-current h-4 w-4 transform group-hover:-rotate-180
 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </span>
          </Divlink>
          {AboutUs
            ? NavbarData[1].navItems.map((data) =>
                data.url.link === 'a' ? (
                  <a href={data.url.url} className="w-full">
                    <div className=" text-black  justify-center items-center text-center p-1">
                      {data.navItem}
                    </div>
                  </a>
                ) : (
                  <Link
                    to={data.url.url}
                    onClick={toggle}
                    smooth={true}
                    duration={1000}
                    spy={true}
                    exact={true}
                    offset={-80}
                    className="cursor-pointer"
                  >
                    <div className=" text-black  justify-center items-center text-center p-1">
                      {data.navItem}
                    </div>
                  </Link>
                )
              )
            : null}
          <Divlink
            onClick={() => {
              setNewsRoom(!NewsRoom);
              setBusinessVerticles(false);
              setAboutUs(false);

              setServices(false);
            }}
          >
            News Room
            <span>
              <svg
                class="fill-current h-4 w-4 transform group-hover:-rotate-180
 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </span>
          </Divlink>
          {NewsRoom
            ? NavbarData[2].navItems.map((data) =>
                data.url.link === 'a' ? (
                  <a href={data.url.url} className="w-full">
                    <div className=" text-black  justify-center items-center text-center p-1">
                      {data.navItem}
                    </div>
                  </a>
                ) : (
                  <Link
                    to={data.url.url}
                    onClick={toggle}
                    smooth={true}
                    duration={1000}
                    spy={true}
                    exact={true}
                    offset={-80}
                    className="cursor-pointer"
                  >
                    <div className=" text-black  justify-center items-center text-center p-1">
                      {data.navItem}
                    </div>
                  </Link>
                )
              )
            : null}
          <Divlink
            onClick={() => {
              setServices(!Services);
              setBusinessVerticles(false);
              setAboutUs(false);
              setNewsRoom(false);
            }}
          >
            Services
            <span>
              <svg
                class="fill-current h-4 w-4 transform group-hover:-rotate-180
 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </span>
          </Divlink>
          {Services
            ? NavbarData[3].navItems.map((data) =>
                data.url.link === 'a' ? (
                  <a href={data.url.url} className="w-full">
                    <div className=" text-black  justify-center items-center text-center p-1">
                      {data.navItem}
                    </div>
                  </a>
                ) : (
                  <Link
                    to={data.url.url}
                    onClick={toggle}
                    smooth={true}
                    duration={1000}
                    spy={true}
                    exact={true}
                    offset={-80}
                    className="cursor-pointer"
                  >
                    <div className=" text-black  justify-center items-center text-center p-1">
                      {data.navItem}
                    </div>
                  </Link>
                )
              )
            : null}
          <SidebarLinkR to="ContactSection">
            <Link
              to="ContactSection"
              onClick={toggle}
              smooth={true}
              duration={1000}
              spy={true}
              exact={true}
              offset={-80}
            >
              Careers
            </Link>
          </SidebarLinkR>
          <SidebarLinkR to="ContactSection">
            <Link
              to="ContactSection"
              onClick={toggle}
              smooth={true}
              duration={1000}
              spy={true}
              exact={true}
              offset={-80}
            >
              Contact Us
            </Link>
          </SidebarLinkR>
          <SidebarLinkR onClick={toggle} to="mainmapcontainer">
            <Link
              to="mainmapcontainer"
              onClick={toggle}
              smooth={true}
              duration={1000}
              spy={true}
              exact={true}
              offset={-80}
            >
              Locations
            </Link>
          </SidebarLinkR>

          {/* <SidebarLinkR to="/Ecommerce">Ecommerce</SidebarLinkR>
          <SidebarLinkR to="/Careers">Careers</SidebarLinkR>
          <SidebarLinkR to="/Shipfreight">Shipfreight</SidebarLinkR>
          <SidebarLinkR to="/Industries">Industries</SidebarLinkR>
          <SidebarLinkR to="/KalPower">KalPower</SidebarLinkR> */}
        </SidebarMenu>
        {/* <SideBtnWrap className="mt-2">
          <SidebarRoute>
            <a href="/Contact">Contact Us</a>
          </SidebarRoute>
        </SideBtnWrap> */}
        {/* <SideBtnWrap className="mt-2">
          <SidebarRoute to="/WorkAtKalway">
            <a href="/WorkAtKalway">Work At KALWAY</a>
          </SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SlidebarContainer>
  );
};

export default Sidebar;
