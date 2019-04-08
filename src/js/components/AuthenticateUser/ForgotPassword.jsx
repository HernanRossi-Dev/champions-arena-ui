import React, { useState } from "react";
import { clone } from 'lodash';
import * as cssStyles from "../../../styles/Styles.css";
import {
	Button,
	ButtonToolbar,
	Col,
	ControlLabel,
	Form,
	FormGroup,
	Modal,
	Panel
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FormControl from "react-bootstrap/es/FormControl";
import { getAuthToken, fetchUser } from '../../apiUtils/userApiHelpers';

const divContainerStyle = {
	display: "flex",
	width: "100%",
	flexDirection: "column",
	alignItems: "center"
};
const divContainerStyleChild = {
	width: "25%",
	alignItems: "center"
};
const panelBody = {
	alignItems: "center"
};
const panelParentStyle = {
	borderRadius: "5px",
	marginTop: "25%",
	width: "100%"
};
const buttonToolbarStyle = {
	alignItems: "center"
};
const panelHeadingStyle = {
	borderRadius: "5px 5px 0 0",
	textAlign: "center",
	fontFamily: '"Merriweather", serif',
	marginBottom: "20px",
	borderBottom: "1px solid #df691a"
};

function ForgotPassword () {
	const [state, setState] = useState({
		name: '',
		password: '',
    email: '',
    user: {}
	  });
	const [show, setShow] = useState(false);

	const sendUserInfo = async () => {
		const serverAuth = await getAuthToken();
		const userQuery = `?email=${email}&sendEmail=true`;
	  await fetchUser(userQuery, serverAuth);
    setShow(true);
	}

  const handleChange = (event) => {
    if (!event) {
      return;
    }
    const newState = clone(state);
    newState.emai = event.target.value;
    setState(newState);
  };

  return (
    <div className={cssStyles.loginParent}>
      <div style={divContainerStyle}>
        <div style={divContainerStyleChild}>
          <Panel style={panelParentStyle}>
            <Panel.Heading style={panelHeadingStyle}>
              <Panel.Title>
                Welcome to the{" "}
                <span style={{ fontFamily: "'Cinzel Decorative', cursive" }}>
                  Arena
                </span>
                <br /> Input your email address and we will send you a temporary password
              </Panel.Title>
            </Panel.Heading>
            <Form horizontal style={panelBody}>
              <FormGroup>
                <Col sm={1} />
                <Col
                  componentClass={ControlLabel}
                  sm={2}
                  className={cssStyles.createColLabelStyle}
                >
                  Email
                </Col>{" "}
                <Col sm={1} />
                <Col sm={5}>
                  <FormControl
                    name={'email'}
                    placeholder='Enter email'
                    onChange={handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={4} />
                <Col sm={6} style={buttonToolbarStyle}>
                  <ButtonToolbar style={buttonToolbarStyle}>
                      <Button bsStyle="primary" onClick={sendUserInfo}>Submit</Button>
                    <LinkContainer
                      to={'/signin'}
                      style={{ margin: "0px 0px 0px 5px" }}
                    >
                      <Button >
                        Back
                      </Button>
                    </LinkContainer>
                  </ButtonToolbar>
                </Col>
              </FormGroup>
              <FormGroup>
                <Modal show={show} onHide={()=> setShow(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Email Sent</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>An email with your temporary password has been sent to the address provided</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={()=> setShow(false)}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </FormGroup>
            </Form>
          </Panel>
        </div>
      </div>
    </div>
  );
}
export default withRouter(connect()(ForgotPassword));
