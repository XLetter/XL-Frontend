import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "../../components/navBar/NavbarElements";
import logo from '../../assets/logo.svg';
import '../../components/navBar/NavbarElements.css';
import React, { useState, useEffect } from 'react';
import '../../grid/Grid.css';
import axios from '../../axios/Axios';
import { Routes, Route, useParams } from "react-router-dom";
import { Axios } from "axios";



<Routes>
    <Route path="home">
        <Route path="instance/:movieId" element={<Axios/>}/>
    </Route>
</Routes>



const Search = (initialSearchKeyword) => {
    const [searchKeyword, setSearchKeyword] = useState(initialSearchKeyword);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
  
        try {
          const result = await axios(
            `${process.env.API_HOST}/search?keyword=${searchKeyword}`
          );
          setData(result.data);
          setIsLoading(false);
        } catch (error) {
          setIsError(true);
        }
      };
      fetchData();
    }, [searchKeyword]);
  
    return [{ data, isLoading, isError }, setSearchKeyword];
  };

const SearchPage= () => {
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
                <NavLink to="/mypage/wallet" activeStyle>
                    My Page
                </NavLink>
            </NavMenu>
            <table className={"table"}>
                <tr>
                    <td>
                        <input type="text" className={'input-sm'} placeholder={"작품을 입력하세요"} search />
                        <button>검색</button>
                    </td>
                </tr>
            </table>
            <NavBtn>
                <NavBtnLink to="profile">Profile</NavBtnLink>
            </NavBtn>
        </Nav>
     
        <Search />
        
        </>

    


  );
};

export default SearchPage
