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
          <p id="storyContent">
            LORD POLONIUS
            <br />
            'Fore God, my lord, well spoken, with good accent and good discretion. <br /> First
            Player <br />
            'Anon he finds him Striking too short at Greeks; his antique sword, Rebellious to his
            arm, lies where it falls, Repugnant to command: unequal match'd, Pyrrhus at Priam
            drives; in rage strikes wide; But with the whiff and wind of his fell sword The unnerved
            father falls. Then senseless Ilium, Seeming to feel this blow, with flaming top Stoops
            to his base, and with a hideous crash Takes prisoner Pyrrhus' ear: for, lo! his sword,
            Which was declining on the milky head Of reverend Priam, seem'd i' the air to stick: So,
            as a painted tyrant, Pyrrhus stood, And like a neutral to his will and matter, Did
            nothing. But, as we often see, against some storm, A silence in the heavens, the rack
            stand still, The bold winds speechless and the orb below As hush as death, anon the
            dreadful thunder Doth rend the region, so, after Pyrrhus' pause, Aroused vengeance sets
            him new a-work; And never did the Cyclops' hammers fall On Mars's armour forged for
            proof eterne With less remorse than Pyrrhus' bleeding sword Now falls on Priam. Out,
            out, thou strumpet, Fortune! All you gods, In general synod 'take away her power; Break
            all the spokes and fellies from her wheel, And bowl the round nave down the hill of
            heaven, As low as to the fiends!' <br />
            LORD POLONIUS <br />
            This is too long. <br />
            HAMLET <br /> It shall to the barber's, with your beard. Prithee, say on: he's for a jig
            or a tale of bawdry, or he sleeps: say on: come to Hecuba. <br />
            First Player <br />
            'But who, O, who had seen the mobled queen--' <br />
            HAMLET <br /> 'The mobled queen?' <br />
            LORD POLONIUS <br />
            That's good; 'mobled queen' is good. <br />
            First Player <br /> 'Run barefoot up and down, threatening the flames With bisson rheum;
            a clout upon that head Where late the diadem stood, and for a robe, About her lank and
            all o'er-teemed loins, A blanket, in the alarm of fear caught up; Who this had seen,
            with tongue in venom steep'd, 'Gainst Fortune's state would treason have pronounced: But
            if the gods themselves did see her then When she saw Pyrrhus make malicious sport In
            mincing with his sword her husband's limbs, The instant burst of clamour that she made,
            Unless things mortal move them not at all, Would have made milch the burning eyes of
            heaven, And passion in the gods.' <br />
            LORD POLONIUS <br />
            Look, whether he has not turned his colour and has tears in's eyes. Pray you, no more.
            <br />
          </p>
          <p className="question"></p>
          {/* <button id="optionA">Option A</button>
          <button id="optionB">Option B</button> */}
          <div className="bottomButtons">
            {/* <button id="contentButton">Content</button> */}
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
