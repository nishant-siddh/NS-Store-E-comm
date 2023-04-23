import FeaturedProducts from './FeaturedProducts';
import HeroSection from './HeroSection';
import homeHeroImage from '../../images/hero-image2.jpg';

const Home = () => {

  const data = {
    name: 'NS Store',
    image: `${homeHeroImage}`,
  }

  return (
    <>
      <HeroSection {...data} />
      <FeaturedProducts />
    </>
  )
}

export default Home

