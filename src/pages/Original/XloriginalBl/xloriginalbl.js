import React from 'react';
import './xloriginalbl.css';
import requests from '../../../requests/requests';
import Row_add from '../../../Row_add/Row_add';
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
      
      

        <Row_add
        title="XL Original BL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={false} 
        
        
        />
    </div>
  );
}

export default XloriginalBl;