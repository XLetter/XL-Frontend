import React from 'react';
import './NowTrend.css';
import Grid from '../../../grid/Grid';
import requests from '../../../requests/Requests';
import {
  Bars,
  Nav,
  Nav_Btn_1,
  NavBtn_1Link,
  NavMenu,
  NavLink,
} from '../../../components/navBar/NavbarElements';

function NowTrend() {
  return (
    <div className="nowtrend">
      <div style={{ height: '30px' }}></div>
      <table className={'table'}>
        <tr>
          <td>
            <input type="text" className={'input-sm'} placeholder={'작품을 입력하세요'} search />
            <button>
              검색
              <NavLink to="/SearchPage" />
            </button>
          </td>
        </tr>
      </table>

      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/nowtrend">실시간 거래NFT</NavLink>
          <NavLink to="/collection">XL Series NFT</NavLink>
          <NavLink to="/xloriginalnft">XL Original 엔딩 NFT</NavLink>
        </NavMenu>

        <Nav_Btn_1>
          <NavBtn_1Link to="My NFT">My NFT</NavBtn_1Link>
        </Nav_Btn_1>
      </Nav>
      <div className="gr_mp_nt_out_1">
      <div className="gr_mp_nt_out_2">
        <div className="gr_mp_nt">
          <div className='gr_mp_nt_in'>
        <Grid title="최신 트렌드" fetchUrl={requests.fetchAll} isLargeRow={true} />
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default NowTrend;
