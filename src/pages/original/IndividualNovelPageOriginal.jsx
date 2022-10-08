import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Original.css';
import Favorite from './sections/Favorite';
import axios from '../../axios/Axios';
import Popup from './sections/Popup';
import RowNft from './components/RowNft';
import requests from '../../requests/Requests';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;
<meta charset="UTF-8"></meta>;

const IndividualNovelPageOriginal = () => {
  const [webnovel, setWebnovel] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  const api = `http://43.200.24.50:8080/apis/webnovel/{$webnovel_id}`;

  const navigate = useNavigate();
  const handleClickOne = () => navigate('/SampleChapterOriginalOne');
  const handleClickTwo = () => navigate('/SampleChapterOriginalTwo');
  const handleClickThree = () => navigate('/SampleChapterOriginalThree');

  async function getMovie() {
    const response = await fetch('http://43.200.24.50:8080/apis/webnovel/1')
      .then((response) => response.json())
      .then((response) => {
        document.getElementById('summary').textContent = response.summary;
        document.getElementById('illustrationWrtier').textContent = response.illustrationWrtier;
      });
  }
  getMovie();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchBannerInfo);
      setWebnovel(request.data[Math.floor(Math.random() * (request.data.length - 1))]);

      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="IndividualNovelPageOriginal">
      <div className="infoOfNovel">
        <div id="insideSquare">
          <img id="thumbnail" src={webnovel?.thumbnailUrl} alt="example of thumbnail">
            {webnovel.thumbnailUrl}
          </img>
          <div className="XLOriginalButton">
            <div id="buttonText">XL Original</div>
            <div id="buttonBox"></div>
          </div>

          <div id="workName">{webnovel?.title}</div>
          <div id="illustrationWrtier"> {''}</div>
          <p id="summary">{''}</p>

          <button id="readFirst" onClick={handleClickOne}>
            Read First Episode
          </button>
          <button id="xltCharge">Charge XLT</button>

          <div className="favAndRanking">
            <div className="fav">
              <div id="favFigure">{/* <Favorite /> */}</div>
              <p id="favName">Like</p>
            </div>

            <div className="ranking">
              <div id="rankingFigure"></div>
              <p id="rankingName">Rank</p>
            </div>
          </div>
        </div>
      </div>

      <div id="chapterListBigSquare">
        <div id="innerSquareStoryList">
          <div id="vectorForNFT"></div>
          <div id="myNftsTitle">My NFTs</div>
          <div id="myNFTsView">
            <RowNft title="My NFTs" fetchUrl={requests.fetchTopRated} isLargeRow={true} />
          </div>
          <div id="nft"></div>

          <div id="vectorForStoryList"></div>
          <div id="storyListTitle">Story List</div>
          <div id="buyAll">To buy full story</div>
          <div id="episodeOrder">From first episode / last episode</div>

          <div className="readChapterOne">
            <div id="episodeTitleOne">episode title and number = 1{''}</div>
            <div id="dateOne">{''}</div>
            <button id="readOne" onClick={handleClickOne}>
              Read
            </button>
          </div>

          <div className="readChapterTwo">
            <div id="episodeTitleTwo1">episode title and number = 2{''}</div>
            <div id="dateTwo">{''}</div>
            <button id="readTwo" onClick={handleClickTwo}>
              Read
            </button>
          </div>

          <div className="readChapterThree">
            <div id="episodeTitleThree1">episode title and number = 3{''}</div>
            <div id="date ">{''}</div>
            <button id="readThree" onClick={() => setButtonPopup(true)}>
              Read
            </button>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              {/* 구매하겠습니까? */}
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualNovelPageOriginal;
