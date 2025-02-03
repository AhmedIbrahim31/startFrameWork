import React from 'react';
import { Hero } from '../Hero/hero';

export default function Contact() {
  return (
    <div className="bg-white h-screen">
      <div className="pt-30 container mx-auto">
        <div className="white-bg">
        <Hero className="text-slate-700">CONTACT SECTION</Hero>
        </div>
        <form className="max-w-2xl mx-auto pt-10">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="username"
              id="username"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#1abc9ce6] appearance-none focus:outline-none focus:ring-0 focus:border-[#1abc9ce6] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="username"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9ce6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number" 
              name="userAge"
              id="userAge"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#1abc9ce6] appearance-none focus:outline-none focus:ring-0 focus:border-[#1abc9ce6] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="userAge"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9ce6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Age
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email" 
              name="userEmail"
              id="userEmail"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#1abc9ce6] appearance-none focus:outline-none focus:ring-0 focus:border-[#1abc9ce6] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="userEmail"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9ce6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Email
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password" 
              name="userPassword"
              id="userPassword"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#1abc9ce6] appearance-none focus:outline-none focus:ring-0 focus:border-[#1abc9ce6] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="userPassword"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1abc9ce6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              User Password
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-[#1abc9ce6] hover:bg-[#1abc9ce6] focus:ring-4 focus:outline-none focus:ring-[#1abc9ce6] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}