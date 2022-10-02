import React from 'react';
import './SampleChapterOriginal.css';
import { useNavigate } from 'react-router-dom';

function SampleChapterOriginalOne() {
  // const [Chapter, setChapter] = useState([]);

  const navigate = useNavigate();
  const handleClickAfter = () => navigate('/SampleChapterOriginalTwo');

  // async function getChapter() {
  //   const response = await fetch(api_url);
  //   const data = await response.json();
  //   const { contents, choices.question, choices.choiceOptions.value } = data;

  // document.getElementById('storyContent').textContent = contents;
  // document.getElementById('question').textContent = choices.question;
  // document.getElementById('storyContent').textContent = contents;
  // }
  return (
    <div className="wholestory">
      <div id="innerSquare">
        <body>
          <h1 id="episodeTitle">Episode 1</h1>
          <p className="storyContent"> blablabla{''}</p>
          <p className="question">Question: {''}</p>
          <button id="optionA">Option A</button>
          <button id="optionB">Option B</button>
          <div className="bottomButtons">
            <button id="contentButton">Content</button>
            {/* <button id="commentButton">Comment</button> */}
            <button id="previousButton">Previous</button>
            <button id="nextButton" onClick={handleClickAfter}>
              Next
            </button>
          </div>
        </body>
      </div>
    </div>
  );
}

export default SampleChapterOriginalOne;
