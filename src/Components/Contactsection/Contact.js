import React from 'react';
import Formcomp from './Formcomp';

export default function contact() {
  return (
    <>
      <div id="maincontainer" className="h-screen">
        <div
          id="innermaincontainer"
          className="ml-48 mt-52 flex justify-between mr-72"
        >
          <Formcomp />
          {/* <form id="firstmain">
            <div className="ml-4">
              <h1 className="text-Heading text-heading font-bold">Contact</h1>
              <p className="text-neautralform font-Poppins text-desc font-normal leading-7 mt-2"> 
                We are ready to work on a project of any complexity, <br />
                whether it's commercial or residential.
              </p>
            </div>
            <div id="inameemail" className="mt-4">
              <input
               value={name}
               onChange={(e)=>setName(e.target.value)}
                type="text"
                placeholder="&nbsp; Your Name"
                className="border-2 border-inputborder mx-4 my-2 w-72 h-11 rounded"
                required
              />
              <input
               value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="&nbsp; Email"
                className="border-2 border-inputborder mx-4 my-2 w-72 h-11 rounded"
                required
              />
            </div>

            <div id="reasonphone">
              <input
                type="text"
                list="cars"
                placeholder=" &nbsp; Reason for contacting"
                className="border-2 border-inputborder mx-4 my-2 w-72 h-11 rounded"
                required
              />
              <datalist id="cars">
                <option>buy truck</option>
                <option>buy trailers</option>
              </datalist> 

              <input
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                type="phone"
                placeholder=" &nbsp; Phone"
                className="border-2 border-inputborder mx-4 w-72 h-11 rounded" 
              />
            </div>

            <div id="message">
              <textarea
               value={message}
               onChange={(e)=>setMessage(e.target.value)}
                name=""
                id=""
                cols="80"
                rows="5"
                placeholder=" &nbsp;Message"
                className="border-2 border-inputborder mx-4 my-2 rounded"
              ></textarea>
            </div>

            <div className="ml-4">
              <button className="text-white bg-Lightblue rounded p-4 w-44 mt-8">
                CONTACT US
              </button>
            </div>
          </form> */}

          <div id="secondmain">
            <img
              src="https://raw.githubusercontent.com/kalfreight-in/kalgroup/master/src/assets/Images/redtruck.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
