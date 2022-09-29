import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
import logo from '../../assets/image/xletter_logo.svg';
import './NavbarElements.css';
import user_profile_ from '../../assets/user_profile_.png';





const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <img src={xletter_logo} classname="img" alt="xletter_logo" />
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
                <NavLink to="/mypage/wallet" activeStyle>
                    My Page
                </NavLink>
            </NavMenu>
            <table className={"table"}>
                <tr>
                    <td>
                        <input type="text" className={'input-sm'} placeholder={"작품을 입력하세요"} search />
                        <button>
                            <NavLink to="/searchpage">검색</NavLink></button>
                            
                    </td>
                </tr>
            </table>
        
            <NavBtn>
                <NavBtnLink to="mypage/wallet"><img src={user_profile_} classname="img_2" alt="profile" /></NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  );
};

export default Navbar;
