import React from 'react';
import './XLOriginalGL.css';
import requests from '../../../requests/Requests';
import Grid from '../../../grid/Grid';
import { Nav, NavMenu, NavLink } from '../../../components/navBar/NavbarElements';

function XloriginalGl() {
  return (
    <div className="xloriginalgl">
      <Nav>
        <NavMenu>
          <NavLink to="/original">ALL</NavLink>
          <NavLink to="/xloriginalbl">BL</NavLink>
          <NavLink to="/xloriginalgl">GL</NavLink>
          <NavLink to="/xloriginalhl">HL</NavLink>
        </NavMenu>
      </Nav>
      <div className="gr_or_gl_out">
        <div className="gr_or_gl">
          <Grid title="XL Original GL" fetchUrl={requests.fetchHorrorMovies} isLargeRow={true} />
        </div>
      </div>
    </div>
  );
}

export default XloriginalGl;
