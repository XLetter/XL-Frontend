import React from 'react';
import './XLOriginalBL.css';
import requests from '../../../requests/Requests';
import Grid from '../../../grid/Grid';
import {Nav,NavMenu,NavLink} from '../../../components/navBar/NavbarElements'

function XloriginalBl(){
    return(
      <div className="xloriginalbl">
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
        <div className='gr_or_bl'>
        <Grid
        title="XL Original BL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
        </div>
    </div>
  );
}

export default XloriginalBl;
