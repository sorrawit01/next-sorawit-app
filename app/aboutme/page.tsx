import React from 'react';


const Aboutme = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full p-6 md:p-10 lg:p-12 rounded-xl">
        <h3 className="text-lg uppercase tracking-widest text-gray-400 mb-2">
          About 
          <span className="font-bold text-red-400">Me</span>
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8">
          I find fulfillment in blending visual design with the power of coding to create meaningful experiences.
        </h1>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati corrupti voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum voluptates obcaecati corrupti voluptatem.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
