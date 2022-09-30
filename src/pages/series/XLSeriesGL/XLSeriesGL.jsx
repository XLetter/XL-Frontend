import React from 'react';
import './XLSeriesGL.css';
import requests from '../../../requests/Requests';
import Grid from '../../../grid/Grid';
import {Nav,NavMenu,NavLink} from '../../../components/navBar/NavbarElements'

function XlseriesGl(){
  return(
    <div className="xlseriesgl">
      <Nav> 
        <NavMenu>
          <NavLink to="/series" >
            ALL
          </NavLink>
          <NavLink to="/xlseriesbl" >
            BL
          </NavLink>
          <NavLink to="/xlseriesgl" >
            GL
          </NavLink>
          <NavLink to="/xlserieshl" >
            HL
          </NavLink>   
        </NavMenu>    
      </Nav>
      <div className=' .gr_sr_gl'>
      <Grid
        title="XL Series GL"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true} 
      /></div>
    </div>
  );
}

export default XlseriesGl;
