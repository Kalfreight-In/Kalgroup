import React from 'react'
import { useState } from 'react';


export default function index() {

    const [value,setValue] = useState('fruit')

    const handlchange = (e)=>{
        setValue(e.target.value)
    }
  return (
    <>
      <div id="maincontainer">
        <div id="innermaincontainer">
          <div id="firstmain">
            <div className="flex">
              <img
                src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/whitelocation.png"
                alt="Locations"
              />
              <h1 className="text-heading text-white">Our Locations</h1>
            </div>
            <p>
              We provide a full range of front end mechanical repairs for all
              makes and models of car
            </p>
          </div>

          <div id="secondmain">
            <select value={value} onChange={handlchange}>
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetable</option>
              <option value="meat">Meat</option> 
            </select>

            <p>we eate {value}! </p> 
          </div>
        </div>
      </div>
    </>
  );
}
