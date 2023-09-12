import React from "react";
import "./Portfolio.css";
import img1 from '../../Assets/Dashboard 1.png'

const Portfolio = () => {
  return (
    <section id="portfolio">

      <h5>Personal Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

        <article className="portfolio_item">


          <div className="portfolio_item-image">

            <img src={img1}></img>
          </div>
          <h3>This is a portfolio item title</h3>

          <a className="btn" target="_blank">Github</a>
          <a className="btn btn-primary" target="_blank">Live Demo</a>
        </article>

        <article className="portfolio_item">


          <div className="portfolio_item-image">

            <img src={img1}></img>
          </div>
          <h3>This is a portfolio item title</h3>

          <a className="btn" target="_blank">Github</a>
          <a className="btn btn-primary" target="_blank">Live Demo</a>
        </article>
        <article className="portfolio_item">


          <div className="portfolio_item-image">

            <img src={img1}></img>
          </div>
          <h3>This is a portfolio item title</h3>

          <a className="btn" target="_blank">Github</a>
          <a className="btn btn-primary" target="_blank">Live Demo</a>
        </article>
        <article className="portfolio_item">


          <div className="portfolio_item-image">

            <img src={img1}></img>
          </div>
          <h3>This is a portfolio item title</h3>

          <a className="btn" target="_blank">Github</a>
          <a className="btn btn-primary" target="_blank">Live Demo</a>
        </article>

        <article className="portfolio_item">


          <div className="portfolio_item-image">

            <img src={img1}></img>
          </div>
          <h3>This is a portfolio item title</h3>

          <a className="btn" target="_blank">Github</a>
          <a className="btn btn-primary" target="_blank">Live Demo</a>
        </article>

        <article className="portfolio_item">


          <div className="portfolio_item-image">

            <img src={img1}></img>
          </div>
          <h3>This is a portfolio item title</h3>

          <div className="portfolio_item-cta">

          <a className="btn" target="_blank">Github</a>
          <a className="btn btn-primary" target="_blank">Live Demo</a>
          </div>

          
        </article>

      </div>

  
      
      
    
    </section>
  );
};

export default Portfolio;
