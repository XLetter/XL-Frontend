import React, { useEffect, useState } from 'react';
import './Marketplace.css';
import { Bars, Nav, Nav_Btn_1, NavBtn_1Link, NavMenu, NavLink } from "../../components/navBar/NavbarElements";
import Row from '../../row/Row';
import requests from '../../requests/Requests';
import Banner from '../../components/banner/marketplaceBanner/MarketplaceBanner';

import { getDefaultNormalizer } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { API_URL, API_KEY } from '../../components/Config';
import useSearchApi from '../searchPage/search';

function Marketplace(){

  const navigate = useNavigate();
  const handleClick = () => navigate('/NFTDetailPage');

  return(
    <div className="marketplace">
      <Banner />

      <div style={{"height":"30px"}}></div>
      <table className={"table"}>
        <tr>
          <td>
            <input type="text" className={'input-sm'} placeholder={"작품을 입력하세요"} 
             search/>
            <button>검색<useSearchApi/></button>
            
            <Nav_Btn_1>
          <NavBtn_1Link to="My NFT">My NFT</NavBtn_1Link>
        </Nav_Btn_1>
       
          </td>
        </tr>
      </table>
      
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/nowtrend" >
            실시간 거래 NFT
          </NavLink>
          <NavLink to="/collection" >
            XL Series NFT
          </NavLink>
          <NavLink to="/xloriginalnft" >
            XL Original 엔딩 NFT
          </NavLink>
        </NavMenu>
            
        
      </Nav>

      <button onClick={handleClick}>NFT detail page</button>
      <div className="Row_mp_1">
      <Row 
        title="Recent Selling"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      /></div>
      <div className="Row_mp_2">
      <Row  title="Novel Collection" fetchUrl={requests.fetchTrending} isLargeRow={true}/></div>
      <div className="Row_mp_3">
      <Row title="New Nft" fetchUrl={requests.fetchTopRated} isLargeRow={true}/>
      </div>
      </div>

    
  );
}

export default Marketplace;
