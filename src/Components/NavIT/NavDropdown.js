import React from 'react';
import { NavLinks } from '../HeaderHome/HeroElements';
import { NavItem } from '../Navbar/NavbarElements';

import { NavItemnew } from './NavDropStyles';
import { NavLinksnew } from './NavDropStyles';
function ListItem({ data }) {
  const { navItem, link, navItems } = data;

  return (
    <li>
      <p>
        {navItem} - {link}
      </p>
      {Array.isArray(navItems) && <NavDropdown data={navItems} />}
    </li>
  );
}

export default function NavDropdown({ data }) {
  return (
    <>
      <div id="mainnewnavcontainer">
        <div id="innermainnavcontainer">
          <div class="group inline-block">
            <button class="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
              <span class="pr-1 font-semibold flex-1">{data.navItem}</span>
              <span>
                <svg
                  class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul
              class="bg-white  rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32 w-max"
            >
              <span className="w-max mx-4 text-white">{data.navItem}</span>
              {/* <ul>
                {data.navItems.map((data) => (
                  <ListItem key={data.id} listItem={data} />
                ))}
              </ul> */}
              {data.navItems
                ? data.navItems.map((data, index) => (
                    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                      {data.navItems != null ? (
                        <>
                          <button class="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center justify-center min-w-32">
                            <span class="pr-1 font-semibold flex-1">
                              {data.navItem}
                            </span>
                            <span class="mr-auto">
                              <svg
                                class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </span>
                          </button>
                          <ul
                            class="bg-white border rounded-sm absolute top-50 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                          >
                            {data.navItems.map((data, index) => (
                              <li class="px-3 py-1 hover:bg-gray-100">
                                <NavItemnew key={data.id}>
                                  <NavLinksnew>{data.navItem}</NavLinksnew>
                                </NavItemnew>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavItemnew key={data.id}>
                          <NavLinksnew>{data.navItem}</NavLinksnew>
                        </NavItemnew>
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
          </div>
        </div>
      </div>
    </>
  );
}
