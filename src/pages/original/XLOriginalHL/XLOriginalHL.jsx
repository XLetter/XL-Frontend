import React from 'react';
import './XLOriginalHL.css';
import requests from '../../../requests/Requests';
import Grid from '../../../grid/Grid';
import { Nav, NavMenu, NavLink } from '../../../components/navBar/NavbarElements';

function XloriginalHl() {
  return (
    <div className="xloriginalhl">
      <Nav>
        <NavMenu>
          <NavLink to="/original">ALL</NavLink>
          <NavLink to="/xloriginalbl">BL</NavLink>
          <NavLink to="/xloriginalgl">GL</NavLink>
          <NavLink to="/xloriginalhl">HL</NavLink>
        </NavMenu>
      </Nav>
      <div className="gr_or_hl_out_1">
      <div className="gr_or_hl_out_2">
        <div className="gr_or_hl">
          <div className='gr_or_hl_in'>
          <Grid title="XL Novels HL" fetchUrl={[requests.fetchOriginalHL, requests.fetchSerieseHL]} isLargeRow={true} />
        </div>
      </div>
    </div>
    </div></div>
  );
}

export default XloriginalHl;
