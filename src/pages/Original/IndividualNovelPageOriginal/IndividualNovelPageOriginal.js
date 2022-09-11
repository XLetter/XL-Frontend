import React from 'react';
import './IndividualNovelPageOriginal.css';

const IndividualNovelPageOriginal = () => {
  return (
    <div className="IndividualNovelPageOriginal">
      <div className="infoOfNovel">
        <div id="readFirst">첫회보기</div>
        <div id="xltCharge">XLT 충전하기</div>
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
        <h5 id="myNFT">내가 보유한 NFT</h5>
      </div>
    </div>
  );
};

export default IndividualNovelPageOriginal;
