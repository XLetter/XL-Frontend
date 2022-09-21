import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './original.css';
import Favorite from './Sections/Favorite';
import Popup from './Sections/Popup';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;
<meta charset="UTF-8"></meta>;

const IndividualNovelPageOriginal = () => {
  const [Movie, setMovie] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  const api_url = `https://api.themoviedb.org/3/movie/755566?api_key=f7b82b7f68941967b5871703e2789841&language=en-US`;

  async function getMovie() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { original_title, overview } = data;

    document.getElementById('workName').textContent = original_title;
    document.getElementById('summary').textContent = overview;
  }

  //우리의 API
  // async function getMovie() {
  //   const response = await fetch(api_url);
  //   const data = await response.json();
  //   const { original_title, overview } = data;

  //   document.getElementById('workName').textContent = original_title;
  //   document.getElementById('summary').textContent = summary;
  //   document.getElementById('authorInfo').textContent = illustration_writer;

  //   document.getElementById('summary').textContent = episodeList;
  //   document.getElementById('episodeTitle').textContent = episodeTitle;
  //   document.getElementById('date').textContent = uploadDate;
  // }

  getMovie();
  return (
    <div className="IndividualNovelPageOriginal">
      <div className="infoOfNovel">
        <img id="thumbnail" src="" alt="example of thumbnail"></img>
        <div className="XLOriginalButton">
          <div id="buttonText">XL Original</div>
          <div id="buttonBox"></div>
        </div>
        <div id="workName">작품 제목</div>
        <div id="authorInfo">일러스트 {''}</div>
        <p id="summary">{''}</p>
        <button id="readFirst">첫회보기</button>
        <button id="xltCharge">XLT 충전하기</button>
        <div />
        <div className="favAndRanking">
          <div className="fav">
            <div id="favFigure">{/* <Favorite /> */}</div>
            <p id="favName">즐겨찾기</p>
          </div>
          <div className="ranking">
            <div id="rankingFigure"></div>
            <p id="rankingName">나의 랭킹</p>
          </div>
        </div>
      </div>
      <div className="NFT">
        <h5 id="myNFT">내가 보유한 NFT</h5>
        <div id="sampleNFT"></div>
      </div>
      <button id="buyAll">전체 구매하기</button>
      <button className="order" id="fromFirst">
        1화부터
      </button>
      <button className="order" id="fromRecent">
        최근화부터
      </button>
      <div className="readChapter">
        <div id="episodeTitle">episodetitle and number = {''}</div>
        <div id="date ">업로드 날짜{''}</div>
        <button id="read" onClick={() => setButtonPopup(true)}>
          읽기
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          구매하겠습니까?
        </Popup>
      </div>
    </div>
  );
};

export default IndividualNovelPageOriginal;
