// GiphyComponent.js
import React, { useState, useEffect } from 'react';
import './Giphy.css';

const Giphy = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const apiKey = 'bRLLvyPPXPNSzFaVwKNDbKICkiCWz0t8'; // Replace with your Giphy API key

    const getTrendingGIFs = async () => {
      try {
        // Generate a random offset to get different GIFs each time
        const offset = Math.floor(Math.random() * 100);
        
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=memes&limit=5&offset=${offset}`
        );

        const data = await response.json();
        setGifs(data.data);
      } catch (error) {
        console.error('Error fetching GIFs:', error);
      }
    };

    getTrendingGIFs();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="gif-container">
      {gifs.map((gif) => (
        <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
      ))}
    </div>
  );
};

export default Giphy;
