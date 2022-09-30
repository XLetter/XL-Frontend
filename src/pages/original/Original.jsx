import React from 'react';
import './Original.css';
import Row from '../../row/Row';
import requests from '../../requests/Requests';
import { Nav, NavLink, NavMenu} from "../../components/navBar/NavbarElements";

function Original(){
  return(
    <div className="original">
      <Nav>  
        <NavMenu>
          <NavLink to="/original" >
            ALL
          </NavLink>
          <NavLink to="/xloriginalbl" >
            BL
          </NavLink>
          <NavLink to="/xloriginalgl" >
            GL
          </NavLink>
          <NavLink to="/xloriginalhl" >
            HL
          </NavLink>    
        </NavMenu>  
      </Nav>
      <div className='row_or_1'>
      <div className='row_or_1_in'>
      <Row
        title="New XL Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      /></div></div>
      <div className='row_or_2'><div className='row_or_2_in'><Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true}/></div></div>
      <div className='row_or_3'><div className='row_or_3_in'><Row title="Top Rated" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div>
      <div className='row_or_4'><div className='row_or_4_in'><Row title="XL Originals-Korea" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div>
      <div className='row_or_5'><div className='row_or_5_in'><Row title="XL Originals 인기작품" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div>
      <div className='row_or_6'><div className='row_or_6_in'><Row title="XL Originals-BL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div>
      <div className='row_or_7'><div className='row_or_7_in'><Row title="XL Originals-GL"fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} /></div></div>
      <div className='row_or_8'><div className='row_or_8_in'><Row title="XL Originals-HL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div>

    </div>
  );
}

export default Original;
