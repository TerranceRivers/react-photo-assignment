import React from 'react';

const LikedPhotos = ({ likedPhotos }) => {
  return (
    <div className="likes">
      <h2>Liked Photos</h2>
      {likedPhotos.map((photo, index) => (
        <img key={index} src={photo} alt="Liked" />
      ))}
    </div>
  );
};

export default LikedPhotos;
