import React from 'react';

const Lead = ({ title, subtitle, body }) => (
  <>
    <h1 className="text-6xl">{title}</h1>
    <h1 className="text-2xl">{subtitle}</h1>
    <p className="text-sm mb-8">{body}</p>
  </>
);

const Feature = ({ icon, title, body }) => (
  <div className="text-sm rounded">
    <div className="mb-4">
      <div className="text-white bg-indigo-500 rounded-full w-10 h-10 inline-flex items-center justify-center">
        <span className="text-lg">{icon}</span>
      </div>
      <div className="inline-block ml-4 text-lg">{title}</div>
    </div>
    {body}
  </div>
);

const Features = ({ list, lead }) => (
  <div className="container mt-12">
    <div className="flex flex-wrap -mx-2">
      <div className="lg:w-2/3 flex flex-wrap px-2 -mx-2">
        {list.map((feature, index) => (
          <div className="w-full md:w-1/2 my-4 px-2" key={index}>
            <Feature {...feature} />
          </div>
        ))}
      </div>
      <div className="lg:w-1/3 px-2">
        <Lead {...lead} />
      </div>
    </div>
  </div>
);

export default Features;
