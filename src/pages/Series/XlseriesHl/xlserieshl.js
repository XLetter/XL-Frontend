import React from 'react';
import './xlserieshl.css';
import requests from '../../../requests/requests';
import Row_add from '../../../Row_add/Row_add';
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
      

        <Row_add
        title="XLSeries HL"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={false} 
        
        
        />
    </div>
  );
}

export default XlseriesHl;