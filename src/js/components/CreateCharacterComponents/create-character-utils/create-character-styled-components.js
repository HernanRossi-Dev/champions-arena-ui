import styled from 'styled-components';

export const AncestryButton = styled.button`
  background-color: transparent !important;

  font-size: 20px !important;
  font-family: "Crimson Text", serif;
  text-align: left !important;

  &:hover {
    box-shadow: inset 4px -1px 20px 20px rgba(0,0,0,0.8);
    transition: all 0.4s
  }
  &:active {
    box-shadow: inset 4px -1px 20px 10px rgba(0,0,0,0.12);
  }
`;

export const ClassButton = styled.button`
  background-color: transparent !important;

  font-size: 20px !important;
  font-family: "Crimson Text", serif;
  text-align: left !important;

  width: 30%;
`;
