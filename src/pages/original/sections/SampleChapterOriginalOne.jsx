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
            **LORD POLONIUS** <br />
            'Fore God, my lord, well spoken, with good accent and good discretion. **First Player**
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
            heaven, As low as to the fiends!' **LORD POLONIUS** This is too long. **HAMLET** It
            shall to the barber's, with your beard. Prithee, say on: he's for a jig or a tale of
            bawdry, or he sleeps: say on: come to Hecuba. **First Player** 'But who, O, who had seen
            the mobled queen--' **HAMLET** 'The mobled queen?' **LORD POLONIUS** That's good;
            'mobled queen' is good. **First Player** 'Run barefoot up and down, threatening the
            flames With bisson rheum; a clout upon that head Where late the diadem stood, and for a
            robe, About her lank and all o'er-teemed loins, A blanket, in the alarm of fear caught
            up; Who this had seen, with tongue in venom steep'd, 'Gainst Fortune's state would
            treason have pronounced: But if the gods themselves did see her then When she saw
            Pyrrhus make malicious sport In mincing with his sword her husband's limbs, The instant
            burst of clamour that she made, Unless things mortal move them not at all, Would have
            made milch the burning eyes of heaven, And passion in the gods.' **LORD POLONIUS** Look,
            whether he has not turned his colour and has tears in's eyes. Pray you, no more.
            **HAMLET** 'Tis well: I'll have thee speak out the rest soon. Good my lord, will you see
            the players well bestowed? Do you hear, let them be well used; for they are the abstract
            and brief chronicles of the time: after your death you were better have a bad epitaph
            than their ill report while you live. **LORD POLONIUS** My lord, I will use them
            according to their desert. **HAMLET** God's bodykins, man, much better: use every man
            after his desert, and who should 'scape whipping? Use them after your own honour and
            dignity: the less they deserve, the more merit is in your bounty. Take them in. **LORD
            POLONIUS** Come, sirs. **HAMLET** Follow him, friends: we'll hear a play to-morrow.
            *Exit POLONIUS with all the Players but the First* Dost thou hear me, old friend; can
            you play the Murder of Gonzago? **First Player** Ay, my lord. **HAMLET** We'll ha't
            to-morrow night. You could, for a need, study a speech of some dozen or sixteen lines,
            which I would set down and insert in't, could you not? **First Player** Ay, my lord.
            **HAMLET** Very well. Follow that lord; and look you mock him not. *Exit First Player*
            My good friends, I'll leave you till night: you are welcome to Elsinore. **ROSENCRANTZ**
            Good my lord! **HAMLET** Ay, so, God be wi' ye; ***Exeunt ROSENCRANTZ and
            GUILDENSTERN*** Now I am alone. O, what a rogue and peasant slave am I! Is it not
            monstrous that this player here, But in a fiction, in a dream of passion, Could force
            his soul so to his own conceit That from her working all his visage wann'd, Tears in his
            eyes, distraction in's aspect, A broken voice, and his whole function suiting With forms
            to his conceit? and all for nothing! For Hecuba! What's Hecuba to him, or he to Hecuba,
            That he should weep for her? What would he do, Had he the motive and the cue for passion
            That I have? He would drown the stage with tears And cleave the general ear with horrid
            speech, Make mad the guilty and appal the free, Confound the ignorant, and amaze indeed
            The very faculties of eyes and ears. Yet I, A dull and muddy-mettled rascal, peak, Like
            John-a-dreams, unpregnant of my cause, And can say nothing; no, not for a king, Upon
            whose property and most dear life A damn'd defeat was made. Am I a coward? Who calls me
            villain? breaks my pate across? Plucks off my beard, and blows it in my face? Tweaks me
            by the nose? gives me the lie i' the throat, As deep as to the lungs? who does me this?
            Ha! 'Swounds, I should take it: for it cannot be But I am pigeon-liver'd and lack gall
            To make oppression bitter, or ere this I should have fatted all the region kites With
            this slave's offal: bloody, bawdy villain! Remorseless, treacherous, lecherous, kindless
            villain! O, vengeance! Why, what an ass am I! This is most brave, That I, the son of a
            dear father murder'd, Prompted to my revenge by heaven and hell, Must, like a whore,
            unpack my heart with words, And fall a-cursing, like a very drab, A scullion! Fie
            upon't! foh! About, my brain! I have heard That guilty creatures sitting at a play Have
            by the very cunning of the scene Been struck so to the soul that presently They have
            proclaim'd their malefactions; For murder, though it have no tongue, will speak With
            most miraculous organ. I'll have these players Play something like the murder of my
            father Before mine uncle: I'll observe his looks; I'll tent him to the quick: if he but
            blench, I know my course. The spirit that I have seen May be the devil: and the devil
            hath power To assume a pleasing shape; yea, and perhaps Out of my weakness and my
            melancholy, As he is very potent with such spirits, Abuses me to damn me: I'll have
            grounds More relative than this: the play 's the thing Wherein I'll catch the conscience
            of the king.
          </p>
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
