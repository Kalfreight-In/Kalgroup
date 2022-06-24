import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll, Link } from 'react-scroll';

// import ErrorBoundary from '../ErrorBoundary';

import {
  Nav,
  NavMenu,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
} from './NavbarElements';
import { NavbarData } from '../../data';
import NavDropdown from '../NavIT/NavDropdown';

const Navbar = ({ toggle }) => {
  console.log(window.scrollY);
  // function loadLogo(path) {
  //   if (path == '/kalgroup') {
  //     return 'https://raw.githubusercontent.com/kalfreight-in/kalgroup/master/src/assets/Images/navlogo.svg';
  //   }
  //   if (path == '/partz') {
  //     return 'https://raw.githubusercontent.com/Kalfreight-In/kalgroup/main/src/assets/Images/icons/Parts-nav-logo.png';
  //   }
  //   if (path == '/tires') {
  //     return 'https://raw.githubusercontent.com/Kalfreight-In/kalgroup/main/src/assets/Images/icons/tires-nav-logo.png';
  //   } else {
  //     return 'https://raw.githubusercontent.com/Kalfreight-In/kalgroup/main/src/assets/Images/icons/Trailers-nav-logo.png';
  //   }
  // }
  // const initialState = loadLogo(window.location.pathname);
  const [logo, setlogo] = useState(
    'https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/kalNavlogo.png'
  );
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.location.pathname === '/trailerandleasing') {
      console.log(`it is inside the ${window.location.pathname}`);
      setScrollNav(true);
      return;
    }
    if (window.scrollY > 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    if (window.location.pathname === '/trailerandleasing') {
      setlogo(
        'https://raw.githubusercontent.com/Kalfreight-In/kalgroup/main/src/assets/Images/icons/Trailers-nav-logo.png'
      );
      console.log(`${window.location.pathname} and then there is ${logo}`);
      setScrollNav(true);
    }
    if (window.location.pathname === '/kalgroup') {
      setlogo(
        'https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/kalNavlogo.png'
      );
      console.log(`${window.location.pathname} and then there is ${logo}`);
    }
    if (window.location.pathname === '/partz') {
      setlogo(
        'https://raw.githubusercontent.com/Kalfreight-In/kalgroup/main/src/assets/Images/icons/Parts-nav-logo.png'
      );
      console.log(`${window.location.pathname} and then there is ${logo}`);
    }
    if (window.location.pathname === '/tires') {
      setlogo(
        'https://raw.githubusercontent.com/Kalfreight-In/kalgroup/main/src/assets/Images/icons/tires-nav-logo.png'
      );
      console.log(`${window.location.pathname} and then there is ${logo}`);
    }
  }, [window.location.pathname]);
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff', size: '1em' }}>
        <Nav scrollNav={scrollNav}>
          <div className="flex flex-row ml-8">
            <NavLogo to="/" onClick={toggleHome}>
              <img
                // className="2xl:w-56 w-44  2xl:h-44 h-32  "

                src={logo}
                alt="logo"
                width="50%"
              />
            </NavLogo>

            <NavMenu>
              {/* <NavItem>
                <NavLinks
                  to="/kalgroup"
                  onClick={toggleHome}
                  className="2xl:text-16px text-navsmall  max-w-screen-lg:text-xs md:text-xs"
                >
            <NavFirstt/>
                  
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/trailerandleasing"
                  onClick={toggleHome}
                  className="2xl:text-16px text-navsmall lg:text-xs md:text-xs"
                >
                  <NavSecond/>
                </NavLinks>
              </NavItem> */}

              {NavbarData.map((data) => (
                <NavItem>
                  <NavLinks
                    onClick={toggleHome}
                    className="2xl:text-16px text-navsmall lg:text-xs md:text-xs"
                  >
                    <NavDropdown data={data} hidden={scrollNav} />
                  </NavLinks>
                </NavItem>
              ))}

              {/* <NavItem>
                <NavLinks
                  to="/partz"
                  onClick={toggleHome}
                  className="2xl:text-16px text-navsmall lg:text-xs md:text-xs"
                >
                <DropNav/>
                </NavLinks>
              </NavItem> */}

              {/* <NavItem>
                <NavLinks
                  to="ContactSection"
                  onClick={toggleHome}
                  className="2xl:text-16px text-navsmall lg:text-xs md:text-xs"
                >
                  <Link
                    to="ContactSection"
                    smooth={true}
                    duration={1000}
                    spy={true}
                    exact={true}
                    offset={-80}
                  >
                    Clientele
                  </Link>
                </NavLinks>
              </NavItem> */}

              {/* <NavItem>
                <NavLinks
                  to="/Contact"
                  onClick={toggleHome}
                  className="2xl:text-16px text-navsmall lg:text-xs md:text-xs"
                >
                  Careers
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/Contact"
                  onClick={toggleHome}
                  className="2xl:text-16px text-navsmall lg:text-xs md:text-xs"
                ></NavLinks>
              </NavItem> */}

              <MobileIcon onClick={toggle} className="">
                <FaBars color="#111" />
              </MobileIcon>
            </NavMenu>
          </div>

          <div id="navicons" className="pr-16 lg:flex hidden">
            {/* <NavItem>
              <NavLinks
                to="/Contact"
                onClick={toggleHome}
                className="2xl:text-16px text-navsmall lg:text-xs md:text-xs"
              >
                <img
                  src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/navmaplogo.svg"
                  alt=""
                />
              </NavLinks>
            </NavItem> */}

            <Link
              to="mainmapcontainer"
              smooth={true}
              duration={1000}
              spy={true}
              exact={true}
              offset={-80}
              className="px-8 cursor-pointer"
            >
              <img
                src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/navmaplogo.svg"
                alt=""
                className="h-8 w-8 "
              />
            </Link>

            <Link
              to="ContactSection"
              smooth={true}
              duration={1000}
              spy={true}
              exact={true}
              offset={-80}
              className="cursor-pointer"
            >
              <img
                src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/navemaillogo.png"
                alt=""
                className="h-6 w-8 mt-1"
              />
            </Link>

            {/* <NavItem>
              <NavLinks
                to="/Contact"
                onClick={toggleHome}
                className="2xl:text-16px text-navsmall lg:text-xs md:text-xs"
              >
                <img
                  src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/navemaillogo.png"
                  alt=""
                />
              </NavLinks>
            </NavItem> */}
          </div>
          {/* <NavBtn className="mr-8">
            <button className="text-white bg-yellow-bg  font-semibold  rounded-md shadow-sm hover:shadow-md shadow-yellow-shadow transition-all hover:drop-shadow-lg  flex items-center justify-center 2xl:w-56 lg:w-48 md:32 2xl:h-16 h-12 2xl:text-xl xl:text-lg lg:text-md md:text-md">
              <div>
                <img
                  src="https://raw.githubusercontent.com/kalfreight-in/kalgroup/master/src/assets/Images/Vectorphone.svg"
                  alt=""
                  className="text-white  w-3/5 pt-2"
                />
              </div>
              (800) 977 0010
            </button>
          </NavBtn> */}
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
