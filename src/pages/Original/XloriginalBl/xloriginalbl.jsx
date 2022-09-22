import React from 'react';
import './xloriginalbl.css';
import requests from '../../../requests/requests';
import Grid from '../../../Grid/Grid';
import {Nav,NavMenu,NavLink} from '../../../components/Navbar/NavbarElements'

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
        <Grid
        title="XL Original BL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
    </div>
  );
}

export default XloriginalBl;