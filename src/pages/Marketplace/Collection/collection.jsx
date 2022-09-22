import React from 'react';
import './collection.css';
import Grid from '../../../Grid/Grid';
import requests from '../../../requests/requests';
import { Bars,Nav,Nav_Btn_1,NavBtn_1Link, NavMenu,NavLink} from "../../../components/Navbar/NavbarElements";


function Collection(){
  return(
    <div className="collection">
      <div style={{"height":"30px"}}>
        <table className={"table"}>
          <tr>
            <td>
              <input type="text" className={'input-sm'} placeholder={"작품을 입력하세요"} search />
              <button>검색</button>
            </td>
          </tr>
        </table>
      </div>
      
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/nowtrend" >
            실시간 거래NFT
          </NavLink>
          <NavLink to="/collection" >
            XL Series NFT
          </NavLink>
          <NavLink to="/xloriginalnft" >
            XL Original 엔딩 NFT
          </NavLink> 
        </NavMenu>
          
        <Nav_Btn_1>
          <NavBtn_1Link to="My NFT">My NFT</NavBtn_1Link>
        </Nav_Btn_1>
      </Nav>
    
      <Grid
      title="XL 시리즈 NFT"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true} 
      />
    </div>
  );
}

export default Collection;