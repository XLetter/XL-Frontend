import React from 'react';
import './SampleChapterOriginal.css';
import { useNavigate } from 'react-router-dom';

function SampleChapterOriginalThree() {
  // const [Chapter, setChapter] = useState([]);

  const navigate = useNavigate();
  const handleClickBefore = () => navigate('/SampleChapterOriginalTwo');

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
      <body>
        <h1>Episode 3</h1>
        <p className="storyContent"> blablabla{''}</p>
        <p className="question">Question: {''}</p>
        <button id="optionA">1번선택지</button>
        <button id="optionB">2번선택지</button>
        <div className="bottomButtons">
          <button id="contentButton">Content</button>
          <button id="commentButton">Comment</button>
          <button id="previousButton" onClick={handleClickBefore}>
            Previous
          </button>
          <button id="nextButton">Next</button>
        </div>
      </body>
    </div>
  );
}

export default SampleChapterOriginalThree;
