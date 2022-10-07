
import React, {useState,useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../grid/Grid.css';
import './SearchPage.css';

function Search({fetchUrl, isLargeRow}) {
  const [webnovels, setWebnovels] = useState([]);

  // A snippet of code which runs based on a specific condition/varaible
  useEffect(() => {
    // if [], run once when the row loads, and dont run again

    async function fetchData() {
      const response = await axios.get(fetchUrl,isLargeRow);
      //home.js의 fetchUrl
      // ex) https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213

      setWebnovels(response.data);
    }
    fetchData();
  },[]);
  const navigate = useNavigate();

  const keyword=useLocation();;
  
  return (
    
    <div className="search_out">
      <div className="search" >
       
      
            <div style={{ display: 'flex', flexDirection: 'column' }} key={keyword.webnovelId}>
              <img
                className={`${isLargeRow ? ' grid__posterLarge' : 'grid__poster'}`}
                src={`${isLargeRow ? keyword.thumbnailUrl : keyword.thumbnailUrl}`}
                alt={keyword.title}
                onClick={() => {
                  navigate(`/IndividualNovelPageOriginal/${keyword.webnovelId}`);
                }}
              />

              <button id="grid_contents">{keyword.title}</button>
            </div>
          
         
    </div>
   </div> 
    
  );
};

export default Search;
