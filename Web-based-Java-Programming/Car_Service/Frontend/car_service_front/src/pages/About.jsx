import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-hero">
        <h1>About Car Service Hub</h1>
        <p>Reliable. Affordable. Professional Car Services You Can Trust</p>
      </div>

      <div className="about-content">
        <section>
          <h2>Our Mission</h2>
          <p>
            At Car Service Hub, our mission is to provide top-notch, trustworthy car services
            to every customer. We strive to make vehicle maintenance and repair stress-free,
            transparent, and easily accessible for everyone.
          </p>
        </section>

        <section>
          <h2>Our Team</h2>
          <p>
            Our team includes certified mechanics, customer care experts, and tech developers
            who work together to ensure seamless booking, professional service, and consistent
            customer satisfaction. We're not just fixing cars — we're building trust.
          </p>
        </section>

        <section>
          <h2>Why Choose Us?</h2>
          <p>
            Whether it's a quick oil change, AC repair, or a full engine check — we’ve got you covered.
            With convenient scheduling, fair pricing, and high-quality service, Car Service Hub is your one-stop solution.
          </p>
        </section>
      </div>

      <div className="card-section">
        <div className="info-card">
          <img src="src/assets/images/rutuja.jpg" alt="Rutuja" />
          <h3>Rutuja Shinde</h3>
          <h4>( Frontend Developer )</h4>
          <p>
            Designs beautiful and user-friendly interfaces using React. Rutuja ensures that users enjoy a smooth experience across all devices.
          </p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rutujashinde2055@gmail.com" target="_blank">rutujashinde2055@gmail.com</a><br />
          🔗<a href="https://www.linkedin.com/in/rutuja-shinde-09bb1322b/" target="_blank"> LinkedIn </a> 🔗<a href="https://github.com/RutujaDAC/FEB25" target="_blank"> Github </a>
        </div>

        <div className="info-card">
          <img src="src/assets/images/amol.jpg" alt="Amol" />
          <h3>Amol Gavit</h3>
          <h4>( Backend Developer )</h4>
          <p>
            Handles the backend logic, APIs, and database operations. Amol ensures secure and efficient server-side functionality for the entire platform.
          </p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amolgavit158121@gmail.com" target="_blank">amolgavit158121@gmail.com</a><br />
          🔗<a href="https://www.linkedin.com/in/amolgavit26/" target="_blank"> LinkedIn </a> 🔗<a href="https://github.com/amolgavit26" target="_blank"> Github </a>
        </div>

      </div>
    </div>
  );
};

export default About;
