import React from 'react';
import './XLOriginalHL.css';
import requests from '../../../requests/Requests';
import Grid from '../../../grid/Grid';
import {Nav,NavMenu,NavLink} from '../../../components/navBar/NavbarElements'


function XloriginalHl(){
    return(
      <div className="xloriginalhl">
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
        <div className='gr_or_hl_out'>
        <div className='gr_or_hl'>
        <Grid
        title="XL Original HL"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true} 
        /></div></div>
    </div>
    
  );
}

export default XloriginalHl;
