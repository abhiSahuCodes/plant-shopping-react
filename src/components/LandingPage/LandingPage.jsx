import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="left-section">
          <h1>Welcome to Paradise Nursery</h1>
          <Link to="/products" className="cta-button">
            Get Started
          </Link>
        </div>
        <div className="right-section">
          <p className="intro-text">
            Discover our carefully curated collection of beautiful houseplants that bring life and freshness to your space. 
            From air-purifying varieties to aromatic herbs, we have the perfect plant for every home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;