import React from 'react';
import './nowtrend.css';
import Grid from '../../../Grid/Grid';
import requests from '../../../requests/requests';
import { Bars,Nav,Nav_Btn_1,NavBtn_1Link, NavMenu,NavLink} from "../../../components/Navbar/NavbarElements";

function NowTrend(){
  return(
    <div className="nowtrend">
      <div style={{"height":"30px"}}></div>
      <table className={"table"}>
        <tr>
          <td>
            <input type="text" className={'input-sm'} placeholder={"작품을 입력하세요"} 
            search/>
            <button>검색</button>
          </td>
        </tr>
      </table>
      
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
        title="최신 트렌드"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} 
      />
    </div>
  );
}

export default NowTrend;