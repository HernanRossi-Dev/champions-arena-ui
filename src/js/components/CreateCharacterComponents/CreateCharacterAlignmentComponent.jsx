import React, { useState, useEffect } from "react";
import {
  ButtonToolbar,
  Col,
  ControlLabel,
  FormGroup,
  ToggleButton,
  ToggleButtonGroup,
  Collapse,
  Well
} from "react-bootstrap";
import PropTypes from 'prop-types';
import * as cssStyles from "../../../styles/Styles.css";

const alignmentDivStyle = {
  fontSize: "17px !important",
  fontFamily: "'Josefin Sans', sans-serif",
  textAlign: "left",

};

export const CreateCharacterAlignmentComponent = (props) => {
  const { allowedAlignments, updateAlignment, charClass } = props;
  const [alignment, setAlignment] = useState('');
  const [alignmentInfo, setAlignmentInfo] = useState(<div />);
  const [showAlignment, setShowAlignment] = useState(false);
  const [prevButtonPressed, setPrevButtonPressed] = useState('');
  const [alignments, setAllowedAlignments] = useState(["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"]);
  const [clericAlignmentPrompt, setClericAlignmentPrompt] = useState('');

  useEffect(() => {
    if (charClass === 'Cleric') {
      setClericAlignmentPrompt("Alignments restricted by chosen cleric diety.");
    } else {
      setClericAlignmentPrompt("");
    }
    setAllowedAlignments(allowedAlignments);
    setAlignment('');
  }, [allowedAlignments]);


  const changeAlignmentInfo = (e) => {
    switch (e) {
      case "Lawful Good":
        setAlignmentInfo(
          <p>
            <strong>Lawful Good:</strong>
            <br /> A lawful good character acts as a good person is expected
            or required to act. She combines a commitment to oppose evil with
            the discipline to fight relentlessly. She tells the truth, keeps
            her word, helps those in need, and speaks out against injustice.<br />
            <br />
            A lawful good character hates to see the guilty go unpunished.
            Lawful good combines honor with compassion.
          </p>
        );
        break;
      case "Neutral Good":
        setAlignmentInfo(
          <p>
            <strong>Neutral Good:</strong>
            <br />A neutral good character does the best that a good person
            can do. He is devoted to helping others. He works with kings and
            magistrates but does not feel beholden to them.
            <br />
            <br />Neutral good means doing what is good and right without bias
            for or against order.
          </p>
        );
        break;
      case "Chaotic Good":
        setAlignmentInfo(
          <p>
            <strong>Chaotic Good:</strong>
            <br />A chaotic good character acts as his conscience directs him
            with little regard for what others expect of him. He makes his own
            way, but he&apos;s kind and benevolent. He believes in goodness and
            right but has little use for laws and regulations.
            <br />
            <br />
            Chaotic good combines a good heart with a free spirit.
          </p>
        );
        break;
      case "Lawful Neutral":
        setAlignmentInfo(
          <p>
            <strong>Chaotic Good:</strong>
            <br />A lawful neutral character acts as law, tradition, or a
            personal code directs her. Order and organization are paramount.
            She may believe in personal order and live by a code or standard,
            or she may believe in order for all and favor a strong, organized
            government.
            <br />
            <br />
            Lawful neutral means you are reliable and honorable without being
            a zealot.
          </p>
        );
        break;
      case "Neutral":
        setAlignmentInfo(
          <p>
            <strong>Neutral:</strong>
            <br />A neutral character does what seems to be a good idea. She
            doesn&apos;t feel strongly one way or the other when it comes to good
            vs. evil or law vs. chaos (and thus neutral is sometimes called
              &apos;true neutral&apos;). Most neutral characters exhibit a lack of
            conviction or bias rather than a commitment to neutrality.
            <br />
            <br />
            Neutral means you act naturally in any situation, without
            prejudice or compulsion.
          </p>
        );
        break;
      case "Chaotic Neutral":
        setAlignmentInfo(
          <p>
            <strong>Chaotic Neutral:</strong>
            <br />A chaotic neutral character follows his whims. He is an
            individualist first and last. He values his own liberty but
            doesn&apos;t strive to protect others&apos; freedom. He avoids authority,
            resents restrictions, and challenges traditions. <br />
            <br />
            Chaotic neutral represents freedom from both society&apos;s
            restrictions and a do-gooder&apos;s zeal.{" "}
          </p>
        );
        break;
      case "Lawful Evil":
        setAlignmentInfo(
          <p>
            <strong>Lawful Evil:</strong>
            <br />A lawful evil villain methodically takes what he wants
            within the limits of his code of conduct without regard for whom
            it hurts. He cares about tradition, loyalty, and order, but not
            about freedom, dignity, or life. He plays by the rules but without
            mercy or compassion. <br />
            <br />
            Lawful evil represents methodical, intentional, and organized
            evil.
          </p>
        );
        break;
      case "Neutral Evil":
        setAlignmentInfo(
          <p>
            <strong>Neutral Evil:</strong>
            <br />A neutral evil villain does whatever she can get away with.
            She is out for herself, pure and simple. She sheds no tears for
            those she kills, whether for profit, sport, or convenience. Some
            neutral evil villains hold up evil as an ideal, committing evil
            for its own sake. <br />
            <br />
            Neutral evil represents pure evil without honor and without
            variation.
          </p>
        );
        break;
      case "Chaotic Evil":
        setAlignmentInfo(
          <p>
            <strong>Chaotic Evil:</strong>
            <br />A chaotic evil character does what his greed, hatred, and
            lust for destruction drive him to do. He is vicious, arbitrarily
            violent, and unpredictable. If he is simply out for whatever he
            can get, he is ruthless and brutal.
            <br />
            <br />
            Chaotic evil represents the destruction not only of beauty and
            life, but also of the order on which beauty and life depend.
          </p>
        );
        break;
      default:
        break;
    }
  };

  const changeAlignment = (e) => {
    const targetText = e.target.textContent.toString();
    if (!targetText) {
      return;
    }
    if (targetText === prevButtonPressed && showAlignment) {
      setShowAlignment(!showAlignment);
    } else {
      setShowAlignment(true);
    }
    const currentAlignment = e.target.textContent.toString();
    setAlignment(currentAlignment);
    changeAlignmentInfo(currentAlignment);
    setPrevButtonPressed(targetText);
    updateAlignment(currentAlignment);
  };

  const alignmentMap = {
    LG: "Lawful Good",
    NG: "Neutral Good",
    CG: "Chaotic Good",
    LN: "Lawful Neutral",
    N: "Neutral",
    CN: "Chaotic Neutral",
    LE: "Lawful Evil",
    NE: "Neutral Evil",
    CE: "Chaotic Evil"
  };

  const toggleRef = React.createRef();
  return (
    <div>
      <FormGroup controlId="alignmentValue">
        <Col sm={1} />
        <Col
          componentClass={ControlLabel}
          sm={2}
          className={cssStyles.createColLabelStyle}
        ><div style={{ fontSize: '19px', fontFamily: "'Josefin Sans', sans-serif" }}>Alignment:</div>
        </Col>
        <Col sm={8}>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="radio"
              name="alignmentValue"
              ref={toggleRef}
              className={cssStyles.alignmentButtonGroupParent}
            >
              {Object.keys(alignmentMap).map((entry) => {
                return (
                  <ToggleButton
                    value={alignmentMap[entry]}
                    className={cssStyles.alignmentButtonGroup}
                    disabled={!(alignments.includes(entry))}
                    checked={alignment.toString() === alignmentMap[entry]}
                    onClick={
                      !(alignments.indexOf(entry) > -1)
                        ? null
                        : changeAlignment
                    }
                  >
                    {alignmentMap[entry]}
                  </ToggleButton>
                );
              })}
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>
        <Col sm={1} />
      </FormGroup>
      <FormGroup>
        <Col sm={2} />
        <Col sm={8}>
          <div className={cssStyles.alignmentInfoDiv}>
            <strong>{clericAlignmentPrompt}</strong>
            {(allowedAlignments.length < 9) ? <div><strong>Alignments restricted due to class</strong></div> : <div />}
          </div>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col sm={2} />
        <Col sm={8}>
          <Collapse in={showAlignment} style={alignmentDivStyle}>
            <div>
              <Well style={{ backgroundColor: 'transparent' }}>
                <div>{alignmentInfo}</div>
              </Well>
            </div>
          </Collapse>
        </Col>
        <Col sm={2} />
      </FormGroup>
    </div>
  );
};

CreateCharacterAlignmentComponent.propTypes = {
  updateAlignment: PropTypes.func.isRequired,
  charClass: PropTypes.object.isRequired,
  allowedAlignments: PropTypes.array.isRequired,
};


export default CreateCharacterAlignmentComponent;
