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
      <div className='row_or_out'>
      <div className='row_or'>
      <div className='row_or_in'>
      <Row
        title="New XL Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      /></div></div>
      <div className='row_or'><div className='row_or_in'><Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true}/></div></div>
      <div className='row_or'>
      <div className='row_or_in'><Row title="Top Rated" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div>
      <div className='row_or'>
      <div className='row_or_in'><Row title="XL Originals-Korea" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div>
      <div className='row_or'>
      <div className='row_or_in'><Row title="XL Originals popular" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div>
      <div className='row_or'>
      <div className='row_or_in'><Row title="XL Originals-BL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div>
      <div className='row_or'>
      <div className='row_or_in'><Row title="XL Originals-GL"fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} /></div></div>
      <div className='row_or'>
      <div className='row_or_in'><Row title="XL Originals-HL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div>
    </div>
    </div>
  );
}

export default Original;
