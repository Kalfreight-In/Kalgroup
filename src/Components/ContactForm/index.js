import React, { useState } from 'react';
import axios from 'axios';
import Sparkles from '../../animation/Sparkel';
import { motion } from 'framer-motion';
const Contactform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [location, setlocation] = useState('');
  const [ROC, setROC] = useState('');

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonText, setButtonText] = useState('Submit');
  const resetForm = (e) => {
    setName('');
    setEmail('');
    setMessage('');
    setphoneno('');
    setlocation('');

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
      site: 'kalgroup',
      name: name,
      email: email,
      message: message,
      phoneno: phoneno,
      location: location,
    };

    axios
      .post('https://nodeserver-contactus.herokuapp.com/api/v1', data)
      .then((res) => [setSuccess(true), resetForm()])
      .catch(() => {
        setError(true);
        console.log('Message not sent');
      });
  };

  return (
    <div id="shadow" className="md:p-8 p-4 ">
      {success ? (
        <motion.div
          animate={{ scale: [0.5, 1] }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex flex-col justify-center items-center">
            <div className="w-max">
              <Sparkles>
                <img
                  src="https://raw.githubusercontent.com/Kalfreight-In/BigRigGroups/main/src/assets/animation/3dbuddy.png"
                  width={350}
                ></img>
              </Sparkles>
            </div>
            <div className="text-2xl font-bold text-black w-2/4 mt-3 text-center mb-16 ">
              <Sparkles>
                Thanks you for reaching out, we will get back to you as soon as
                possible.
              </Sparkles>
            </div>
            <div
              className="text-3xl font-bold text-black text-center  cursor-pointer mb-2"
              onClick={() => {
                setSuccess(false);
              }}
            >
              <motion.div
                animate={{ scale: [0.8, 1] }}
                transition={{
                  ease: 'linear',
                  duration: 0.9,
                  repeat: Infinity,
                }}
              >
                Something else <strong className="text-5xl ">!</strong>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : (
        <form class="w-fit " onSubmit={(e) => handleSubmit(e)}>
          <div className="xl:text-left text-center xl:pl-2">
            <div
              id="contactnew"
              className="flex justify-center items-center xl:justify-start xl:items-start"
            >
              <img
                src="https://raw.githubusercontent.com/Kalfreight-In/Kalgroup/main/src/assets/Images/navemaillogo.png"
                alt=""
                className="max-w-emailcontacticon max-h-8 pt-2 hidden md:block"
              />
              <h1 className="text-Heading md:text-36px text-3xl font-bold pl-2 text-center ">
                Contact Us
              </h1>
            </div>

            <p className="text-neautralform  font-Poppins md:text-xl text-xs font-normal  my-1 mb-3 ">
              We are ready to work on a project of any complexity, whether{' '}
              <br /> it's commercial or
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
                onChange={(e) => setlocation(e.target.value)}
                placeholder=" Location"
                className="appearance-none block xl:w-72 w-contacttabinput bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
          <div class="md:block  flex items-center justify-center">
            <div>
              <button className="text-white bg-yellow-bg rounded h-12 p-4 w-48 mt-2 flex justify-center items-center ">
                {buttonText}
              </button>
            </div>

            <div class="md:w-2/3"></div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contactform;
