import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles/index";
import * as cssStyles from "../../../styles/Styles.css";
import styled from 'styled-components';
import Character from './characterModel.js';
import Divider from '@material-ui/core/Divider';


const EditTitleStyle = styled.div`
  font-size: 27px;
  color: #df691a;
  text-align: center;
  font-family: 'Cinzel Decorative', sans-serif;
  margin-bottom: 35px;
`;
const StatSeparator = styled.div`
  margin-top: 30px;
  padding-bottom: 30px;
`;

const StatName = styled.div`
  font-size: 13px;
  color: #ffffff;
  text-align: left;
  font-family: 'Cinzel Decorative', sans-serif;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
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

const ContainerStyle = styled.div`
  margin-bottom: 45px;
  margin-top: 45px;
`;

const styles = theme => ({
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
        // color: '#E9CB9A',
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


class CharacterEditStatsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editCharacter: new Character(),
            show: false
        };
    }

    componentDidMount(){
        this.setState({ editCharater: this.props.editCharacter });
    }
    
    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props !== nextProps) {
          this.setState({ editCharacter: nextProps.editCharacter });
        }
    }

    changeSTR = () => {
        // const updateCharacter = Object.assign({}, this.state.editCharacter);
        // updateCharacter.gender = newGender;
        console.log('UPDATE STRENGTH');
        this.props.updateCharacter();
    }

    changeSTRModifier = () => {
        // const updateCharacter = Object.assign({}, this.state.editCharacter);
        // updateCharacter.gender = newGender;
        console.log('UPDATE STRENGTH MOd');
        this.props.updateCharacter();
    }
    changeDEX = () => {
        // const updateCharacter = Object.assign({}, this.state.editCharacter);
        // updateCharacter.gender = newGender;
        console.log('UPDATE changeDEX');
        this.props.updateCharacter();
    }

    changeDEXModifier = () => {
        // const updateCharacter = Object.assign({}, this.state.editCharacter);
        // updateCharacter.gender = newGender;
        console.log('UPDATE STRENGTH MOd');
        this.props.updateCharacter();
    }
    changeCON = () => {
        // const updateCharacter = Object.assign({}, this.state.editCharacter);
        // updateCharacter.gender = newGender;
        console.log('UPDATE changeDEX');
        this.props.updateCharacter();
    }

    changeCONModifier = () => {
        // const updateCharacter = Object.assign({}, this.state.editCharacter);
        // updateCharacter.gender = newGender;
        console.log('UPDATE STRENGTH MOd');
        this.props.updateCharacter();
    }
    changeINT = () => {
        // const updateCharacter = Object.assign({}, this.state.editCharacter);
        // updateCharacter.gender = newGender;
        console.log('UPDATE changeDEX');
        this.props.updateCharacter();
    }

    changeINTModifier = () => {
        // const updateCharacter = Object.assign({}, this.state.editCharacter);
        // updateCharacter.gender = newGender;
        console.log('UPDATE STRENGTH MOd');
        this.props.updateCharacter();
    }
    changeWIS = () => {
        // const updateCharacter = Object.assign({}, this.state.editCharacter);
        // updateCharacter.gender = newGender;
        console.log('UPDATE changeDEX');
        this.props.updateCharacter();
    }

    changeWISModifier = () => {
        // const updateCharacter = Object.assign({}, this.state.editCharacter);
        // updateCharacter.gender = newGender;
        console.log('UPDATE STRENGTH MOd');
        this.props.updateCharacter();
    }
    changeCHA = () => {
        // const updateCharacter = Object.assign({}, this.state.editCharacter);
        // updateCharacter.gender = newGender;
        console.log('UPDATE changeDEX');
        this.props.updateCharacter();
    }

    changeCHAModifier = () => {
        // const updateCharacter = Object.assign({}, this.state.editCharacter);
        // updateCharacter.gender = newGender;
        console.log('UPDATE STRENGTH MOd');
        this.props.updateCharacter();
    }

    render() {
        const { classes } = this.props;
        return (
            <ContainerStyle>
                {/* <EditTitleStyle>Stats</EditTitleStyle> */}
                <div style={{ marginLeft: '8%', marginRight: '8%' }}>
                    <Grid container spacing={16} justify="center" xs={12} >
                        <Grid container spacing={16} justify="center" xs={6}>
                            <Grid container spacing={16} justify="center" xs={12}>
                                <Grid item xs={4} style={itemStyle} >
                                    <Grid container spacing={16} justify="center" xs={12}>
                                        <Grid item xs={4} style={itemStyle} >
                                            <StatName>Strength</StatName>
                                            <StatLabel>STR</StatLabel>
                                        </Grid>
                                        <Grid item xs={8} style={itemStyle} >
                                            <TextField
                                                onChange={this.changeSTR}
                                                id="STR"
                                                htmlFor="custom-css-standard-input"
                                                value={
                                                    this.state.editCharacter.STR
                                                        ? this.state.editCharacter.STR
                                                        : ""
                                                }
                                                inputRef={ref => {
                                                    this.STR = ref;
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputStatRoot,
                                                        input: classes.inputStatMain,
                                                    }
                                                }}
                                                FormHelperTextProps={{
                                                    className: classes.helperText
                                                }}
                                                style={{ width: '40px', paddingBottom: '0px', marginLeft: '10px' }}
                                            />
                                            <TextField
                                                onChange={this.changeSTRModifier}
                                                id="STRMod"
                                                helperText="Modifier"
                                                htmlFor="custom-css-standard-input"
                                                value={
                                                    this.state.editCharacter.modifiers.STR
                                                        ? this.state.editCharacter.modifiers.STR
                                                        : ""
                                                }
                                                inputRef={ref => {
                                                    this.STRMod = ref;
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputStatRoot,
                                                        input: classes.inputStatModifier,
                                                    }
                                                }}
                                                FormHelperTextProps={{
                                                    className: classes.helperText
                                                }}
                                                style={{ width: '40px', paddingBottom: '0px', marginLeft: '15px' }}
                                                />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4} style={itemStyle} >
                                    <Grid container spacing={16} justify="center" xs={12}>
                                        <Grid item xs={4} style={itemStyle} >
                                            <StatName>Dexterity</StatName>
                                            <StatLabel>DEX</StatLabel> 
                                        </Grid>
                                        <Grid item xs={8} style={itemStyle} >
                                            <TextField
                                                onChange={this.changeDEX}
                                                id="DEX"
                                                htmlFor="custom-css-standard-input"
                                                value={
                                                    this.state.editCharacter.DEX
                                                        ? this.state.editCharacter.DEX
                                                        : ""
                                                }
                                                inputRef={ref => {
                                                    this.DEX = ref;
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputStatRoot,
                                                        input: classes.inputStatMain,
                                                    }
                                                }}
                                                style={{ width: '40px', paddingBottom: '0px', marginLeft: '10px' }}
                                            />
                                            <TextField
                                                onChange={this.changeDEXModifier}
                                                id="DEXMod"
                                                helperText="Modifier"
                                                htmlFor="custom-css-standard-input"
                                                value={
                                                    this.state.editCharacter.modifiers.DEX
                                                        ? this.state.editCharacter.modifiers.DEX
                                                        : ""
                                                }
                                                inputRef={ref => {
                                                    this.DEXMod = ref;
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputStatRoot,
                                                        input: classes.inputStatModifier,
                                                    }
                                                }}
                                                FormHelperTextProps={{
                                                    className: classes.helperText
                                                }}
                                                style={{ width: '40px', paddingBottom: '0px', marginLeft: '15px' }}
                                                />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4} style={itemStyle} >
                                    <Grid container spacing={16} justify="center" xs={12}>
                                        <Grid item xs={4} style={itemStyle} >
                                            <StatName>Constitution</StatName>
                                            <StatLabel>CON</StatLabel>
                                        </Grid>
                                        <Grid item xs={8} style={itemStyle} >
                                            <TextField
                                                onChange={this.changeCON}
                                                id="CON"
                                                htmlFor="custom-css-standard-input"
                                                value={
                                                    this.state.editCharacter.CON
                                                        ? this.state.editCharacter.CON
                                                        : ""
                                                }
                                                inputRef={ref => {
                                                    this.CON = ref;
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputStatRoot,
                                                        input: classes.inputStatMain,
                                                    }
                                                }}
                                                style={{ width: '40px', paddingBottom: '0px', marginLeft: '10px' }}
                                            />
                                            <TextField
                                                onChange={this.changeCONModifier}
                                                id="CONMod"
                                                helperText="Modifier"
                                                htmlFor="custom-css-standard-input"
                                                value={
                                                    this.state.editCharacter.modifiers.CON
                                                        ? this.state.editCharacter.modifiers.CON
                                                        : ""
                                                }
                                                inputRef={ref => {
                                                    this.CONMod = ref;
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputStatRoot,
                                                        input: classes.inputStatModifier,
                                                    }
                                                }}
                                                FormHelperTextProps={{
                                                    className: classes.helperText
                                                }}
                                                style={{ width: '40px', paddingBottom: '0px', marginLeft: '15px' }}
                                                />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider className={classes.divider}/>
                            <Grid container spacing={16} justify="center" xs={12}>
                                <Grid item xs={4} style={itemStyle} >
                                    <Grid container spacing={16} justify="center" xs={12}>
                                        <Grid item xs={4} style={itemStyle} >
                                            <StatName>Intelligence</StatName>
                                             <StatLabel>INT</StatLabel>
                                        </Grid>
                                        <Grid item xs={8} style={itemStyle} >
                                            <TextField
                                                onChange={this.changeINT}
                                                id="INT"
                                                htmlFor="custom-css-standard-input"
                                                value={
                                                    this.state.editCharacter.INT
                                                        ? this.state.editCharacter.INT
                                                        : ""
                                                }
                                                inputRef={ref => {
                                                    this.INT = ref;
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputStatRoot,
                                                        input: classes.inputStatMain,
                                                    }
                                                }}
                                                style={{ width: '40px', paddingBottom: '0px', marginLeft: '10px' }}
                                            />
                                            <TextField
                                                onChange={this.changeINTModifier}
                                                id="INTMod"
                                                helperText="Modifier"
                                                htmlFor="custom-css-standard-input"
                                                value={
                                                    this.state.editCharacter.modifiers.INT
                                                        ? this.state.editCharacter.modifiers.INT
                                                        : ""
                                                }
                                                inputRef={ref => {
                                                    this.INTMod = ref;
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputStatRoot,
                                                        input: classes.inputStatModifier,
                                                    }
                                                }}
                                                FormHelperTextProps={{
                                                    className: classes.helperText
                                                }}
                                                style={{ width: '40px', paddingBottom: '0px', marginLeft: '15px' }}
                                                />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4} style={itemStyle} >
                                    <Grid container spacing={16} justify="center" xs={12}>
                                        <Grid item xs={4} style={itemStyle} >
                                            <StatName>Wisdom</StatName>
                                            <StatLabel>WIS</StatLabel>
                                        </Grid>
                                        <Grid item xs={8} style={itemStyle} >
                                            <TextField
                                                onChange={this.changeWIS}
                                                id="WIS"
                                                htmlFor="custom-css-standard-input"
                                                value={
                                                    this.state.editCharacter.WIS
                                                        ? this.state.editCharacter.WIS
                                                        : ""
                                                }
                                                inputRef={ref => {
                                                    this.WIS = ref;
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputStatRoot,
                                                        input: classes.inputStatMain,
                                                    }
                                                }}
                                                style={{ width: '40px', paddingBottom: '0px', marginLeft: '10px' }}
                                            />
                                            <TextField
                                                onChange={this.changeWISModifier}
                                                id="WISMod"
                                                helperText="Modifier"
                                                htmlFor="custom-css-standard-input"
                                                value={
                                                    this.state.editCharacter.modifiers.WIS
                                                        ? this.state.editCharacter.modifiers.WIS
                                                        : ""
                                                }
                                                inputRef={ref => {
                                                    this.WISMod = ref;
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputStatRoot,
                                                        input: classes.inputStatModifier,
                                                    }
                                                }}
                                                FormHelperTextProps={{
                                                    className: classes.helperText
                                                }}
                                                style={{ width: '40px', paddingBottom: '0px', marginLeft: '15px' }}
                                                />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4} style={itemStyle} >
                                  
                                    <Grid container spacing={16} justify="center" xs={12}>
                                        <Grid item xs={4} style={itemStyle} >
                                            <StatName>Charisma</StatName>
                                             <StatLabel>CHA</StatLabel>
                                        </Grid>
                                        <Grid item xs={8} style={itemStyle} >
                                            <TextField
                                                onChange={this.changeCHA}
                                                id="CHA"
                                                htmlFor="custom-css-standard-input"
                                                value={
                                                    this.state.editCharacter.CHA
                                                        ? this.state.editCharacter.CHA
                                                        : ""
                                                }
                                                inputRef={ref => {
                                                    this.CHA = ref;
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputStatRoot,
                                                        input: classes.inputStatMain,
                                                    }
                                                }}
                                                style={{ width: '40px', paddingBottom: '0px', marginLeft: '10px' }}
                                            />
                                            <TextField
                                                onChange={this.changeCHAModifier}
                                                id="CHAMod"
                                                helperText="Modifier"
                                                htmlFor="custom-css-standard-input"
                                                value={
                                                    this.state.editCharacter.modifiers.CHA
                                                        ? this.state.editCharacter.modifiers.CHA
                                                        : ""
                                                }
                                                inputRef={ref => {
                                                    this.CHAMod = ref;
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputStatRoot,
                                                        input: classes.inputStatModifier,
                                                    }
                                                }}
                                                FormHelperTextProps={{
                                                    className: classes.helperText
                                                }}
                                                style={{ width: '40px', paddingBottom: '0px', marginLeft: '15px' }}
                                                />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={16} justify="center" xs={6}>
                            Defense
                         </Grid>
                    </Grid>
                </div >
            </ContainerStyle>
        );
    }
}



const itemStyle = {
    background: "transparent",
    fontSize: "15px",
    fontFamily: '"Crimson Text", serif'
}

export default withStyles(styles)(CharacterEditStatsComponent);
