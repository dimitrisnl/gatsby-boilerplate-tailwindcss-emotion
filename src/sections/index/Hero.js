import React from 'react';
import { SolidBtn, PlainBtn } from 'components/button';
import Image from 'images/hero.svg';

const Hero = ({ title, subtitle, body }) => (
  <div className="bg-blue-900">
    <div className="container text-white">
      <div className="flex -mx-2">
        <div className="w-full lg:w-1/2 py-10 px-2 flex justify-center items-center flex-col">
          <div className="w-full text-center lg:w-3/4 lg:text-left">
            <h1 className="text-6xl">{title}</h1>
            <h1 className="text-2xl">{subtitle}</h1>
            <p className="text-sm mb-8">{body}</p>
            <SolidBtn className="mb-2 md:mb-0">Call to action</SolidBtn>
            <PlainBtn className="block mx-auto md:inline-block md:ml-6">
              or use this CTA
            </PlainBtn>
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
