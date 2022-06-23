import React from 'react';
import Map from '../../assets/Map';
import { useHover } from '../../Hooks/Hover';
import { MapData } from '../../data';
import MapDropdown from './MapDropdown';
export const MapConatiner = () => {
  const [AfhoverRef, AfisHovered] = useHover();
  const [CahoverRef, CaisHovered] = useHover();
  const [TorantoRef, TorantoisHovered] = useHover();
  const [SureyRef, SureyisHovered] = useHover();
  const [EdmentonRef, EdmentonisHovered] = useHover();
  return (
    <div
      id="mainmapcontainer"
      className="bg-Lightblue flex flex-col-reverse  md:flex-row p-8"
    >
      <div className=" svg-container">
        <Map
          Af={AfisHovered}
          Ca={CaisHovered}
          toranto={TorantoisHovered}
          surey={SureyisHovered}
          edmenton={EdmentonisHovered}
        ></Map>
      </div>

      <div className=" md:6/12 flex-col flex content-center  flex-1 ">
        <div className=" flex-col flex content-center justify-center w-full flex-1 self-start items-start m-4 lg:ml-12 mt-2 ">
          <div className="w-full">
            <h3 className="xl:text-4xl self-start text-white font-bold md:text-2xl ">
              Our Locations:
            </h3>
            <div className="mt-2 text-white font-desc text-descnew m">
              We serve You at Multiple location
              {/* <a href="#" className="hover:text-yellow-shadowhover transition ">
                click here
              </a> */}
            </div>
          </div>

          {MapData.map((data, index) => (
            <div className="w-full">
              <div className="m-2 w-1/3">{MapDropdown((data = { data }))}</div>
            </div>
          ))}
          {/* <div id="mainnewnavcontainer">
            <div id="innermainnavcontainer">
              <div class="group inline-block">
                <button class="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center min-w-68">
                  <span class="pr-1 font-semibold flex-1">UnitedState</span>
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
                  <span className="w-max mx-4 text-black">javascrip</span>
                  <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <ul
                      class="bg-white border rounded-sm absolute top-0 right-0 
                   transition duration-150 ease-in-out origin-top-left
                    min-w-32
                    "
                    >
                      <li class="px-3 py-1 hover:bg-gray-100">Javascript</li>
                      <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                        <button class="w-full text-left flex items-center outline-none focus:outline-none">
                          <span class="pr-1 flex-1">Python</span>
                          <span class="mr-auto">
                            <svg
                              class="fill-current h-4 w-4
                        transition duration-150 ease-in-out"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </span>
                        </button>
                        <ul
                          class="bg-white border rounded-sm absolute top-0 right-0 
                             transition duration-150 ease-in-out origin-top-left
                       min-w-32
                             "
                        >
                          <li class="px-3 py-1 hover:bg-gray-100">2.7</li>
                          <li class="px-3 py-1 hover:bg-gray-100">3+</li>
                        </ul>
                      </li>
                      <li class="px-3 py-1 hover:bg-gray-100">Go</li>
                      <li class="px-3 py-1 hover:bg-gray-100">Rust</li>
                    </ul>
                  </li>
                  <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Kalfreight
                  </li>
                  <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Kalfreight
                  </li>
                  <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Kalfreight
                  </li>
                  <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Kalfreight
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
