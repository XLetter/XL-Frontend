import React, { useEffect, useState } from 'react';
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

import { IMAGE_BASE_URL } from '../../components/Config';

import axios from '../../axios/Axios';
async function search(searchKeyword) {
  try {
    const result = await axios(
      `${process.env.REACT_APP_API_HOST}/search?keyword=${searchKeyword}`,
    ).then((res) => res.data);

    return result;
  } catch (error) {
    return 'error';
  }
}

function Marketplace() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  async function search(searchKeyword) {
    try {
      const result = await axios(`${IMAGE_BASE_URL}/search?keyword=${searchKeyword}`).then(
        (res) => res.data,
      );
      navigate('/SearchPage', {
        state: {
          data: result,
        },
      });
    } catch (error) {
      return 'error';
    }
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
    <div className="row_mp_out">
      <div className="marketplace">
        <Banner />

        <div style={{ height: '30px' }}></div>
        <table className={'table'}>
          <tr>
            <td>
              <input
                value={input}
                onChange={onChangeAction}
                type="text"
                className={'input-sm'}
                placeholder={'Search!!'}
                onKeyPress={handleClick}
                search
              />

              <button id="searchBtn" onClick={async () => search(input)}>
                search
              </button>
              <Nav_Btn_1>
                <NavBtn_1Link to="My NFT">My NFT</NavBtn_1Link>
              </Nav_Btn_1>
            </td>
          </tr>
        </table>

        <Nav>
          <Bars />
          <NavMenu>
            <NavLink to="/nowtrend">실시간 거래 NFT</NavLink>
            <NavLink to="/collection">XL Series NFT</NavLink>
            <NavLink to="/xloriginalnft">XL Original 엔딩 NFT</NavLink>
          </NavMenu>
        </Nav>

        <button onClick={handleClick}>NFT detail page</button>
        <div className="row_mp">
          <div className="row_mp_in">
            <Row title="Recent Selling" fetchUrl={requests.fetchAll} isLargeRow={true} />
          </div>
        </div>
        <div className="row_mp">
          <div className="row_mp_in">
            <Row title="Novel Collection" fetchUrl={requests.fetchAll} isLargeRow={true} />
          </div>
        </div>
        <div className="row_mp">
          <div className="row_mp_in">
            <Row title="New Nft" fetchUrl={requests.fetchAll} isLargeRow={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
