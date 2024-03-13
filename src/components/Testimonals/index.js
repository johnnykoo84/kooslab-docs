import React from "react";

const Testimonial = ({ logo, testimonial, client }) => (
  <div
    style={{
      border: "1px solid #ddd",
      padding: "20px",
      margin: "20px 0",
      borderRadius: "5px",
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
        marginTop: "20px",
        fontSize: "1.3em",
      }}
    >
      "{testimonial}"
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
