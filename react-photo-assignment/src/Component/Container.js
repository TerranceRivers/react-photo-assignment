import React from "react";
import ImageCard from "./ImageCard";

const Container = ({ photos, handleLike, handleDislike }) => {
  return (
    <div className="imagecard">
      {photos.map((photo, index) => (
        <ImageCard key={index} photo={photo} handleLike={handleLike} handleDislike={handleDislike} />
      ))}
    </div>
  );
};

export default Container;