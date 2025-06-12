import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <div>
          <h1 className="display-4">Welcome to Car Service Hub</h1>
          <p className="lead">Your one-stop solution for reliable, affordable car services.</p>
          <a href="#services" className="btn btn-lg mt-3">Explore Services</a>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section id="services" className="container my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval={4000}>
          <Carousel.Item>
            <div className="carousel-item-wrapper">
              <img className="background-img blurred-img" src="src/assets/images/engine.png" alt="Engine Check" />
              <div className="carousel-caption-centered">
                <h3>Engine Check</h3>
                <p>Comprehensive diagnostics to keep your car running smoothly.</p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-wrapper">
              <img className="background-img blurred-img" src="src/assets/images/ac.jpg" alt="Oil Change" />
              <div className="carousel-caption-centered">
                <h3>Oil Change</h3>
                <p>Quick and efficient oil change by certified mechanics.</p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-wrapper">
              <img className="background-img blurred-img" src="src/assets/images/service.png" alt="AC Repair" />
              <div className="carousel-caption-centered">
                <h3>AC Repair</h3>
                <p>Stay cool with expert air conditioning services.</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Home;
