import React, { useState, useEffect } from 'react';
import axios from '../../axios/Axios';
import requests from '../../requests/Requests';
import './Banner.css';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const [webnovel, setWebnovel] = useState([]); //새로고침 할때마다 NetflixOriginals 랜덤 콘텐츠 추천

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchBannerInfo);
      setWebnovel(request.data[Math.floor(Math.random() * (request.data.length - 1))]);
      //[novel1,novel2,novel3 ,,,] 중에 random으로 하나 뽑기
      // -1 은 아마 array개수 안 넘어가게 하려고?

      return request;
    }
    fetchData();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="banner_bg">
      <header
        className="banner"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage: `url("${webnovel?.bannerUrl}")`,
        }}
        onClick={() => {
          navigate(`/IndividualNovelPageOriginal`, {
            state: {
              webnovelId: webnovel.webnovelId,
              title: webnovel.title,
              thumbnailUrl: webnovel.thumbnailUrl,
              writerName: webnovel.writerName,
            },
          });
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">{webnovel?.title}</h1>
          <h3 className="banner_summary">{webnovel?.summary}</h3>
        </div>

        <div className="banner--fadeBottom" />
      </header>
    </div>
  );
}

export default Banner;
