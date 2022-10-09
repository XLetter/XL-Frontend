import React from 'react';
import './XLSeriesGL.css';
import requests from '../../../requests/Requests';
import Grid from '../../../grid/Grid';
import { Nav, NavMenu, NavLink } from '../../../components/navBar/NavbarElements';

function XlseriesGl() {
  return (
    <div className="xlseriesgl">
      <Nav>
        <NavMenu>
          <NavLink to="/series">ALL</NavLink>
          <NavLink to="/xlseriesbl">BL</NavLink>
          <NavLink to="/xlseriesgl">GL</NavLink>
          <NavLink to="/xlserieshl">HL</NavLink>
        </NavMenu>
      </Nav>
      <div className="gr_sr_gl_out_1">
      <div className="gr_sr_gl_out_2">
        <div className="gr_sr_gl">
          <div className='gr_sr_gl_in'>
          <Grid title="XL Series GL" fetchUrl={requests.fetchSerieseGL} isLargeRow={true} />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default XlseriesGl;
