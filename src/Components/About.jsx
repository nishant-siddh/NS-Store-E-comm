import React from 'react'
import HeroSection from './HeroSection'
import aboutHeroImage from '../images/About.jpg'
// import { useProductContext } from '../Context/Product';

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
