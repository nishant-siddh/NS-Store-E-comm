import React, { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/nsLogo2.jpg";
import CartIcons from "../Cart Section/CartIcons";
import { MdConveyorBelt } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { RiContactsFill } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../../Styles/Button";

const Navbar = () => {

    const [menuIcon, setMenuIcon] = useState(false);
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <>
            <Wrapper>
                <div className={menuIcon ? 'navigationBar active' : 'navigationBar'}>
                    <NavLink to='/'><img src={logo} alt="Logo" className="logo" /></NavLink>
                    <ul className="navigationList flexProperty">
                        <li><NavLink className="nav-link" onClick={() => setMenuIcon(false)} aria-current="page" to="/"><span>Home</span> <HiHome /></NavLink></li>
                        <li><NavLink className="nav-link" onClick={() => setMenuIcon(false)} to="/about"><span>About</span></NavLink></li>
                        <li><NavLink className="nav-link" onClick={() => setMenuIcon(false)} to="/products"><span>Product</span> <MdConveyorBelt /></NavLink></li>
                        <li><NavLink className="nav-link" onClick={() => setMenuIcon(false)} to="/contact"><span>Contact Us</span> <RiContactsFill /></NavLink></li>

                        {isAuthenticated && <p className="userName">{user.name}</p>}

                        {!isAuthenticated ? 
                            (
                                <li>
                                    <Button className="loginBtn" onClick={() => loginWithRedirect()}>
                                        Log In
                                    </Button>
                                </li>
                            ) : (
                                <li>
                                    <Button className="logoutBtn"  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        Log Out
                                    </Button>
                                </li>
                            )
                        }

                        <li>
                            <CartIcons setMenuIcon={setMenuIcon} />
                        </li>
                    </ul>


                    <div className="mobileMenuBtn">
                        <CgMenu className="mobileMenuIcon openMenuIcon" onClick={() => setMenuIcon(true)} />
                        <CgClose className="mobileMenuIcon closeMenuOutline" onClick={() => setMenuIcon(false)} />
                    </div>

                </div>
                <hr />
            </Wrapper>
        </>
    );
}



const Wrapper = styled.nav`
    
    .navigationBar {
        max-width: 75rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        background-color: ${({theme}) => theme.colors.blackColor};
        z-index: 999;

        .navigationList {
            list-style: none;
            align-items: center;
            gap: 20px;

            .userName{
                font-size: 0.9rem;
            }

            li{
                .loginBtn, .logoutBtn{
                    margin-top: 0;
                }
                .nav-link {
                    &:link,
                    &:visited{
                        display: inline-block;
                        text-decoration: none;
                        transition: color 0.2s linear;
                    }
                    
                    &:hover{
                        color: ${({ theme }) => theme.colors.baseColor};
                    }
                }
            }
        }
    }

    .mobileMenuBtn{
        display: none;
        position: relative;
        cursor: pointer;

        .mobileMenuIcon{
            position: absolute;
            font-size: 1.5rem;
            top: 50%;
            right: 20%;
            translate: -20% -50%;
        }
    }

    .closeMenuOutline{
        display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .logo{
            max-width: 10rem;
            min-width: 5rem;
        }

        .navigationBar{    
            .navigationList{
            }
        }

        .mobileMenuBtn{
            display: inline-block;
            z-index: 9999;
        }

        .active .mobileMenuIcon{
            display: none;
        }

        .active .closeMenuOutline{
            display: inline-block;
        }

        .navigationBar{
            .navigationList{
                width: 70vw;
                height: 100vh;
                position: fixed;
                padding-top: 70px;
                top: 0;
                right: 0;
                background-color: ${({theme}) => theme.colors.baseColor};
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: column;
                visibility: hidden;
                opacity: 0;
                transition: all 0.2s linear;

                li > .nav-link{
                    transition: color 0.2s linear;
                
                    &:hover{
                        color: ${({theme}) => theme.colors.blackColor};
                    }
                }
            }

        }

        .active .navigationList{
            visibility: visible;
            opacity: 1;
            z-index: 999;
            transform-origin: right;
            transition: all 0.2s linear;
        }
    }
`;

export default Navbar