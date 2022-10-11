import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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

  const navigate = useNavigate();
  const handleClickOne = () => navigate('/SampleChapterOriginalOne');
  const handleClickTwo = () => navigate('/SampleChapterOriginalTwo');
  const handleClickThree = () => navigate('/SampleChapterOriginalThree');

  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const webnovel = await axios.get(`apis/webnovel/${location.state.webnovelId}`);
      setWebnovel(webnovel.data);
      console.log(webnovel);
      return webnovel;
    }
    fetchData();
  }, []);

  return (
    <div className="IndividualNovelPageOriginal">
      <div className="infoOfNovel">
        <div id="insideSquare">
          <img id="thumbnail" src={location.state.thumbnailUrl} alt="example of thumbnail"></img>
          <div className="XLOriginalButton">
            <div id="buttonText">XL Series</div>
            <div id="buttonBox"></div>
          </div>

          <div id="workName">{location.state.title}</div>
          <div id="illustrationWrtier"> {location.state.writerName}</div>
          <p id="summary">{webnovel.summary ? webnovel.summary : ''}</p>

          <button id="readFirst" onClick={handleClickOne}>
            Read First Episode
          </button>
          <button id="xltCharge">Charge XLT</button>

          <a href="https://testnets.opensea.io/collection/xletter-hamelt-nft-a-class">
            <button id="joinDao">Join DAO</button>{' '}
          </a>

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
            <RowNft title="My NFTs" fetchUrl={requests.fetchAll} isLargeRow={true} />
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
