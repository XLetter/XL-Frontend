import React, {useState} from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import xletter_logo from '../../assets/image/xletter_logo.svg';
import './NavbarElements.css';
import user_profile_ from '../../assets/image/user_profile_.png';
import axios from '../../axios/Axios';

async function search(searchKeyword) {
    try {
    
    
    
      const result = await axios(
        `${process.env.API_HOST}/search?keyword=${searchKeyword}`
      ).then((res)=>res.data)

      return result
    } catch (error) {
    return "error"
    }
};






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
                        <input value={input} onchange={onChangeAction}  type="text" className={'input-sm'} placeholder={"Search!!"} search />
                            
                            <button id='searchBtn' onClick={async ()=> search(<input />)}>
                                <NavLink to="/SearchPage">search</NavLink>
                            </button>
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
