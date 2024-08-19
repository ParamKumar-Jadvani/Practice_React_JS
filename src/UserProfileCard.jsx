import React, { useEffect } from "react";
import "./UserProfileCard.css";

const UserProfileCard = ({ name, age, bio, location, profilePicture }) => {
  const handleFollow = () => {
    const followButton = document.getElementById("follow-button");
    if (followButton.textContent === "Follow") {
      followButton.textContent = "Unfollow";
    } else {
      followButton.textContent = "Follow";
    }
  };

  const handleBioChange = (e) => {
    const bioText = document.getElementById("bio-text");
    bioText.textContent = e.target.value;
  };

  const handleBioSave = () => {
    const bioText = document.getElementById("bio-text");
    const bioSection = document.getElementById("bio-section");
    const bioEdit = document.getElementById("bio-edit");

    bioSection.style.display = "block";
    bioEdit.style.display = "none";

    const textarea = document.getElementById("bio-textarea");
    bioText.textContent = textarea.value;

    // Reset truncated state
    if (textarea.value.length > 100) {
      document.getElementById("read-more-button").style.display = "inline";
    } else {
      document.getElementById("read-more-button").style.display = "none";
    }
  };

  const handleToggleBio = () => {
    const bioText = document.getElementById("bio-text");
    const readMoreButton = document.getElementById("read-more-button");

    if (bioText.textContent.length > 100) {
      if (bioText.textContent.endsWith("...")) {
        bioText.textContent = bioText.getAttribute("data-full-bio");
        readMoreButton.textContent = "Show less";
      } else {
        bioText.textContent = bioText.textContent.substring(0, 100) + "...";
        readMoreButton.textContent = "Read more";
      }
    }
  };

  const handleAddComment = () => {
    const newCommentInput = document.getElementById("new-comment");
    const commentsList = document.getElementById("comments-list");

    const commentText = newCommentInput.value;
    if (commentText) {
      const timestamp = new Date().toLocaleString();
      const commentItem = document.createElement("li");

      commentItem.innerHTML = `
        <span>${commentText}</span>
        <span>${timestamp}</span>
        <button onclick="handleDeleteComment(${commentsList.children.length})">Delete</button>
      `;
      commentsList.appendChild(commentItem);

      newCommentInput.value = "";
    }
  };

  const handleDeleteComment = (index) => {
    const commentsList = document.getElementById("comments-list");
    commentsList.removeChild(commentsList.children[index]);
  };

  // Initialize bio text and read more button
  useEffect(() => {
    const bioText = document.getElementById("bio-text");
    bioText.textContent =
      bio.length > 100 ? bio.substring(0, 100) + "..." : bio;
    bioText.setAttribute("data-full-bio", bio);

    const readMoreButton = document.getElementById("read-more-button");
    if (bio.length > 100) {
      readMoreButton.style.display = "inline";
    } else {
      readMoreButton.style.display = "none";
    }
  }, [bio]);

  return (
    <div className="user-profile-card">
      <img src={profilePicture} alt={`${name}'s profile`} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <div className="bio-section" id="bio-section">
        <p id="bio-text"></p>
        <button id="read-more-button" onClick={handleToggleBio}>
          Read more
        </button>
        <button
          onClick={() =>
            (document.getElementById("bio-edit").style.display = "block")
          }
        >
          Edit
        </button>
      </div>
      <div id="bio-edit" style={{ display: "none" }}>
        <textarea id="bio-textarea" defaultValue={bio} />
        <button onClick={handleBioSave}>Save</button>
      </div>
      <button id="follow-button" onClick={handleFollow}>
        Follow
      </button>
      <div className="comments-section">
        <h3>Comments</h3>
        <ul id="comments-list"></ul>
        <input type="text" id="new-comment" placeholder="Add a comment" />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default UserProfileCard;
