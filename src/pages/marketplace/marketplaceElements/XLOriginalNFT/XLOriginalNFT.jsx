import React, { useState } from 'react';
import './XLOriginalNFT.css';
import Grid from '../../../../grid/Grid';
import requests from '../../../../requests/Requests';
import { useNavigate } from 'react-router-dom';
import {
  Bars,
  Nav,
  Nav_Btn_1,
  NavBtn_1Link,
  NavMenu,
  NavLink,
} from '../../../../components/navBar/NavbarElements';

function Xloriginalnft() {
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
    <div className="nowtrend">
      <div style={{ height: '30px' }}></div>
      <table className={'table'}>
        <tr>
          <td>
            <input
              type="text"
              onChange={onChangeAction}
              onKeyPress={handleClick}
              className={'input-sm'}
              placeholder={'작품을 입력하세요'}
              search
            />
            <button onClick={async () => search(input)}>검색</button>
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
      <div className="gr_mk_xn">
        <Grid title="최신 트렌드" fetchUrl={requests.fetchAll} isLargeRow={true} />
      </div>
    </div>
  );
}

export default Xloriginalnft;
