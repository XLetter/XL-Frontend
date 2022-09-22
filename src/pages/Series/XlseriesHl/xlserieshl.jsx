import React from 'react';
import './xlserieshl.css';
import requests from '../../../requests/requests';
import Grid from '../../../Grid/Grid';
import {Nav,NavMenu,NavLink} from '../../../components/Navbar/NavbarElements'

function XlseriesHl(){
  return(
    <div className="xlserieshl">
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
      
      <Grid
        title="XLSeries HL"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true} 
      />
    </div>
  );
}

export default XlseriesHl;