import React from 'react';
import './SampleChapterOriginal.css';

function SampleChapterOriginal() {
  // const [Chapter, setChapter] = useState([]);

  // async function getChapter() {
  //   const response = await fetch(api_url);
  //   const data = await response.json();
  //   const { contents } = data;

  //   document.getElementById('storyContent').textContent = contents;
  // }
  return (
    <div className="wholestory">
      <head>
        <h1>Episode 1</h1>
      </head>
      <body>
        <p className="storyContent"> blablabla{''}</p>
        <p className="question"></p>
        <button id="optionA"></button>
        <button id="optionB"></button>
        <div className="bottomButtons">
          <button id="contentButton">Content</button>
          <button id="commentButton">Comment</button>
          <button id="previousButton">Previous</button>
          <button id="nextButton">Next</button>
        </div>
      </body>
    </div>
  );
}

export default SampleChapterOriginal;
