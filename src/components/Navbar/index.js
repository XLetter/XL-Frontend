import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
import logo from '../../assets/logo.png';
import './NavbarElements.css';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <img src={logo} classname="img" alt="logo" />
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/original" activeStyle>
                    XL Original
                </NavLink>
                <NavLink to="/series" activeStyle>
                    XL Series
                </NavLink>
                <NavLink to="/marketplace" activeStyle>
                    Marketplace
                </NavLink>
                <NavLink to="/mypage" activeStyle>
                    My Page
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="search">Search</NavBtnLink>
            </NavBtn>
            <NavBtn>
                <NavBtnLink to="profile">Profile</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  );
};

export default Navbar;