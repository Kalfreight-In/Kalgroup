import React, { useState } from 'react';
import axios from 'axios';

const Contactform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [ROC, setROC] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonText, setButtonText] = useState('Submit');   
  const resetForm = (e) => { 
    setName('');
    setEmail('');
    setMessage('');
    setSuccess(false);
    setError(false);
    setErrorMessage('');
    setButtonText('Submit');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...'); 

    let data = {
      name: name,
      email: email,
      message: message,
      phoneno: phoneno,
    };

    axios
      .post('http://localhost:5000/api/v1', data)
      .then((res) => [setSuccess(true), resetForm()])
      .catch(() => {
        setError(true);
        console.log('Message not sent');
      });
  };

  return (
    <div id="shadow" className="p-8 ">
      <form class="w-fit " onSubmit={(e) => handleSubmit(e)}>
        <div className="xl:text-left text-center xl:pl-2">
          <h1 className="text-Heading md:text-36px text-2xl font-bold">
            What can we do for you?{" "}
          </h1>

          <p className="text-neautralform  font-Poppins md:text-xl text-xs font-normal  my-1 mb-3">
            We are ready to work on a project of any complexity, whether <br />{" "}
            it's commercial or
          </p>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div
            class="w-full flex justify-center items-center md:w-1/2 xl:px-3 mb-6 md:mb-0"
            id="input_placeholder"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              class="appearance-none block xl:w-72 w-contacttabinput bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              value={name}
              placeholder="Name"
              required
            />
          </div>

          <div class="w-full md:w-1/2 xl:px-3">
            <div class="w-full xl:px-3 flex justify-center items-center">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                class="appearance-none block xl:w-72 w-contacttabinput bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                placeholder="Email Address"
                type="email"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 xl:px-3 mb-6 md:mb-0 flex justify-center items-center">
            <input
              type="text"
              list="cars"
              onChange={(e) => setROC(e.target.value)}
              value={ROC}
              placeholder=" &nbsp; Reason for contacting"
              className="border block xl:w-72 w-contacttabinput bg-white text-gray-700  border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>

          <div class="w-full md:w-1/2 xl:px-3">
            <div class="w-full xl:px-3 flex justify-center items-center ">
              <input
                onChange={(e) => setphoneno(e.target.value)}
                value={phoneno}
                class="appearance-none block xl:w-72 w-contacttabinput bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                placeholder="Mobile No"
                type="Phone"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3"></div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full xl:px-3 flex justify-center items-center ">
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              class=" no-resize appearance-none block xl:w-full w-contacttabinput bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-36 resize-none"
              id="message"
              placeholder="What can we do for you?"
            ></textarea>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div>
            <button className="text-white bg-yellow-bg rounded p-4 w-48 mt-2">
              {buttonText}
            </button>
          </div>

          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default Contactform;
