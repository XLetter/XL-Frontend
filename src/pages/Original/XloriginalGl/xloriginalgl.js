import React from 'react';
import './xloriginalgl.css';
import requests from '../../../requests/requests';
import Row_add from '../../../Row_add/Row_add';
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
      

        <Row_add
        title="XL Original GL"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true} 
        
        
        />
    </div>
  );
}

export default XloriginalGl;