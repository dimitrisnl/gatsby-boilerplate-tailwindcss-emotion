import React from 'react';

const Lead = ({ title, subtitle, body }) => (
  <>
    <h1 className="text-6xl">{title}</h1>
    <h1 className="text-2xl">{subtitle}</h1>
    <p className="text-sm mb-8">{body}</p>
  </>
);

const Feature = ({ icon, title, body }) => (
  <div className="p-4 text-sm rounded">
    <div className="mb-4">
      <div className="text-white bg-indigo-500 rounded-full w-8 h-8 inline-flex items-center justify-center">
        {icon}
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
          <div className="w-1/2 mt-2 px-2" id={index}>
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

// Placeholders..
Features.defaultProps = {
  lead: {
    title: 'Lorem Ipsum',
    subtitle: 'Dolor sit amet',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  list: [
    {
      icon: 'L',
      title: 'Lorem',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis egestas elementum.',
    },
    {
      icon: 'L',
      title: 'Lorem',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis egestas elementum.',
    },
    ,
    {
      icon: 'L',
      title: 'Lorem',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis egestas elementum.',
    },
    ,
    {
      icon: 'L',
      title: 'Lorem',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis egestas elementum.',
    },
  ],
};
