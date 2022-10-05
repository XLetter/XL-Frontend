import React, { useState, useEffect } from 'react';
import axios from '../../axios/Axios';
import requests from '../../requests/Requests';
import './Banner.css';
import { useNavigate } from 'react-router-dom';

const base_url='http://43.200.24.50:8080/apis/webnovel/banner/'

function Banner() {
  const [webnovel, setWebnovel] = useState([]); //새로고침 할때마다 NetflixOriginals 랜덤 콘텐츠 추천

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setWebnovel(request.data[Math.floor(Math.random() * (request.data.length - 1))]);
      //[novel1,novel2,novel3 ,,,] 중에 random으로 하나 뽑기
      // -1 은 아마 array개수 안 넘어가게 하려고?

      return request;
    }
    fetchData();
  }, []);

  //function truncate(str, n) {
  // return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  //}
  //description이 길어졌을 때 말줄임표(...) 생성

  /*
    header를 따로 banner로 설정한 이유는 banner의 이미지와 banner의 콘텐츠(내용)에 
    다른 효과를 주기 위함. (서로 영향을 끼치지 않게 하기 위해) 
    */
    const navigate = useNavigate();
  return (
    <div className="banner_bg">
       
        <header className="banner"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url("${webnovel?.thumbnailUrl}")`,
          }}
          onClick={() => {
            navigate(`/IndividualNovelPageOriginal/${webnovel.webnovelId}`) }}>
    
          <div className="banner__contents">
            <h1 className="banner__title">{webnovel?.title}</h1>
            <h3 className='banner_summary'>{webnovel?.summary}</h3>
          </div>

          <div className="banner--fadeBottom" />
        
       
        </header>
    </div>
  );
}

export default Banner;
