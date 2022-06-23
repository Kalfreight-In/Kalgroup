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
          <SidebarLinkR to="/">HOME</SidebarLinkR>

          <SidebarLinkR to="/trailerandleasing">
            Business Verticals
          </SidebarLinkR>
          <SidebarLinkR to="/partz">About Us</SidebarLinkR>
          <SidebarLinkR to="/tires"> Newsroom</SidebarLinkR>
          <Divlink
            onClick={() => {
              setServices(!Services);
            }}
          >
            Services
          </Divlink>
          {Services
            ? NavbarData[3].navItems.map((data) => (
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
              ))
            : null}
          <SidebarLinkR to="/newsevents">Careers</SidebarLinkR>
          <SidebarLinkR to="/creditapplication">Contact Us</SidebarLinkR>
          <SidebarLinkR to="/Location">
            <Link
              to="Location"
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
