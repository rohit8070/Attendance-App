import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our App</h1>
          <p>
            Discover the best way to manage your class attendance and
            performance with our intuitive app.
          </p>
          <button className="join-us-btn">Join Us</button>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/500"
            alt="App overview"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <img src="https://via.placeholder.com/150" alt="Feature 1" />
            <h3>Easy to Use</h3>
            <p>Our app is designed to be intuitive and user-friendly.</p>
          </div>
          <div className="feature-item">
            <img src="https://via.placeholder.com/150" alt="Feature 2" />
            <h3>Accurate Reports</h3>
            <p>Generate accurate attendance and performance reports.</p>
          </div>
          <div className="feature-item">
            <img src="https://via.placeholder.com/150" alt="Feature 3" />
            <h3>Cross-Platform</h3>
            <p>Use our app on any device, anywhere, anytime.</p>
          </div>
        </div>
      </section>

      {/* What is Our App Section */}
      <section className="what-is-app">
        <h2>What is Our App?</h2>
        <div className="app-description">
          <p>
            Our app is a comprehensive solution for managing attendance,
            tracking performance, and generating reports. Whether you're a
            teacher or a student, our app offers powerful tools to simplify your
            tasks.
          </p>
          <p>
            From easy attendance marking to detailed performance reports, our
            app covers it all.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-to-action">
        <h2>Ready to Get Started?</h2>
        <button className="join-us-btn">Join Us Now</button>
      </section>
    </div>
  );
};

export default Home;
