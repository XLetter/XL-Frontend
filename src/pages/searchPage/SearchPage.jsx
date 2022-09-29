import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "../../components/navBar/NavbarElements";
import logo from '../../assets/image/logo.svg';
import '../../components/navBar/NavbarElements.css';
import React from 'react';
import '../../grid/Grid.css';
import axios from "../../axios/Axios";
import { Routes, Route } from "react-router-dom";
import useSearchApi from "./search";

<Routes>
  <Route path="searchpage">
    <Route path="searchpage/:movieId" element={<axios />} />
  </Route>
</Routes>;



  
  





const SearchPage= () => {
  return (
  <>        <Nav>
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
                <NavBtnLink to="profile">Profile</NavBtnLink>
            </NavBtn>
        </Nav>
  
          <div>
             <useSearchApi/>
            

          </div>

      
        
    
     </>

  );
};

export default SearchPage
