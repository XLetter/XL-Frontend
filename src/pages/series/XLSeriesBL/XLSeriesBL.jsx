import React from 'react';
import './XLSeriesBL.css';
import requests from '../../../requests/Requests';
import Grid from '../../../grid/Grid';
import { Nav, NavMenu, NavLink } from '../../../components/navBar/NavbarElements';

function XlseriesBl() {
  return (
    <div className="xlseriesbl">
      <Nav>
        <NavMenu>
          <NavLink to="/series">ALL</NavLink>
          <NavLink to="/xlseriesbl">BL</NavLink>
          <NavLink to="/xlseriesgl">GL</NavLink>
          <NavLink to="/xlserieshl">HL</NavLink>
        </NavMenu>
      </Nav>
      <div className="gr_sr_bl_out">
        <div className="gr_sr_bl">
          <Grid title="XL Series BL" fetchUrl={requests.fetchHorrorMovies} isLargeRow={true} />
        </div>
      </div>
    </div>
  );
}

export default XlseriesBl;
