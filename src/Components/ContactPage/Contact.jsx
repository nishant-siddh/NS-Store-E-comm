import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactFrom'

const Contact = () => {

  return (
    <Wrapper>
      <h2 className='contactHeading'>Feel Free to <span className='heading_text'>Contact Us</span></h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13998.610148733625!2d77.25157977897442!3d28.700038766874982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc3e6e1a2eaf%3A0x6e7d55f9d5d972d!2sBhajanpura%2C%20Shahdara%2C%20Delhi!5e0!3m2!1sen!2sin!4v1673522333434!5m2!1sen!2sin" title='1' width="100%" height="400" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <ContactForm />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .contactHeading{
    margin: 10px;
    text-align: center;
  }

  h2{
    padding: 1rem 0;
  }
`;

export default Contact
