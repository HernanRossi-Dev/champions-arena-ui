import React, { useState } from "react";
import { clone } from 'lodash';
import * as cssStyles from "../../../styles/Styles.css";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { TextField } from '@material-ui/core';

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
// import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAuthToken, fetchUser } from '../../apiUtils/userApiHelpers';
import { LoginParent, styles, divContainerStyle, divContainerStyleChild, panelBody, panelParentStyle, buttonToolbarStyle, panelHeadingStyle } from './AuthStyles'

export const ForgotPassword = (props) => {
  const { classes } = props;

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
    newState.email = event.target.value;
    setState(newState);
  };

  return (
    <LoginParent>
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
                <Col sm={6}>
                   <TextField
                      id="user-email"
                      placeholder="User Email"
                      label={<span style={{ fontFamily: "'Crimson Text', sans-serif", color: '#df691a', fontSize: '16px' }}>User Email</span>}
                      onChange={handleChange}
                      // className={classes.root}
                      InputProps={{
                        className: classes.input,
                        root: classes.root
                      }}
                      InputLabelProps={{
                        root: classes.labelStyle
                      }}
                      style={{width: '100%'}}
                    />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col sm={4} />
                <Col sm={6} style={buttonToolbarStyle}>
                  <ButtonToolbar style={buttonToolbarStyle}>
                      <Button bsStyle="primary" onClick={sendUserInfo}>Submit</Button>
                    <Link
                      to={'/signin'}
                      style={{ margin: "0px 0px 0px 5px" }}
                    >
                      <Button >
                        Back
                      </Button>
                    </Link>
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
    </LoginParent>
  );
}

export default withRouter(connect()(withStyles(styles)(ForgotPassword)));
