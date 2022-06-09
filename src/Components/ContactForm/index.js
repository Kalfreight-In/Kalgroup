import React, { useState } from 'react';
import axios from 'axios';

import emailjs from 'emailjs-com'; 

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
    // emailjs.sendForm('service_2vrcmgl', 'template_w4rsa4r', form.current).then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
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
    <div id="shadow" className="p-8  ">
      <form class="w-fit " onSubmit={(e) => handleSubmit(e)}>
        <div className=" ">
          <h1 className="text-Heading text-36px font-bold">What can we do for you? </h1>
          {/* <p className="text-neautralform  font-Poppins text-md font-bold  my-2">
            What can we do for you? 
          </p> */} 
          <p className="text-neautralform  font-Poppins text-xl font-normal  my-1 mb-3">  
            We are ready to work on a project of any complexity, whether <br /> it's commercial or 
          </p>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {/* <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Name
            </label> */}
            <input
              onChange={(e) => setName(e.target.value)}
              class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Name"
              value={name}
              required
            />
            {/* <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>

          <div class="w-full md:w-1/2 px-3">
            <div class="w-full px-3">
              {/* <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                E-mail
              </label> */}
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                placeholder="Email Address"
                type="email"
                required
              />
              {/* <p class="text-gray-600 text-xs italic">
                Some tips - as long as needed
              </p> */}
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {/* <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Name
            </label> */}
            <input
              type="text"
              list="cars"
              onChange={(e) => setROC(e.target.value)}
              value={ROC}
              placeholder=" &nbsp; Reason for contacting"
              className="border block w-full bg-white text-gray-700  border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
            <datalist id="cars">
              <option>buy truck</option>
              <option>buy trailers</option>
            </datalist>
            {/* <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>

          <div class="w-full md:w-1/2 px-3">
            <div class="w-full px-3">
              {/* <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                E-mail
              </label> */}
              <input
                onChange={(e) => setphoneno(e.target.value)}
                value={phoneno}
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                placeholder="Mobile No"
                type="Phone"
                required
              />
              {/* <p class="text-gray-600 text-xs italic">
                Some tips - as long as needed
              </p> */}
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            {/* <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              why you want to contact us
            </label> */}
            {/* <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="why you want to contact us"
              required
            /> */}

            {/* <p class="text-gray-600 text-xs italic">
              Some tips - as long as needed
            </p> */}
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            {/* <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Message
            </label> */}
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              class=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-18 resize-none"
              id="message"
              placeholder="What can we do for you?"
            ></textarea>
            {/* <p class="text-gray-600 text-xs italic">
              Re-size can be disabled by set by resize-none / resize-y /
              resize-x / resize
            </p> */}
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div>
            <button className="text-white bg-Lightblue rounded p-4 w-full mt-2">
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
