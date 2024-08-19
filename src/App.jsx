import React from "react";
import Greeting from "./Greeting";
import UserProfileCard from "./UserProfileCard";
import StyledComponent from "./StyledComponent";

function App() {
  return (
    <div className="App">
      <Greeting name="John" />
      <UserProfileCard
        name="Jane Doe"
        age={28}
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada."
        location="New York"
        profilePicture="https://via.placeholder.com/100"
      />
      <StyledComponent isStyled={true} />
    </div>
  );
}

export default App;
