import React from 'react'
import { Button } from '../../Styles/Button';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const ContactFrom = () => {
    const { isAuthenticated, user } = useAuth0();

    return (
        <Wrapper>
            <div className="formContainer">
                <form className='flexProperty' action="https://formspree.io/f/mrgvgwog" method='POST'>
                    <input type="text" placeholder='Username' value={isAuthenticated ? user.name : ''} name='Username' autoComplete='off' required />

                    <input type="email" name='Email' placeholder='Enter your email' value={isAuthenticated ? user.email : ''}  autoComplete='off' required />

                    <textarea name="Message" cols="20" rows="10" placeholder='Enter your message' autoComplete='off' required></textarea>

                    <Button type='submit' className='btn'>
                        Send
                    </Button>
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .formContainer{
        margin: 2rem auto;
        padding: 0 1rem;
    }

    form{
        max-width: 35rem;
        margin: 0 auto;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        input, textarea{
        padding: 0.7rem 0.9rem;
        width: 100%;
        border-radius: 5px;
        color: #090808d6;
        font-size: 0.9rem;
        }
    }
`;

export default ContactFrom
