import HeroSection from '../HomePage/HeroSection'
import aboutHeroImage from '../../images/About.jpg'

const About = () => {
  const data = {
    name: 'About me',
    image: `${aboutHeroImage}`,
  };
  // setValue();

  return (
    <>
      <HeroSection {...data} />
    </>
  )
}

export default About
