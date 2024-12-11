import React from "react";

const Testimonial = ({ logo, testimonial_1, testimonial_2, client }) => {
  return (
    <div className="min-w-[320px] w-[320px] flex-shrink-0 items-center mb-4 p-2">
      <img
        src={logo}
        className="bg-white h-24 min-w-[300px] w-[300px] flex-shrink-0 p-4 mb-4"
        alt={`${client} logo`}
      />
      <div className="text-left mb-2">
        <p>{testimonial_1}</p>
        <p>{testimonial_2}</p>
      </div>
      <p className="font-bold">- {client}</p>
    </div>
  );
};

export default Testimonial;
