import styled from 'styled-components';

export const DefenseStatBack = styled.div`
    position: relative;
    left: 42px;
    top: -3px;
    width: 0;
    height: 0;
    border: 40px solid transparent;
    border-top: 10px solid #df691a;
    text-align: center;
`;

export const StatName = styled.div`
    font-size: 13px;
    color: #ffffff;
    text-align: left;
    font-family: 'Cinzel Decorative', sans-serif;
    margin-bottom: 5px;
`;

export const DefName = styled.div`
    font-size: 17px;
    color: #ffffff;
    text-align: center;
    font-family: 'Cinzel Decorative', sans-serif;
    margin-bottom: 5px;
    width: 160px;
`;

export const PerName = styled.span`
    font-size: 17px;
    color: #ffffff;
    text-align: center;
    font-family: 'Cinzel Decorative', sans-serif;
    margin-bottom: 25px;
    width: 160px;
`;

export const StatLabel = styled.div`
    font-size: 25px;
    color: #ffffff;
    text-align: center;
    font-family: 'Volkhov', serif;
    margin-bottom: 15px;
    background-color: #D75600;
    border-radius: 10px;
    width: 60px;
    height: 35px;
    margin-bottom: 40px
`;

export const ContainerStyle = styled.div`
    margin-bottom: 45px;
    margin-top: 45px;
`;

export const styles = theme => ({
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
    fontSize: 35,
    fontColor: '#ffffff',
    fontFamily: "'ZCOOL XiaoWei', serif"
  },
  inputStatPER: {
    color: '#ffffff',
    fontSize: 18,
    fontColor: '#ffffff',
    fontFamily: "'ZCOOL XiaoWei', serif",
  },
  inputStatMain: {
    color: '#ffffff',
    fontSize: 25,
    fontColor: '#ffffff',
    fontFamily: "'ZCOOL XiaoWei', serif",
  },
  inputStatRoot: {
    paddingTop: '20px',
  },
  inputStatModifier: {
    color: '#ffffff',
    fontSize: 20,
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
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
});
export const mainStatProps = {
  type: 'number',
  autoComplete: 'nope',
  htmlFor: 'custom-css-standard-input',
  style: { width: '40px', paddingBottom: '0px', marginLeft: '10px' },
};

export const modifierStatProps = {
  htmlFor: 'custom-css-standard-input',
  helperText: "Modifier",
  style: { width: '40px', paddingBottom: '0px', marginLeft: '15px' },
};

export const additionalTopStatProps = {
  type: 'number',
  autoComplete: 'nope',
  htmlFor: 'custom-css-standard-input',
  style: { width: '55px',
  paddingBottom: '0px',
  marginLeft: '-12px',
  marginBlockStart: '-25px' },
};

export const additionalBotStatProps = {
  autoComplete: 'nope',
  htmlFor: 'custom-css-standard-input',
  style: { 
    width: '45px',
    paddingBottom: '0px',
    marginLeft: '40px',
    marginBlockStart: '-50px',
    textAlign: 'center',
  },
};
export const itemStyle = {
  background: "transparent",
  fontSize: "15px",
  fontFamily: '"Crimson Text", serif'
}

export const getAdditionalPropsMain = (classes) => {
  return {
    InputProps: {
      classes: {
        root: classes.inputStatRoot,
        input: classes.inputStatMain,
      }
    },
    FormHelperTextProps: {
      className: classes.helperText
    }
  }
};

export const getAdditionalPropsModifier = (classes) => {
  return {
    InputProps: {
      classes: {
        root: classes.inputStatRoot,
        input: classes.inputStatModifier
      }
    },
    FormHelperTextProps: {
      className: classes.helperText
    }
  }
};

export const getAdditionalPropsModTop = (classes) => {
  return {
    InputProps: {
      disableUnderline: true,
      classes: {
        root: classes.inputStatRoot,
        input: classes.inputStatMain,
      }
    },
  }
};

export const getAdditionalPropsModBot = (classes) => {
  return {
    InputProps: {
      classes: {
        root: classes.inputStatRoot,
        input: classes.inputStatMain,
      }
    },
  }
};