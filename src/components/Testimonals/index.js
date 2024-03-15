import React from "react";

const Testimonial = ({ logo, testimonial_1, testimonial_2, client }) => (
  <div
    style={{
      margin: "10px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <img
      src={logo}
      alt={`${client} logo`}
      style={{
        width: "300px",
        height: "200px",
        objectFit: "contain",
      }}
    />
    <p
      style={{
        fontStyle: "italic",
        marginTop: "5px",
        fontSize: "1.3em",
      }}
    >
      {testimonial_1}
    </p>
    <p
      style={{
        fontStyle: "italic",
        marginTop: "5px",
        fontSize: "1.3em",
      }}
    >
      {testimonial_2}
    </p>
    <p
      style={{
        fontWeight: "bold",
        marginTop: "10px",
        fontSize: "1.5em",
      }}
    >
      - {client}
    </p>
  </div>
);

export default Testimonial;
