import React from "react";
import "./UserProfile_Exam_1.css";

const UserProfile_Exam_1 = (props) => {
  const { user } = props;
  return (
    <div>
      <div className="user-profile">
        <div className="profile-header">
          <img src={user.image} alt="User Image" className="profile-image" />
          <h1 className="profile-name"> {user.name}</h1>
        </div>
        <div className="profile-info">
          <p className="profile-education">Education : {user.education}</p>
          <p className="profile-occupation">Hobbies : {user.hobbies}</p>
          <p className="profile-location">Address : {user.address}</p>
        </div>
        <div className="profile-bio">
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile_Exam_1;
