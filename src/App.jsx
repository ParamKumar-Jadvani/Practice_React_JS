import React from "react";
import UserProfile from "./UserProfile";

const App = () => {
  return (
    <div>
      <UserProfile
        user={{
          name: "John Doe",
          age: 30,
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
          location: "New York",
          profilePicture: "https://picsum.photos/200/300",
        }}
      />
    </div>
  );
};

export default App;
