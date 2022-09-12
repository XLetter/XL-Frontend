import React from 'react';
import './Marketplace.css';
import { Nav, NavBtn, NavBtnLink } from "../../components/Navbar/NavbarElements";
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
            <input type="text" className={'input-sm'} size={'25'} placdholder={"Search"} onChange={handleChange}/>
          </td>
        </tr>
      </table>
      
      <button>My NFT</button>
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