import React from "react";

const ImageCard = ({ photo, handleLike, handleDislike }) => {
  return (
    <div className="cardContainer">
      <img src={photo} alt="Goat" />
      <button onClick={() => handleLike(photo)}>Liked</button>
      <button onClick={() => handleDislike(photo)}>Disliked</button>
    </div>
  );
};

export default ImageCard;
