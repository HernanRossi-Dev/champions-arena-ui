import styled from 'styled-components';
import React from 'react';

const LoginContainer = styled.div`
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

const LoginParent = styled.div`
  background: transparent;
  z-index: 8000;
  width: 100vw !important;
  display: flex;
  align-content: center;
  -webkit-align-content: center;
`;

const ContainerStyled = styled.div`
  backgroundColor: transparent;
  display: flex;
  width: 100%;
  flexDirection: column;
  alignItems: center;
`;

const ChildContainerStyled = styled.div`
  width: 25%;
  alignItems: center;
`;

export { ChildContainerStyled, ContainerStyled, LoginParent, LoginContainer };