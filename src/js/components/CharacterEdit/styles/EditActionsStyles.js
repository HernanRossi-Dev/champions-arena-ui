import styled from 'styled-components';

export const styles = {
  root: {
    fontColor: '#E9CB9A'
  },
  input: {
    color: '#ffffff',
    fontSize: 22,
    fontColor: '#ffffff',
    fontFamily: "'ZCOOL XiaoWei', serif"
  },
  inputName: {
    color: '#ffffff',
    fontSize: 30,
    fontColor: '#ffffff',
    fontFamily: "'ZCOOL XiaoWei', serif"
  },
  inputStride: {
    color: '#ffffff',
    fontSize: 30,
    fontColor: '#ffffff',
    fontFamily: "'ZCOOL XiaoWei', serif"
  },
  inputMelee: {
    color: '#ffffff',
    fontSize: 18,
    fontColor: '#ffffff',
    fontFamily: "'ZCOOL XiaoWei', serif"
  },
  helperText: {
    color: '#ffffff',
    fontSize: 12,
    fontColor: '#ffffff',
    fontFamily: "'Cinzel Decorative', sans-serif",
    textShadow: '1px 1px 1px #E9CB9A',
  },
  selectEmpty: {
    color: "white",
    width: '125px',
    paddingTop: '5px',
    fontSize: '19px',
  },
  selectIcon: {
    color: '#df691a',
  },
};

//Edit actions styles
export const EditTitleStyle = styled.div`
font-size: 38px;
color: #ffffff;
text-align: left;
font-family: 'ZCOOL XiaoWei', serif;
text-shadow: 1px 1px 1px #df691a;
margin-left: 25px;
`;

export const GradientHeadingUnder = styled.div`
  background: rgba(225,105,25,1);
  background: -moz-linear-gradient(-45deg, rgba(225,105,25,1) 0%, rgba(255,185,138,0.37) 43%, rgba(255,185,138,0.24) 52%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(225,105,25,1)), color-stop(43%, rgba(255,185,138,0.37)), color-stop(52%, rgba(255,185,138,0.24)));
  background: -webkit-linear-gradient(-45deg, rgba(225,105,25,1) 0%, rgba(255,185,138,0.37) 43%, rgba(255,185,138,0.24) 52%);
  background: -o-linear-gradient(-45deg, rgba(225,105,25,1) 0%, rgba(255,185,138,0.37) 43%, rgba(255,185,138,0.24) 52%);
  background: -ms-linear-gradient(-45deg, rgba(225,105,25,1) 0%, rgba(255,185,138,0.37) 43%, rgba(255,185,138,0.24) 52%);
  background: linear-gradient(135deg, rgba(225,105,25,1) 0%, rgba(255,185,138,0.37) 43%, rgba(255,185,138,0.24) 52%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e16919', endColorstr='#ffb98a', GradientType=1 );
  border-radius: 0px 13px 200px 0px;
  -moz-border-radius: 0px 13px 200px 0px;
  -webkit-border-radius: 0px 13px 200px 0px;
  border: 7px none #000000;
  width: 65%;
  height: 12px; 
  margin-left: 25px;
  margin-top: -10p;
  margin-bottom: 20px;
`;