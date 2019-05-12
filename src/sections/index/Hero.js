import React from 'react';
import Image from 'images/hero.svg';

const Hero = () => (
  <div className="bg-blue-900">
    <div className="container text-white">
      <div className="flex -mx-2">
        <div className="w-full w-1/2 py-10 px-2 flex justify-center items-center flex-col">
          <div className="w-full text-center lg:w-3/4 lg:text-left">
            <h1 className="text-6xl">Lorem Ipsum</h1>
            <h1 className="text-2xl">Dolor sit amet</h1>
            <p className="text-sm mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button class="mb-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full md:mb-0">
              Call to action
            </button>
            <button class="text-white text-sm hover:underline block mx-auto md:inline-block md:ml-6">
              or use this CTA
            </button>
          </div>
        </div>
        <div className="hidden lg:block w-1/2 px-2 ">
          <Image height={400} width="100%" />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
