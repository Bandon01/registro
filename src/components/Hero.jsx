import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
      <h1>WE HELP YOUR BUSINESS</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <Link to="/services" className="btn">LEARN MORE</Link>
    </div>
  );
}

export default Hero;