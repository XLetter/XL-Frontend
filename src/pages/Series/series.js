import React, { useEffect } from 'react';

import { API_URL, API_KEY } from '../../components/Navbar/Config';

function Series(props) {
  // const [data, setData] = React.useState({});

  // React.useEffect(function () {
  //   fetch('apis/webnovel/{webnovel_id}')
  //     .then((response) => response.json())
  //     .then((data) => setData());
  // }, []);

  //movieID 가져오는 방법
  let movieId = props.match.movieId;

  // const [Movie, setMovie] = useState([]);

  console.log(props.match);

  fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    }, []);

  return (
    <div></div>

    // <div className="IndividualNovelPageOriginal">
    //   <div className="infoOfNovel">
    //     <img id="thumbnail" src="" alt="example of thumbnail"></img>
    //     <div className="XLOriginalButton">
    //       <div id="buttonText">XL Original</div>
    //       <div id="buttonBox"></div>
    //     </div>
    //     <div id="workName">{Movie.original_title}</div>
    //     <div id="authorInfo">작가 작가이름 일러스트 일러스트 작가 이름</div>
    //     <p id="summary">
    //       작품에 대한 설명 작품에 대한 설명 작품에 대한 설명 작품에 대한 설명 작품에 대한 설명작품에
    //       대한 설명 작품에 대한 설명 작품에 대한 설명 작품에 대한 설명 작품에 대한 설명 작품에 대한
    //       설명 작품에 대한 설명 작품에 대한 설명 작품에 대한 설명 작품에 대한 설명 작품에 대한
    //       {/* 설명...더보기 {data.summary} */}
    //     </p>
    //     <button id="readFirst">첫회보기</button>
    //     <button id="xltCharge">XLT 충전하기</button>
    //     <div />
    //     <div className="favAndRanking">
    //       <div className="fav">
    //         <div id="favFigure"></div>
    //         <div id="favButton">
    //           <FavoriteButton />
    //         </div>
    //       </div>
    //       <div className="ranking">
    //         <div id="rankingFigure"></div>
    //         <p id="rankingName">나의 랭킹</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="NFT">
    //     <h5 id="myNFT">내가 보유한 NFT</h5>
    //     <div id="sampleNFT"></div>
    //   </div>
    //   <button id="buyAll">전체 구매하기</button>
    //   <button className="order" id="fromFirst">
    //     1화부터
    //   </button>
    //   <button className="order" id="fromRecent">
    //     최근화부터
    //   </button>
    //   <div className="readChapter">
    //     <div id="chapter">
    //       {/* 작품 제목{data.episodeList.episodeTitle} 1화 {data.episodeList.episodeId} */}
    //     </div>
    //     {/* <div id="date">업로드 날짜{episodeList.uploadDate}</div> */}
    //     <button id="read">읽기</button>
    //   </div>
    // </div>
  );
}

export default Series;
