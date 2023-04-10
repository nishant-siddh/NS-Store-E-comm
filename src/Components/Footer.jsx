import { NavLink } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import styled from "styled-components"
import { Button } from "../Styles/Button";


const Footer = () => {

    return (
        <Wrapper>
            <footer>
                <div className="container flexProperty">
                    <div className="footerAbout">
                        <p>FAQ</p>
                        <p>Shipping and Returns</p>
                        <p>Store Policy</p>
                        <p>Payments</p>
                    </div>

                    <div className="contactDetails">
                        <h4>NS Store</h4>
                        <p>+91 123-456-789</p>
                        {/* <input type="tel" value="+91 123-456-789" /> */}
                        <p>Email - abc@gmail.com</p>
                        <div className="footerSocialMediaIcons flexProperty">
                            <BsFacebook />
                            <BsTwitter />
                            <BsInstagram />
                        </div>
                    </div>

                    <div className="footerSubscribe">
                        <p>Subscribe to our Newsletter :</p>
                        <form action="#" className="flexProperty">
                            <input type="email" name="subscribe" placeholder="Enter your email here*" autoComplete="off" required />

                            <NavLink to='/'>
                                <Button type="submit" className='btn'>
                                    Subscribe
                                </Button>
                            </NavLink>

                        </form>
                    </div>

                </div>

                <hr />
                {/* Bottom footer Section */}
                <div className="bottomFooterContainer">
                    <div className="bottomFooter flexProperty">
                        <p>@{new Date().getFullYear()} NS Store. All Rights Reserved</p>
                        <div>
                            <p>Privacy Policy</p>
                            <p>*Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    footer{
        width: 100%;
        background-color: ${({ theme }) => theme.colors.baseColor};
        margin-top: 8rem;
    }


    .container{
        padding: 3rem 1.5rem;
        justify-content: space-around;
        gap: 2rem;
        max-width: 75rem;
        margin: 0 auto;
    }

    .footerAbout>*, .contactDetails>*, .footerSubscribe>*{
        margin: 0.7rem 0;
        font-size: 1.1rem;
    }

    form{
        flex-direction: column;
        align-items: flex-start;

        input{
            width: 100%;
            padding: 0.5rem 0.4rem;
            outline: none;
            border: 1px solid black;
            background: transparent;
            color: white;

            ::placeholder{
                color: white;
            }
        }
    }

    .footerSocialMediaIcons{
        justify-content: flex-start;
        gap: 1rem;
    }

    .bottomFooterContainer{
        padding: 1rem;

        .bottomFooter{
            max-width: 40rem;
            margin: 0 auto;
            justify-content: space-between;
            gap: 1rem;
        }
    }

    hr{
        background-color: ${({ theme }) => theme.colors.blackColor};
    }

    .btn{
        background-color: ${({ theme }) => theme.colors.blackColor};

        &:hover,
        &:active {
            background-color: #1b1b1c;
        }
    }
`;

export default Footer
