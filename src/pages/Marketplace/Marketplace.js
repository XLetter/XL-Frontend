import React from 'react';
import './Marketplace.css';
import { Bars,Nav,Nav_Btn_1,NavBtn_1Link, NavMenu,NavLink} from "../../components/Navbar/NavbarElements";
import Row from '../../Row/Row';
import requests from '../../requests/requests';
import Banner from './BannerMarketplace/bannermarketplace'

const handleChange =(e)=>{
  console.log(e.target.value);
}



function Marketplace(){
  return(
    <div className="marketplace">
      <Banner />
      <div style={{"height":"30px"}}></div>
      <table className={"table"}>
        <tr>
          <td>
            <input type="text" className={'input-sm'} placdholder={"검색어를 입력하세요"}  
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
      
      <Row
        title="실시간 거래작품"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
     />
     <Row title="작품별 Collection" fetchUrl={requests.fetchTrending} />
      <Row title="최근 추가된 Collection" fetchUrl={requests.fetchTopRated} />
      

    </div>
    
  );
}
export default Marketplace;