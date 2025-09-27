import React from 'react';

const specializations = [
  {
    title: "Front-end developer",
    description: "Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "UI/UX Designer",
    description: "UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H19.945M3.945 14H19.055M12 21V3" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Graphic designer",
    description: "As a graphic designer, I transform ideas into visually striking and impactful designs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
];

const Specializations = () => {
  return (
    <div className="bg-gray-900 text-white font-sans py-16 px-4 sm:px-8 flex justify-center">
      <div className="max-w-4xl w-full">
        
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-orange-500">Specializations</span>
        </h2>

        <div className="space-y-6">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="flex justify-between items-start bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-700 hover:border-orange-500 transition duration-300"
            >
              <div className="flex-grow pr-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {spec.title}
                </h3>
                <p className="text-gray-400 text-base sm:text-lg">
                  {spec.description}
                </p>
              </div>

              <div className="flex-shrink-0 pt-1">
                {spec.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specializations;
