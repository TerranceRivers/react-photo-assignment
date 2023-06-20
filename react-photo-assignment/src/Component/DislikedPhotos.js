import React from 'react';

const DislikedPhotos = ({ dislikedPhotos }) => {
  return (
    <div className="dislike">
      <h2>Disliked Photos</h2>
      {dislikedPhotos.map((photo, index) => (
        <img key={index} src={photo} alt="Disliked" />
      ))}
    </div>
  );
};

export default DislikedPhotos;
