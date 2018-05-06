import "whatwg-fetch";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import store from "../../store/index.js";
import * as CharacterActionCreators from "../../actions/CharacterActionCreators.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cssStyles from "../../../styles/Styles.css";
import { TextField } from "material-ui";
import { withStyles } from "material-ui/styles";
import CharacterEditBasicInfoComponent from "./CharacterEditBasicInfoComponent.jsx";
import {
  Button,
  ButtonToolbar,
  Col,
  Form,
  FormGroup,
  Panel,
  Modal,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const styles = {
  root: {
    fontColor: "white"
  },
  input: {
    color: "white",
    fontSize: 20,
    fontColor: "white",
    fontFamily: "'Josefin Sans', sans-serif"
  },
  helperText: {
    color: "white",
    fontSize: 14,
    fontColor: "white",
    fontFamily: "'Cinzel Decorative', sans-serif"
    // textShadow: '1px 1px 0px #DFFE02',
  }
};
class CharacterEdit extends React.Component {
  constructor(props) {
    super();
    const { dispatch } = props;
    this.onSubmit = this.onSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeAlignment = this.changeAlignment.bind(this);
    this.boundActionsCreator = bindActionCreators(
      CharacterActionCreators,
      dispatch
    );
    this.state = {
      editCharacter: {
        name: ""
      },
      show: false
    };
  }

  componentDidMount() {
    this.loadCharacter();
  }

  loadCharacter() {
    const that = this;
    let { dispatch } = this.props;
    const callBackSetState = () =>
      that.setState({
        editCharacter: store.getState().characterReducer.editCharacter
      });
    let action = CharacterActionCreators.fetchCharacter(
      this.props.match.params.id,
      callBackSetState
    );
    dispatch(action);
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  onSubmit(event) {
    // event.preventDefault();
    // let { dispatch } = this.props;
    // const updateHero = store.getState().characterReducer.editCharacter;
    // let action = CharacterActionCreators.updateCharacter(updateHero);
    // dispatch(action);
  }

  componentWillUnmount() {
    let { dispatch } = this.props;
    let action = CharacterActionCreators.clearCharacterEdit();
    dispatch(action);
  }

  changeName(newName) {
    // let updateCharName = Object.assign({}, this.state.editCharacter);
    // updateCharName.name = newName.trim();
    // this.setState({ editCharacter: updateCharName });
  }
  changeAlignment(newAlignment) {}

  render() {
    const { classes } = this.props;

    return (
      <Panel className={cssStyles.editCharacterPanelParent}>
        <Panel.Heading className={cssStyles.createCharacterPanelHeaderStyle} >
          <Panel.Title
            className={cssStyles.createCharacterPanelHeaderStyleText}
          >
            Character
          </Panel.Title>
        </Panel.Heading>
        <Form horizontal>
          <CharacterEditBasicInfoComponent
            editCharacter={this.state.editCharacter}
            changeName={this.changeName}
            changeAlignment={this.changeAlignment}
          />


          <hr className={cssStyles.hr} />

          <hr className={cssStyles.hr} />

          <hr className={cssStyles.hr} />

          <hr className={cssStyles.hr} />

          <hr className={cssStyles.hr} />

          <hr className={cssStyles.hr} />
          <FormGroup className={cssStyles.createColStyle}>
            <Col sm={8} />
            <Col sm={4}>
              <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.onSubmit}>
                  Save Changes
                </Button>
              </ButtonToolbar>
            </Col>
            <Modal
              show={this.state.show}
              onHide={this.handleClose}
              className={cssStyles.createCharacterClassModal}
            >
              <Modal.Header closeButton>
                <Modal.Title>Invalid Submission</Modal.Title>
              </Modal.Header>
              <Modal.Body />
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </FormGroup>
          <FormGroup>
            <Col sm={7} />
            <Col sm={4}>
              <ButtonToolbar>
                <LinkContainer to={"/characters"}>
                  <Button bsStyle={"link"}>Back to Character List</Button>
                </LinkContainer>
              </ButtonToolbar>
            </Col>
          </FormGroup>
        </Form>
      </Panel>
    );
  }
}

CharacterEdit.propTypes = {
  params: PropTypes.object,
  updateCharacter: PropTypes.func,
  fetchCharacter: PropTypes.func
};

const mapStateToProps = state => ({
  editCharacter: state.editCharacter
});

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(CharacterEdit))
);
