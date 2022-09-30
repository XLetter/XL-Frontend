import React from 'react';
import './Series.css';
import Row from '../../row/Row';
import requests from '../../requests/Requests';
import { Nav, NavLink, NavMenu} from "../../components/navBar/NavbarElements";

function Series(){
  return(
    <div className="series">
            <Nav>  
        <NavMenu>
          <NavLink to="/series" >
            ALL
          </NavLink>
          <NavLink to="/xlseriesbl" >
            BL
          </NavLink>
          <NavLink to="/xlsereisgl" >
            GL
          </NavLink>
          <NavLink to="/xlserieshl" >
            HL
          </NavLink>    
        </NavMenu>  
      </Nav>
      <div className='row_sr_out'><div className='row_sr'><div className='row_sr_in'>
      <Row
        title="New XL Series"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      /></div></div></div>
      <div className='row_sr_out'><div className='row_sr'><div className='row_sr_in'><Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true}/></div></div></div>
      <div className='row_sr_out'><div className='row_sr'><div className='row_sr_in'><Row title="Top Rated" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div></div>
      <div className='row_sr_out'><div className='row_sr'><div className='row_sr_in'><Row title="XL Originals-Korea" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div></div>
      <div className='row_sr_out'><div className='row_sr'><div className='row_sr_in'><Row title="XL Originals 인기작품" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div></div>
      <div className='row_sr_out'><div className='row_sr'><div className='row_sr_in'><Row title="XL Originals-BL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div></div>
      <div className='row_sr_out'><div className='row_sr'><div className='row_sr_in'><Row title="XL Originals-GL"fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} /></div></div></div>
      <div className='row_sr_out'><div className='row_sr'><div className='row_sr_in'><Row title="XL Originals-HL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/></div></div></div>

    </div>
  );
}

export default Series;
