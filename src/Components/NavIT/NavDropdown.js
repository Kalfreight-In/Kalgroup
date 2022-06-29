import React from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';
import { NavItemnew } from './NavDropStyles';
import { NavLinksnew } from './NavDropStyles';

export default function NavDropdown({ data, hidden }) {
  return (
    <>
      <div id="mainnewnavcontainer">
        <div id="innermainnavcontainer">
          <div class="group inline-block">
            <Link
              to={data.url.url}
              smooth={true}
              duration={1000}
              spy={true}
              exact={true}
              offset={-80}
              className="cursor-pointer"
            >
              <button class="outline-none focus:outline-none  px-3 py-1  rounded-sm flex justify-start items-start text-left min-w-32">
                <span class="pr-1 font-medium flex-1 md:text-xs xl:text-navlgtext text-sm ">
                  {data.navItem}
                </span> 
                <span>
                  {/* <svg
                  class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg> */}
                </span>
              </button>
            </Link>
            {data.navItems ? (
              <ul
                class={`${
                  !hidden
                    ? 'bg-navdropdownbgtransparent'
                    : 'bg-footerbackground'
                }  rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32 mt-3 w-max font-normal `}
              >
                <span className="w-12 "></span>
                {/* <span
                  className={`w-max mx-4 ${
                    !hidden
                      ? "text-navdropdownbgtransparent"
                      : "text-footerbackground"
                  } text-xl font-normal`}
                >
                  {data.navItem}
                </span> */}
                {/* <ul>
                {data.navItems.map((data) => (
                  <ListItem key={data.id} listItem={data} />
                ))}
              </ul> */}
                {data.navItems
                  ? data.navItems.map((data, index) => (
                      <li
                        class={`rounded-sm px-3 py-1   ${
                          !hidden
                            ? 'bg-navdropdownbgtransparent hover:bg-navdropdownbottom'
                            : 'bg-footerbackground hover:bg-white'
                        }  flex justify-start items-start text-left font-normal border-b border-navdropdownbottom`}
                      >
                        {data.navItems != null ? (
                          <>
                            <button class="outline-none focus:outline-none   py-1  rounded-sm flex items-start justify-start min-w-32  text-left font-normal  ">
                              <span class="pr-1 font-normal flex-1  text-contactdesc  ">
                                {data.navItem}
                              </span>

                              <span class="mr-auto">
                                <svg
                                  class="fill-current h-4 w-4 transform -rotate-90 
        transition duration-150 ease-in-out "
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                              </span>
                            </button>
                            <ul
                              class={`${
                                !hidden
                                  ? 'bg-navdropdownbgtransparent'
                                  : 'bg-footerbackground'
                              }  rounded-sm absolute top-50 right-0 
  transition duration-150 ease-in-out origin-top-left 
  min-w-32 font-normal   
  `}
                            >
                              {data.navItems.map((data, index) => ( 
                                <div
                                  className={` text-left border-b  ${
                                    !hidden
                                      ? 'bg-navdropdownbgtransparent '
                                      : 'bg-navdropdownbgtransparent  '
                                  } ${!hidden? 'hover:bg-navdropdownbottom':'hover:bg-white'} border-navdropdownbottom `}
                                >
                                  <a href={data.url.url} target="_blank">
                                    <li class="px-3 h-8 font-normal w-max ">
                                      <NavItemnew key={data.id}>
                                        <NavLinksnew className="pt-2 ">
                                          {data.navItem}
                                        </NavLinksnew>
                                      </NavItemnew>
                                    </li>
                                  </a>
                                </div>
                              ))}
                            </ul>
                          </>
                        ) : data.url.link === 'a' ? (
                          <a
                            href={data.url.url}
                            target="_blank"
                            className="w-full"
                          >
                            <NavItemnew key={data.id}>
                              <NavLinksnew>{data.navItem}</NavLinksnew>
                            </NavItemnew>
                          </a>
                        ) : (
                          <Link
                            to={data.url.url}
                            smooth={true}
                            duration={1000}
                            spy={true}
                            exact={true}
                            offset={-80}
                            className="cursor-pointer "
                          >
                            <NavItemnew key={data.id}>
                              <NavLinksnew>{data.navItem}</NavLinksnew>
                            </NavItemnew>
                          </Link>
                        )}
                      </li>
                    ))
                  : null}

                {/* <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                <NavItemnew>
                  <NavLinksnew>{data.navItem}</NavLinksnew>
                </NavItemnew>
              </li>
              <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                <NavItemnew>
                  <NavLinksnew>{data.navItem}</NavLinksnew>
                </NavItemnew>
              </li>
              <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                <NavItemnew>
                  <NavLinksnew>{data.navItem}</NavLinksnew>
                </NavItemnew>
              </li>
              <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                <NavItemnew>
                  <NavLinksnew>Kalfreight</NavLinksnew>
                </NavItemnew>
              </li> */}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
