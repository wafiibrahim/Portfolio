/// News.js
import React, { useState, useEffect } from 'react';
import './News.css';

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = '6f460cd9ffed4f549876033a98f153f5'; // Replace with your News API key
  const keyword = 'Web Development'
  const offset = Math.floor(Math.random() * 100);
  const language = 'en'
  const newsEndpoint = `https://newsapi.org/v2/everything?q=${keyword}&offset=${offset}&language=${language}&limit=10&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        

        const response = await fetch(newsEndpoint);
        const data = await response.json();

        // Extract relevant data from the API response
        const articles = data.articles || [];

        setNewsData(articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="news-container">

<h1 id="typewriter-news">Latest News From The World Of Web Development</h1>

     
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="news-slider">
            


          {newsData.map((article) => (
            
            <div key={article.title} className="news-slide">
                
              <strong>{article.title}</strong>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
