import React, { useState, useEffect } from 'react';
import axios from '../axios/Axios';
import './Row.css';
import {poster_id_Matching} from './poster_id_Matching';


const base_url = 'http://43.200.24.50:8080/apis/webnovel/';


function Row({ title, fetchUrl, isLargeRow }) {
  const [webnovels, setWebnovels] = useState([]);

  // A snippet of code which runs based on a specific condition/varaible
  useEffect(() => {
    // if [], run once when the row loads, and dont run again

    async function fetchData() {
      const response = await axios.get(fetchUrl);
    

      setWebnovels(response.data);
    }
    fetchData();
  });
  
  

  return (
    <div className="row">
      <h2 id="row_title">{title}</h2>

      <div className="row__posters">
        {webnovels&&webnovels.map((webnovel) => (
          
          
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <poster_id_Matching>
            <img
              key={webnovel.webnovelId}
              className={`${isLargeRow ? ' row__posterLarge' : 'row__poster'}`}
              src={`${isLargeRow ? webnovel.thumbnailUrl : webnovel.thumbnailUrl}`}
              alt={webnovel.title}
              
            />
            
              <button id='row_contents'>
                {webnovel.title}
              </button></poster_id_Matching>
            
            
            
          </div>
          
        ))}
      </div>
    </div>
  );
}


export default Row;
