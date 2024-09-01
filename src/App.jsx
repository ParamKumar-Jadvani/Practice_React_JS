import React from "react";
import UserProfile from "./UserProfile";
import UserProfile_Exam_1 from "./UserProfile_Exam_1";

const App = () => {
  return (
    <div>
      <UserProfile_Exam_1
        user={{
          name: "John Doe",
          age: 30,
          email: "john.doe@example.com",
          education: "Website/Applications Developer",
          address: "123 Main St, Anytown, USA",
          hobbies: ["reading", "painting", "cooking"],
        }}
      />
    </div>
  );
};

export default App;
