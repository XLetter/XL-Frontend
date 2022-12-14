import React, { useState } from 'react';
import './Marketplace.css';
import {
  Bars,
  Nav,
  Nav_Btn_1,
  NavBtn_1Link,
  NavMenu,
  NavLink,
} from '../../components/navBar/NavbarElements';
import Row from '../../row/Row';
import requests from '../../requests/Requests';
import Banner from '../../components/banner/Banner';
import { useNavigate } from 'react-router-dom';

function Marketplace() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  async function search(searchKeyword) {
    navigate('/SearchPage', {
      state: {
        keyword: searchKeyword,
      },
    });
  }
  const handleClick = (event) => {
    if (event.key === 'Enter') {
      search(input);
    }
  };
  function onChangeAction(e) {
    setInput(e.target.value);
  }

  return (
    <div className="row_mp_out_1">
      <div className="marketplace">
        <Banner />

        <div style={{ height: '30px' }}>
          <table className={'table'}>
            <tr>
              <td>
                <input
                  type="text"
                  onChange={onChangeAction}
                  onKeyPress={handleClick}
                  className={'input-sm'}
                  placeholder={'Search'}
                  search
                />
                <button onClick={async () => search(input)}>search</button>
              </td>
            </tr>
          </table>
        </div>
        <Nav>
          <Bars />

          <NavMenu>
            <NavLink to="/marketplace">All</NavLink>
            <NavLink to="/nowtrend">Now Trend NFT</NavLink>
            <NavLink to="/xloriginalnft">DAO: Recently Created</NavLink>
            <NavLink to="/collection">Collection</NavLink>
          </NavMenu>
          <Nav_Btn_1>
            <NavBtn_1Link to="/mypage/wallet">My DAOs</NavBtn_1Link>
          </Nav_Btn_1>
        </Nav>

        <div className="row_mp_out_2">
          <div className="row_mp">
            <div className="row_mp_in">
              <Row title="DAOs:Recent Selling" fetchUrl={requests.fetchAll} isLargeRow={true} />
            </div>

            <div className="row_mp_in">
              <Row title="Novel Collection" fetchUrl={requests.fetchAll} isLargeRow={true} />
            </div>

            <div className="row_mp_in">
              <Row title="New DAO" fetchUrl={requests.fetchAll} isLargeRow={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
