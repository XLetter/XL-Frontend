import React from 'react';
import Row from '../../../row/Row';
import requests from '../../../requests/Requests';

import './MyDAOs.css';

const MyDAOs = () => {
  return (
    <div className="MyDAOs">
      <div className='myDAOs_header' style={{width: 1030}}>
        myDAOs
      </div>

      <div className='rows'>
        <Row title="" fetchUrl={requests.fetchAll} isLargeRow={true} />
      </div>

    </div>
  );
};

export default MyDAOs;
