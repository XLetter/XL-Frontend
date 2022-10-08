import React from 'react';
import './SampleChapterOriginalTwo.css';
import { useNavigate } from 'react-router-dom';

function SampleChapterOriginalTwo() {
  // const [Chapter, setChapter] = useState([]);

  const navigate = useNavigate();
  const handleClickBefore = () => navigate('/SampleChapterOriginalOne');
  const handleClickAfter = () => navigate('/SampleChapterOriginalThree');

  // async function getChapter() {
  //   const response = await fetch(api_url);
  //   const data = await response.json();
  //   const { contents, choices.question, choices.choiceOptions.value } = data;

  // document.getElementById('storyContent').textContent = contents;
  // document.getElementById('question').textContent = choices.question;
  // document.getElementById('storyContent').textContent = contents;
  // }
  return (
    <div className="wholestoryTwo">
      <div id="innerSquareTwo">
        <body>
          <h1 id="episodeTitleTwo">Episode 2</h1>
          <p id="storyContentTwo">
            {' '}
            HAMLET <br />
            'Tis well: I'll have thee speak out the rest soon. Good my lord, will you see the
            players well bestowed? Do you hear, let them be well used; for they are the abstract and
            brief chronicles of the time: after your death you were better have a bad epitaph than
            their ill report while you live. <br />
            LORD POLONIUS <br /> My lord, I will use them according to their desert. <br />
            HAMLET <br />
            God's bodykins, man, much better: use every man after his desert, and who should 'scape
            whipping? Use them after your own honour and dignity: the less they deserve, the more
            merit is in your bounty. Take them in. <br />
            LORD POLONIUS <br />
            Come, sirs. <br />
            HAMLET <br /> Follow him, friends: we'll hear a play to-morrow. <br />
            Exit POLONIUS with all the Players but the First <br />
            Dost thou hear me, old friend; can you play the Murder of Gonzago? <br />
            First Player <br /> Ay, my lord. <br />
            HAMLET <br />
            We'll ha't tomorrow night. You could, for a need, study a speech of some dozen or
            sixteen lines, which I would set down and insert in't, could you not? <br />
            First Player <br />
            Ay, my lord. <br />
            HAMLET <br />
            Very well. Follow that lord; and look you mock him not. *Exit First Player* My good
            friends, I'll leave you till night: you are welcome to Elsinore. <br />
            ROSENCRANTZ <br /> Good my lord! <br />
            HAMLET <br />
            Ay, so, God be wi' ye; <br />
            Exeunt ROSENCRANTZ and GUILDENSTERN <br /> Now I am alone. O, what a rogue and peasant
            slave am I! Is it not monstrous that this player here, But in a fiction, in a dream of
            passion, Could force his soul so to his own conceit That from her working all his visage
            wann'd, Tears in his eyes, distraction in's aspect, A broken voice, and his whole
            function suiting With forms to his conceit? and all for nothing! For Hecuba! What's
            Hecuba to him, or he to Hecuba, That he should weep for her? What would he do, Had he
            the motive and the cue for passion That I have? He would drown the stage with tears And
            cleave the general ear with horrid speech, Make mad the guilty and appal the free,
            Confound the ignorant, and amaze indeed The very faculties of eyes and ears. Yet I, A
            dull and muddy-mettled rascal, peak, Like John-a-dreams, unpregnant of my cause, And can
            say nothing; no, not for a king, Upon whose property and most dear life A damn'd defeat
            was made. Am I a coward? Who calls me villain? breaks my pate across? Plucks off my
            beard, and blows it in my face? Tweaks me by the nose? gives me the lie i' the throat,
            As deep as to the lungs? who does me this? Ha! 'Swounds, I should take it: for it cannot
            be But I am pigeon-liver'd and lack gall To make oppression bitter, or ere this I should
            have fatted all the region kites With this slave's offal: bloody, bawdy villain!
            Remorseless, treacherous, lecherous, kindless villain! O, vengeance! Why, what an ass am
            I! This is most brave, That I, the son of a dear father murder'd, Prompted to my revenge
            by heaven and hell, Must, like a whore, unpack my heart with words, And fall a-cursing,
            like a very drab, A scullion! Fie upon't! foh! About, my brain! I have heard That guilty
            creatures sitting at a play Have by the very cunning of the scene Been struck so to the
            soul that presently They have proclaim'd their malefactions; For murder, though it have
            no tongue, will speak With most miraculous organ. I'll have these players Play something
            like the murder of my father Before mine uncle: I'll observe his looks; I'll tent him to
            the quick: if he but blench, I know my course. The spirit that I have seen May be the
            devil: and the devil hath power To assume a pleasing shape; yea, and perhaps Out of my
            weakness and my melancholy, As he is very potent with such spirits, Abuses me to damn
            me: I'll have grounds More relative than this: the play 's the thing Wherein I'll catch
            the conscience of the king.
          </p>
          {/* <p className="questionTwo">Question: {''}</p> */}
          {/* <button id="optionATwo">1번선택지</button>
          <button id="optionBTwo">2번선택지</button> */}
          <div className="bottomButtonsTwo">
            {/* <button id="contentButtonTwo">Content</button>
            <button id="commentButtonTwo">Comment</button> */}
            <button id="previousButtonTwo" onClick={handleClickBefore}>
              Previous
            </button>
            <button id="nextButtonTwo" onClick={handleClickAfter}>
              Next
            </button>
          </div>
        </body>
      </div>
    </div>
  );
}

export default SampleChapterOriginalTwo;
