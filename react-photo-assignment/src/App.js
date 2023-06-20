import React, { useState } from "react";
import "./App.css";
import Container from "./Component/Container";
import DislikedPhotos from "./Component/DislikedPhotos";
import LikedPhotos from "./Component/LikedPhotos";

function App() {
  const photos = [
    "https://images.unsplash.com/photo-1604076150017-48b528308aa3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29hdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1577132380048-051bb5c1027c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdvYXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1588466585717-f8041aec7875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29hdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1584844491721-5ba80ab07121?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1608237652484-b478fac3bf7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdvYXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://plus.unsplash.com/premium_photo-1666622857037-7099ea1121d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdvYXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://media.istockphoto.com/id/1152228525/photo/black-and-brown-daughter-goat-in-close-up-on-madeira-island-full-face-picture.jpg?s=612x612&w=0&k=20&c=4tgab4flDCp8ZHezNu1ouqPLpWnFJ4WzChTQ3vx38-w=",
    "https://media.istockphoto.com/id/165847424/photo/goat.webp?b=1&s=170667a&w=0&k=20&c=AJqrrmwgsCp03Iq5upV5hIpQv3krJjpF9ygeRcMgwp0=",
    "https://media.istockphoto.com/id/899304016/photo/portrait-of-a-goat-in-glasses-showing-tongue.webp?b=1&s=170667a&w=0&k=20&c=ogKJU0O8VgHdwFZWk49dCVlnmiODzuaTbpFeJ1EuCbM=",
    "https://images.unsplash.com/photo-1550348579-959785e820f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdvYXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    // "https://images.unsplash.com/photo-1506076177893-89d54794ef41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    // "https://images.unsplash.com/photo-1608153929527-23b9758b401d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  ];

  const [allPhotos, setAllPhotos] = useState(photos);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  const handleLike = (photo) => {
    setLikes((prevLikes) => [...prevLikes, photo]);
  };

  const handleDislike = (photo) => {
    setDislikes((prevDislikes) => [...prevDislikes, photo]);
  };

  return (
    <div className='App'>
      <div>
        <Container
          photos={allPhotos}
          handleLike={handleLike}
          handleDislike={handleDislike}
        />
      </div>
      <div className='likesContainer'>
        <div className="Likesblock">
          <LikedPhotos likedPhotos={likes} />
        </div>
        <div className="dislikeBlock">
          <DislikedPhotos dislikedPhotos={dislikes} />
        </div>
      </div>
    </div>
  );
}

export default App;
