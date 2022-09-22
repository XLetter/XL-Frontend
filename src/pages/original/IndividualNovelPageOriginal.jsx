import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Original.css';
import Favorite from './sections/Favorite';
import Popup from './sections/Popup';
import { FavoriteButton } from './sections/Favorite';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;
<meta charset="UTF-8"></meta>;

const IndividualNovelPageOriginal = () => {
  const [Movie, setMovie] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  const navigate = useNavigate();
  const handleClickOne = () => navigate('/SampleChapterOriginalOne');
  const handleClickTwo = () => navigate('/SampleChapterOriginalTwo');
  const handleClickThree = () => navigate('/SampleChapterOriginalThree');

  const api_url = `https://api.themoviedb.org/3/movie/755566?api_key=f7b82b7f68941967b5871703e2789841&language=en-US`;

  async function getMovie() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { original_title, overview } = data;

    document.getElementById('workName').textContent = original_title;
    document.getElementById('summary').textContent = overview;
  }

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

        <button id="readFirst" onClick={handleClickOne}>
          첫회보기
        </button>
        <button id="xltCharge">XLT 충전하기</button>

        <div className="favAndRanking">
          <div className="fav">
            <div id="favFigure">
              <FavoriteButton />
            </div>
            <p id="favName">즐겨찾기</p>
          </div>

          <div className="ranking">
            <div id="rankingFigure"></div>
            <p id="rankingName">나의 랭킹</p>
          </div>
        </div>
      </div>

      <div className="readChapterOne">
        <div id="episodeTitleOne">episode title and number = 1{''}</div>
        <div id="dateOne">업로드 날짜{''}</div>
        <button id="readOne" onClick={handleClickOne}>
          읽기
        </button>
      </div>

      <div className="readChapterTwo">
        <div id="episodeTitleTwo">episode title and number = 2{''}</div>
        <div id="dateTwo">업로드 날짜{''}</div>
        <button id="readTwo" onClick={handleClickTwo}>
          읽기
        </button>
      </div>

      <div className="readChapterThree">
        <div id="episodeTitle">episode title and number = 3{''}</div>
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
