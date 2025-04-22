import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Testimonial from '../components/Testimonial';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Products />
      <About />
      <Testimonial />
    </div>
  );
}

export default Home