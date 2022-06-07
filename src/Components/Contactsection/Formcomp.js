import React from 'react';
import { useState } from 'react';

export default function Formcomp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <div id="shadow" className="p-4 rounded-3xl shadow-2xl">
        <form id="firstmain" className="p-2">
          <div className="ml-4 mt-20">
            <h1 className="text-Heading text-heading font-bold">Contact</h1>
            <p className="text-neautralform font-Poppins text-desc font-normal leading-7 mt-2"></p>
          </div>
          <div id="inameemail" className="mt-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="&nbsp; Your Name"
              className="border-2 border-inputborder mx-4 my-2  h-11 rounded"
              required
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="&nbsp; Email"
              className="border-2 border-inputborder mx-4 my-2 h-11 rounded"
              required
            />
          </div>

          <div id="reasonphone">
            <input
              type="text"
              list="cars"
              placeholder=" &nbsp; Reason for contacting"
              className="border-2 border-inputborder mx-4 my-2  h-11 rounded"
              required
            />
            <datalist id="cars">
              <option>buy truck</option>
              <option>buy trailers</option>
            </datalist>

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              placeholder=" &nbsp; Phone"
              className="border-2 border-inputborder mx-4 h-11 rounded"
            />
          </div>

          <div id="message">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name=""
              id=""
              cols="80"
              rows="5"
              placeholder=" &nbsp;Message"
              className="border-2 border-inputborder mx-4 my-2 rounded"
            ></textarea>
          </div>

          <div className="ml-4">
            <button className="text-white bg-Lightblue rounded p-4  mt-8">
              CONTACT US
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
