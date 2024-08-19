import React from "react";
import "./StyledComponent.css";

const StyledComponent = ({ isStyled }) => {
  return (
    <div className={`styled-component ${isStyled ? "styled" : ""}`}>
      <h1>{isStyled ? "Styled Component" : "Default Component"}</h1>
    </div>
  );
};

export default StyledComponent;
