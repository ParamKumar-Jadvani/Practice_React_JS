import React from "react";

const Greeting = ({ name }) => {
  return (
    <div>
      <h1>{name ? `Hello, ${name}!` : "Welcome to our website!"}</h1>
    </div>
  );
};

export default Greeting;
