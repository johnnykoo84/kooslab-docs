import React from "react";

const Testimonial = ({ logo, testimonial_1, testimonial_2, client }) => {
  return (
    <div className="flex flex-col items-center border mb-4 p-2">
      <img src={logo} className="bg-white p-4 mb-2" alt={`${client} logo`} />
      <div className="text-left mb-2">
        <p>{testimonial_1}</p>
        <p>{testimonial_2}</p>
      </div>
      <p className="font-bold">- {client}</p>
    </div>
  );
};

export default Testimonial;
