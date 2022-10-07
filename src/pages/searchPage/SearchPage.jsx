
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
        {keyword.state.data.length>0?(
          keyword.state.data.map((d,i)=>{
            return(
              <div style={{display:'flex', flexDirection:' column'}}key={d.webnovelId}>
                <img
                className={`${isLargeRow ? 'grid__posterLarge' : 'grid__poster'}`} src={`${isLargeRow ? d.thumbnailUrl : d.thumbnailUrl}`}
                alt={d.title}
                onClick={()=>{
                  navigate(`/IndividualNovelPageOriginal/${d.webnovelId}`);
                }}
                />
                <button id="grid_contents">{d.title}</button>
              </div>
            );
          })
        ) : (
          <div style={{display:'flex',flexDirection: 'column'}}><button id="grid_contents">없는 제목입니다!</button></div>
        )}
       
      </div>
   </div> 
    
  );
};

export default Search;
