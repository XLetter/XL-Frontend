import React from 'react';
import './Series.css';
import Row from '../../row/Row';
import requests from '../../requests/Requests';
import { Nav, NavLink, NavMenu } from '../../components/navBar/NavbarElements';

function Series() {
  return (
    <div className="series">
      <Nav>
        <NavMenu>
          <NavLink to="/series">ALL</NavLink>
          <NavLink to="/xlseriesbl">BL</NavLink>
          <NavLink to="/xlsereisgl">GL</NavLink>
          <NavLink to="/xlserieshl">HL</NavLink>
        </NavMenu>
      </Nav>
      <div className="row_sr_out_1">
      <div className="row_sr_out_2">
        <div className="row_sr">
          <div className="row_sr_in">
            <Row title="New XL Series" fetchUrl={requests.fetchSeries} isLargeRow={true} />
          </div>
        
        
          <div className="row_sr_in">
            <Row title="Book Mark:Series" fetchUrl={requests.fetchSeries} isLargeRow={true} />
          </div>
        
        
          <div className="row_sr_in">
            <Row title="Recommendation" fetchUrl={requests.fetchSeries} isLargeRow={true} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Series;
