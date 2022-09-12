import React from 'react';
import { NavLink } from 'react-router-dom';
import './original.css';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

const Original = () => {
  return (
    <div className="IndividualNovelPageOriginal">
      <div className="infoOfNovel">
        <img id="thumbnail" src="" alt="example of thumbnail"></img>
        <div className="XLOriginalButton">
          <div id="buttonText">XL Original</div>
          <div id="buttonBox"></div>
        </div>
        <div id="workName">작품 제목</div>
        <div id="authorInfo">작가 작가이름 일러스트 일러스트 작가 이름</div>
        <p id="summary">
          작품에 대한 설명 작품에 대한 설명 작품에 대한 설명 작품에 대한 설명 작품에 대한 설명작품에
          대한 설명 작품에 대한 설명 작품에 대한 설명 작품에 대한 설명 작품에 대한 설명 작품에 대한
          설명 작품에 대한 설명 작품에 대한 설명 작품에 대한 설명 작품에 대한 설명 작품에 대한
          설명...더보기
        </p>
        <button id="readFirst">첫회보기</button>
        <button id="xltCharge">XLT 충전하기</button>
        <div />
        <div className="favAndRanking">
          <div className="fav">
            <div id="favFigure"></div>
            <p id="favName">즐겨찾기</p>
          </div>
          <div className="ranking">
            <div id="rankingFigure"></div>
            <p id="rankingName">나의 랭킹</p>
          </div>
        </div>
      </div>
      <h5 id="myNFT">내가 보유한 NFT</h5>
      <div className="readChapter">
        <div id="chapter">작품 제목 1화</div>
        <div id="date">업로드 날짜</div>
        <button id="read">읽기</button>
      </div>
    </div>
  );
};

export default Original;
