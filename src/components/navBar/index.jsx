import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
import xletter_logo from '../../assets/image/xletter_logo.svg';
import './NavbarElements.css';
import user_profile_ from '../../assets/image/user_profile_.png';






const Navbar = () => {
  return (
   
        <Nav>
            <NavLink to="/">
                <img src={xletter_logo} classname="img" alt="xletter_logo" />
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/" >
                    Home
                </NavLink>
                <NavLink to="/original" >
                    XL Original
                </NavLink>
                <NavLink to="/series" >
                    XL Series
                </NavLink>
                <NavLink to="/marketplace" >
                    Marketplace
                </NavLink>
                <NavLink to="/mypage/wallet" >
                    My Page
                </NavLink>
            </NavMenu>
            <table className={"table"}>
                <tr>
                    <td>
                        <input type="text" className={'input-sm'} placeholder={"작품을 입력하세요"} search />
                        <button>
                            <NavLink to="/SearchPage">검색</NavLink></button>
                            
                    </td>
                </tr>
            </table>
        
            <NavBtn>
                <NavBtnLink to="/mypage/wallet"><img src={user_profile_} classname="img_2" alt="profile" /></NavBtnLink>
            </NavBtn>
        </Nav>
      
  );
};

export default Navbar;
