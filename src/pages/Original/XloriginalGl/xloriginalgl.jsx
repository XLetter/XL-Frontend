import React from 'react';
import './xloriginalgl.css';
import requests from '../../../requests/requests';
import Grid from '../../../Grid/Grid';
import {Nav,NavMenu,NavLink} from '../../../components/Navbar/NavbarElements'

function XloriginalGl(){
    return(
      <div className="xloriginalgl">
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
        title="XL Original GL"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true} 
        />
    </div>
  );
}

export default XloriginalGl;