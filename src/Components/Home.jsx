import Hero from './hero/Hero';
import Carousel from './carousel/carousel';
import Hybrid from './hybrid/hybrid';
import Hero2 from './hero/hero2';
import Carousel2 from './carousel/carousel2';
import Hybrid2 from './hybrid/hybrid2';
import Hero3 from './hero/hero3';
import Carousel3 from './carousel/carousel3';
import Hybrid3 from './hybrid/hybrid3';
const Home = () => {
  return (

    <div className="Home">
        
    {/* Hero */}
    <Hero />
    {/* Deals */}
    <Carousel />
    <Hybrid />
    <Hero2 />
    <Carousel2 />
    <Hybrid2 />
    <Hero3 />
    <Carousel3 />
    <Hybrid3 />
    </div>
    
  )
}

export default Home