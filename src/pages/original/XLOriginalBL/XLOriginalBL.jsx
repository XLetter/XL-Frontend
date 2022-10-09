import React from 'react';
import './XLOriginalBL.css';
import requests from '../../../requests/Requests';
import Grid from '../../../grid/Grid';
import { Nav, NavMenu, NavLink } from '../../../components/navBar/NavbarElements';

function XloriginalBl() {
  return (
    <div className="xloriginalbl">
      <Nav>
        <NavMenu>
          <NavLink to="/original">ALL</NavLink>
          <NavLink to="/xloriginalbl">BL</NavLink>
          <NavLink to="/xloriginalgl">GL</NavLink>
          <NavLink to="/xloriginalhl">HL</NavLink>
        </NavMenu>
      </Nav>
      <div className="gr_or_bl_out_1">
      <div className="gr_or_bl_out_2">
        <div className="gr_or_bl">
          <div className='gr_or_bl_in'>
          <Grid title="XL Original BL" fetchUrl={requests.fetchOriginalBL} isLargeRow={true} />
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default XloriginalBl;
