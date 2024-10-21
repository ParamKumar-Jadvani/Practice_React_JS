import React from "react";
import UserProfile from "./UserProfile";
import UserProfile_Exam_1 from "./UserProfile_Exam_1";
import Calculator from "./Calculator";

const App = () => {
  return (
    <div>
      {/* <UserProfile_Exam_1
        user={{
          name: "John Doe",
          age: 30,
          email: "john.doe@example.com",
          education: "Website/Applications Developer",
          address: "123 Main St, Anytown, USA",
          hobbies: ["reading", "painting", "cooking"],
        }}
      /> */}

      <Calculator />
    </div>
  );
};

export default App;
