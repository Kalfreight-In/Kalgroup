import React from 'react';
import Map from '../../assets/Map';
import { useHover } from '../../Hooks/Hover';
import { MapData } from '../../data';
import MapDropdown from './MapDropdown';
import styled from 'styled-components';
import SubMenu from './SidebarMenu';
const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;
export const MapConatiner = () => {
  const [Fontana, isFontana] = useHover();
  const [Bakersfield, isBakersfield] = useHover();
  const [SanMarcos, isSanMarcos] = useHover();
  const [Calgary, isCalgary] = useHover();

  const [Arlington, isArlington] = useHover();
  const [Hampton, isHampton] = useHover();
  const [Stockton, isStockton] = useHover();
  const [Atlanta, isAtlanta] = useHover();

  const [Indianapolis, isIndianapolis] = useHover();

  const [Springdale, isSpringdale] = useHover();
  const [abbotsford, isabbotsford] = useHover();
  return (
    <div
      id="mainmapcontainer"
      className="bg-Lightblue flex flex-col-reverse  md:flex-row p-8"
    >
      <div className=" svg-container">
        <Map
          Fontana={isFontana}
          Bakersfield={isBakersfield}
          SanMarcos={isSanMarcos}
          Calgary={isCalgary}
          Arlington={isArlington}
          Hampton={isHampton}
          Stockton={isStockton}
          Atlanta={isAtlanta}
          Indianapolis={isIndianapolis}
          Springdale={isSpringdale}
          abbotsford={isabbotsford}
        ></Map>
      </div>
      <div class=" flex-col flex content-center justify-center w-full flex-1 self-start items-start m-4 lg:ml-12 mt-2 lg:mb-0 mb-60">
        <div class="w-full">
          <div className="flex flex-row">
            <h3 class="xl:text-4xl self-start text-white font-bold md:text-2xl ">
              Our Locations:
            </h3>
          </div>

          <div class="mt-2 text-white font-desc text-descnew ">
            We serve You at Multiple location
          </div>
        </div>
        <div class="w-full">
          <div class="m-2 w-1/3">
            {' '}
            <div id="mainnewnavcontainer">
              <div id="innermainnavcontainer">
                <div class="group inline-block w-full">
                  <button class="outline-none focus:outline-none  px-3 py-1 bg-white   rounded-md flex items-center w-full h-12">
                    <span class="pr-1 font-semibold flex-1">Canada</span>
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
                  </button>
                  <ul
                    class="bg-white  rounded-sm transform scale-0 group-hover:scale-100 absolute 
 transition duration-150 ease-in-out origin-top min-w- w-max"
                  >
                    <span class="w-max mx-4 text-white">Canada</span>
                    <li class="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                      <button class="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12">
                        <span class="pr-1 font-semibold flex-1">
                          British Columbia
                        </span>
                        <span class="mr-auto">
                          <svg
                            class="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                          </svg>
                        </span>
                      </button>
                      <ul
                        class=" bg-white border rounded-sm absolute  right-0 
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                      >
                        <li
                          class="px-3 py-1 hover:bg-yellow-shadowhover"
                          ref={abbotsford}
                        >
                          <li class="sc-bczRLJ gbaUcE">
                            <div class="sc-gsnTZi evWpLA">Abbotsford</div>
                          </li>
                        </li>
                      </ul>
                    </li>
                    <li class="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                      <button class="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12">
                        <span class="pr-1 font-semibold flex-1">Alberta</span>
                        <span class="mr-auto">
                          <svg
                            class="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                          </svg>
                        </span>
                      </button>
                      <ul
                        class=" bg-white border rounded-sm absolute  right-0 
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                      >
                        <li
                          class="px-3 py-1 hover:bg-yellow-shadowhover"
                          ref={Calgary}
                        >
                          <li class="sc-bczRLJ gbaUcE">
                            <div class="sc-gsnTZi evWpLA">Calgary</div>
                          </li>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="m-2 w-1/3">
            {' '}
            <div id="mainnewnavcontainer">
              <div id="innermainnavcontainer">
                <div class="group inline-block w-full">
                  <button class="outline-none focus:outline-none  px-3 py-1 hover:bg-yellow-shadowhover bg-white  rounded-md flex items-center w-full h-12">
                    <span class="pr-1 font-semibold flex-1">USA</span>
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
                  </button>
                  <ul
                    class="bg-white  rounded-sm transform scale-0 group-hover:scale-100 absolute 
 transition duration-150 ease-in-out origin-top min-w- w-max"
                  >
                    <span class="w-max mx-4 text-white">USA</span>
                    <li class="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                      <button class="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12">
                        <span class="pr-1 font-semibold flex-1">
                          California
                        </span>
                        <span class="mr-auto">
                          <svg
                            class="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                          </svg>
                        </span>
                      </button>
                      <ul
                        class=" bg-white border rounded-sm absolute  right-0 top-16
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                      >
                        <li
                          class="px-3 py-1 hover:bg-yellow-shadowhover"
                          ref={Fontana}
                        >
                          <li class="sc-bczRLJ gbaUcE">
                            <div class="sc-gsnTZi evWpLA">Fontana</div>
                          </li>
                        </li>
                        <li
                          class="px-3 py-1 hover:bg-yellow-shadowhover"
                          ref={Bakersfield}
                        >
                          <li class="sc-bczRLJ gbaUcE">
                            <div class="sc-gsnTZi evWpLA">Bakersfield</div>
                          </li>
                        </li>
                        <li class="px-3 py-1 hover:bg-yellow-shadowhover">
                          <li class="sc-bczRLJ gbaUcE" ref={SanMarcos}>
                            <div class="sc-gsnTZi evWpLA">San Marcos</div>
                          </li>
                        </li>
                        <li class="px-3 py-1 hover:bg-yellow-shadowhover">
                          <li class="sc-bczRLJ gbaUcE" ref={Stockton}>
                            <div class="sc-gsnTZi evWpLA">Stockton</div>
                          </li>
                        </li>
                      </ul>
                    </li>
                    <li class="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                      <button class="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12">
                        <span class="pr-1 font-semibold flex-1">Georgia</span>
                        <span class="mr-auto">
                          <svg
                            class="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                          </svg>
                        </span>
                      </button>
                      <ul
                        class=" bg-white border rounded-sm absolute  right-0 
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                      >
                        <li
                          class="px-3 py-1 hover:bg-yellow-shadowhover"
                          ref={Atlanta}
                        >
                          <li class="sc-bczRLJ gbaUcE">
                            <div class="sc-gsnTZi evWpLA">Atlanta</div>
                          </li>
                        </li>
                      </ul>
                    </li>
                    <li class="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                      <button class="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12">
                        <span class="pr-1 font-semibold flex-1">Indiana</span>
                        <span class="mr-auto">
                          <svg
                            class="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                          </svg>
                        </span>
                      </button>
                      <ul
                        class=" bg-white border rounded-sm absolute  right-0 
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                      >
                        <li
                          class="px-3 py-1 hover:bg-yellow-shadowhover"
                          ref={Indianapolis}
                        >
                          <li class="sc-bczRLJ gbaUcE">
                            <div class="sc-gsnTZi evWpLA">Indianapolis</div>
                          </li>
                        </li>
                      </ul>
                    </li>
                    <li class="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                      <button class="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12">
                        <span class="pr-1 font-semibold flex-1">
                          New Jersey
                        </span>
                        <span class="mr-auto">
                          <svg
                            class="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                          </svg>
                        </span>
                      </button>
                      <ul
                        class=" bg-white border rounded-sm absolute  right-0 
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                      >
                        <li
                          class="px-3 py-1 hover:bg-yellow-shadowhover"
                          ref={Hampton}
                        >
                          <li class="sc-bczRLJ gbaUcE">
                            <div class="sc-gsnTZi evWpLA">Hampton</div>
                          </li>
                        </li>
                      </ul>
                    </li>
                    <li class="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                      <button class="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12">
                        <span class="pr-1 font-semibold flex-1">Arkansas</span>
                        <span class="mr-auto">
                          <svg
                            class="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                          </svg>
                        </span>
                      </button>
                      <ul
                        class=" bg-white border rounded-sm absolute  right-0 
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                      >
                        <li
                          class="px-3 py-1 hover:bg-yellow-shadowhover"
                          ref={Springdale}
                        >
                          <li class="sc-bczRLJ gbaUcE">
                            <div class="sc-gsnTZi evWpLA">Springdale</div>
                          </li>
                        </li>
                      </ul>
                    </li>
                    <li class="rounded-sm px-6 py-1 hover:bg-yellow-shadowhover flex justify-center items-center">
                      <button class="outline-none focus:outline-none  px-3 py-1   rounded-sm flex items-center w-full h-12">
                        <span class="pr-1 font-semibold flex-1">Texas</span>
                        <span class="mr-auto">
                          <svg
                            class="fill-current h-4 w-4 transform hover:-rotate-180
 transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                          </svg>
                        </span>
                      </button>
                      <ul
                        class=" bg-white border rounded-sm absolute  right-0 
transition duration-150 ease-in-out origin-top-left
min-w-32
"
                      >
                        <li
                          class="px-3 py-1 hover:bg-yellow-shadowhover"
                          ref={Arlington}
                        >
                          <li class="sc-bczRLJ gbaUcE">
                            <div class="sc-gsnTZi evWpLA">Arlington</div>
                          </li>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
