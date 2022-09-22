import React from 'react';
import './xloriginalhl.css';
import requests from '../../../requests/requests';
import Grid from '../../../Grid/Grid';
import {Nav,NavMenu,NavLink} from '../../../components/Navbar/NavbarElements'


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

        <Grid
        title="XL Original HL"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true} 
        />
    </div>
  );
}

export default XloriginalHl;