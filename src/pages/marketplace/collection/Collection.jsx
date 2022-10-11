import React, { useState } from 'react';
import './Collection.css';
import Grid from '../../../grid/Grid';
import requests from '../../../requests/Requests';
import { useNavigate } from 'react-router-dom';
import {
  Bars,
  Nav,
  Nav_Btn_1,
  NavBtn_1Link,
  NavMenu,
  NavLink,
} from '../../../components/navBar/NavbarElements';

function Collection() {
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
    <div className="collection">
      <div style={{ height: '30px' }}>
        <table className={'table'}>
          <tr>
            <td>
              <input
                type="text"
                onChange={onChangeAction}
                onKeyPress={handleClick}
                className={'input-sm'}
                placeholder={'Search!!'}
                search
              />
              <button onClick={async () => search(input)}>Search</button>
            </td>
          </tr>
        </table>
      </div>

      <Nav>
        <Bars />
        <NavMenu>
      
        <NavLink to="/marketplace">All</NavLink>
        <NavLink to="/nowtrend">Now Trend NFT</NavLink>
        <NavLink to="/xloriginalnft">Dao:Recently Created</NavLink>
        <NavLink to="/collection">Collection</NavLink>
         
        </NavMenu>
          <Nav_Btn_1>
          <NavBtn_1Link to="/mypage/wallet">My NFTs</NavBtn_1Link></Nav_Btn_1>
      </Nav>
      <div className="gr_mp_cl_out_1">
      <div className="gr_mp_cl_out_2">
        <div className="gr_mp_cl">
          <div className='gr_mp_cl_in'>
        <Grid title="Collection" fetchUrl={requests.fetchSeries} isLargeRow={true} />
      </div>
    </div>
    </div></div></div>
  );
}

export default Collection;
