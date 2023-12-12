import React from "react";
import "./Portfolio.css";
import img1 from '../../Assets/Dashboard 1.png'

import img2 from '../../Assets/Dashboard 2.png'

import img3 from '../../Assets/Dashboard 3.png'

import img4 from '../../Assets/Dashboard 4.png'

import img5 from '../../Assets/Dashboard 5.png'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Personal Projects</h5>
      <br></br>
      <h2>Portfolio</h2>
      <br></br>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img1} alt="Netflix Dashboard" />
          </div>
          <div className="portfolio-item-details">
            <h3>Netflix Dashboard</h3>
            <a href="https://public.tableau.com/views/NetflixDashboard_16931821773880/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View on Tableau
            </a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img2} alt="Airbnb Dashboard" />
          </div>
          <div className="portfolio-item-details">
            <h3>Airbnb Dashboard</h3>
            <a href="https://public.tableau.com/views/Airbnb_16930067487060/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View on Tableau
            </a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img3} alt="Wikipedia Scraper" />
          </div>
          <div className="portfolio-item-details">
            <h3>Wikipedia Scraper</h3>
            <a href="https://github.com/wafiibrahim/Wikipedia-Scraper" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View on GitHub
            </a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img4} alt="Amazon Scraper" />
          </div>
          <div className="portfolio-item-details">
            <h3>Amazon Scraper</h3>
            <a href="https://github.com/wafiibrahim/Amazon-Scraper" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View on GitHub
            </a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={img5} alt="Iris Classification Model" />
          </div>
          <div className="portfolio-item-details">
            <h3>Iris Classification Model</h3>
            <a href="https://github.com/wafiibrahim/Iris-Classification" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View on GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;