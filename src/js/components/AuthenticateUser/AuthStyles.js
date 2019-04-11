import styled from 'styled-components';
import React from 'react';

export const LoginContainer = styled.div`
  width: 25%;
  background-color: transparent;
  align-items: center;

  @media (max-width: 1560px) {
    width: 35%;
  }
  @media (max-width: 1170px) {
    width: 50%;
  }

  @media (max-width: 780px) {
    width: 90%;
  }
`;

export const LoginParent = styled.div`
  background: transparent;
  z-index: 8000;
  width: 100vw !important;
  display: flex;
  align-content: center;
  -webkit-align-content: center;
`;

export const ContainerStyled = styled.div`
  backgroundColor: transparent;
  display: flex;
  width: 100%;
  flexDirection: column;
  alignItems: center;
`;

export const ChildContainerStyled = styled.div`
  width: 25%;
  alignItems: center;
`;

export const divContainerStyle = {
  backgroundColor: 'transparent',
	display: "flex",
	width: "100%",
	flexDirection: "column",
	alignItems: "center"
};
export const divContainerStyleChild = {
	width: "25%",
	alignItems: "center"
};
export const panelBody = {
  alignItems: "center",
  backgroundColor: 'transparent'  
};
export const panelParentStyle = {
	borderRadius: "5px",
	marginTop: "25%",
	width: "100%"
};
export const buttonToolbarStyle = {
	alignItems: "center"
};
export const panelHeadingStyle = {
	borderRadius: "5px 5px 0 0",
	textAlign: "center",
	fontFamily: '"Merriweather", serif',
	marginBottom: "20px",
	borderBottom: "1px solid #df691a"
};

export const styles = {
  root: {
    fontColor: 'white'
  },
  input: {
    color: "white",
    fontSize: 18,
    fontColor: 'white'
  },
  labelStyle: {
    color: '#df691a',
    fontSize: 16,
    fontFamily: "'Crimson Text', sans-serif",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};