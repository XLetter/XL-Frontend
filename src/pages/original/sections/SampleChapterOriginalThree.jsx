import React from 'react';
import './SampleChapterOriginalThree.css';
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
    <div className="wholestoryThree">
      <div id="innerSquareThree">
        <body>
          <h1 id="episodeTitleThree">Episode 3</h1>
          <p id="storyContentThree">
            {' '}
            SCENE I. A room in the castle. <br />
            Enter KING CLAUDIUS, QUEEN GERTRUDE, POLONIUS, OPHELIA, ROSENCRANTZ, and GUILDENSTERN
            <br />
            KING CLAUDIUS
            <br />
            And can you, by no drift of circumstance, Get from him why he puts on this confusion,
            Grating so harshly all his days of quiet With turbulent and dangerous lunacy?
            <br />
            ROSENCRANTZ
            <br />
            He does confess he feels himself distracted; But from what cause he will by no means
            speak. <br />
            GUILDENSTERN
            <br />
            Nor do we find him forward to be sounded, But, with a crafty madness, keeps aloof, When
            we would bring him on to some confession Of his true state. <br />
            QUEEN GERTRUDE
            <br />
            Did he receive you well? <br />
            ROSENCRANTZ
            <br />
            Most like a gentleman. <br />
            GUILDENSTERN
            <br />
            But with much forcing of his disposition. <br />
            ROSENCRANTZ
            <br />
            Niggard of question; but, of our demands, Most free in his reply. <br />
            QUEEN GERTRUDE
            <br />
            Did you assay him? To any pastime? <br />
            ROSENCRANTZ
            <br />
            Madam, it so fell out, that certain players We o'er-raught on the way: of these we told
            him; And there did seem in him a kind of joy To hear of it: they are about the court,
            And, as I think, they have already order This night to play before him. <br />
            LORD POLONIUS
            <br />
            'Tis most true: And he beseech'd me to entreat your majesties To hear and see the
            matter. <br />
            KING CLAUDIUS
            <br /> With all my heart; and it doth much content me To hear him so inclined. Good
            gentlemen, give him a further edge, And drive his purpose on to these delights.
            <br />
            ROSENCRANTZ
            <br /> We shall, my lord. <br />
            Exeunt ROSENCRANTZ and GUILDENSTERN* <br />
            KING CLAUDIUS
            <br />
            Sweet Gertrude, leave us too; For we have closely sent for Hamlet hither, That he, as
            'twere by accident, may here Affront Ophelia: Her father and myself, lawful espials,
            Will so bestow ourselves that, seeing, unseen, We may of their encounter frankly judge,
            And gather by him, as he is behaved, If 't be the affliction of his love or no That thus
            he suffers for. <br />
            QUEEN GERTRUDE
            <br /> I shall obey you. And for your part, Ophelia, I do wish That your good beauties
            be the happy cause Of Hamlet's wildness: so shall I hope your virtues Will bring him to
            his wonted way again, To both your honours. <br />
            OPHELIA
            <br />
            Madam, I wish it may. <br />
            Exit QUEEN GERTRUDE
            <br />
            LORD POLONIUS
            <br />
            Ophelia, walk you here. Gracious, so please you, We will bestow ourselves. <br />
            To OPHELIA
            <br />
            Read on this book; That show of such an exercise may colour Your loneliness. We are oft
            to blame in this,-- 'Tis too much proved--that with devotion's visage And pious action
            we do sugar o'er The devil himself.
            <br />
            KING CLAUDIUS
            <br />
            Aside O, 'tis too true! How smart a lash that speech doth give my conscience! The
            harlot's cheek, beautied with plastering art, Is not more ugly to the thing that helps
            it Than is my deed to my most painted word: O heavy burthen! <br />
            LORD POLONIUS** I hear him coming: let's withdraw, my lord. *Exeunt KING CLAUDIUS and
            POLONIUS* *Enter HAMLET* **HAMLET** To be, or not to be, that is the question, Whether
            'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to
            take arms against a sea of troubles, And by opposing end them? To die: to sleep; No
            more; and by a sleep to say we end The heart-ache and the thousand natural shocks That
            flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep; To sleep:
            perchance to dream: ay, there's the rub; For in that sleep of death what dreams may come
            When we have shuffled off this mortal coil, Must give us pause: there's the respect That
            makes calamity of so long life; For who would bear the whips and scorns of time, The
            oppressor's wrong, the proud man's contumely, The pangs of despised love, the law's
            delay, The insolence of office and the spurns That patient merit of the unworthy takes,
            When he himself might his quietus make With a bare bodkin? who would fardels bear, To
            grunt and sweat under a weary life, But that the dread of something after death, The
            undiscover'd country from whose bourn No traveller returns, puzzles the will And makes
            us rather bear those ills we have Than fly to others that we know not of? Thus
            conscience does make cowards of us all; And thus the native hue of resolution Is
            sicklied o'er with the pale cast of thought, And enterprises of great pith and moment
            With this regard their currents turn awry, And lose the name of action.--Soft you now!
            The fair Ophelia! Nymph, in thy orisons Be all my sins remember'd.
          </p>
          <p id="questionThree">Q. To Be or Not to Be?</p>
          <button id="optionAThree">To Be</button>
          <button id="optionBThree">Not To Be</button>
          <div className="bottomButtonsThree">
            {/* <button id="contentButtonThree">Content</button>
            <button id="commentButtonThree">Comment</button> */}
            <button id="previousButtonThree" onClick={handleClickBefore}>
              Previous
            </button>
            <button id="nextButtonThree">Next</button>
          </div>
        </body>
      </div>
    </div>
  );
}

export default SampleChapterOriginalThree;
