import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import {
  Button,
  ButtonToolbar,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  InputGroup,
  Panel,
  Row
} from "react-bootstrap";
import * as cssStyles from "../../../styles/Styles.css";

export const CharacterFilter = (props) => {
  const { initFilter } = props;
  const [classChar, setClass] = useState("");
  const [ancestry, setAncestry] = useState("");
  const [level_gte, setLevelGTE] = useState("");
  const [level_lte, setLevelLTE] = useState("");
  const [changed, setChanged] = useState("");

  const createInitFilter = (oldInitFilter) => {
    const queryString = oldInitFilter.split("&");
    const newInitFilter = {};
    const queryLength = queryString.length;
    if (queryLength > 1) {
      for (let i = 1; i < queryLength; i += 1) {
        const currentFilter = queryString[i].split("=");
        const key = currentFilter[0];
        newInitFilter[key] = currentFilter[1];
      }
    }
    return newInitFilter;
  };

  useEffect(() => {
    const newInitFilter = createInitFilter(initFilter);
    setClass(newInitFilter.class);
    setAncestry(newInitFilter.ancestry);
    setLevelGTE(newInitFilter.levelString);
    setLevelLTE(newInitFilter.level_lte);
    setChanged(false);
  }, [
    initFilter.class,
    initFilter.ancestry,
    initFilter.level_gte,
    initFilter.level_lte
  ]);

  const onChangeAncestry = (e) => {
    setAncestry(e.target.value);
    setChanged(true);
  };

  const onChangeClass = (e) => {
    setClass(e.target.value);
    setChanged(true);
  };

  const onChangeLevelLte = (e) => {
    const levelString = e.target.value;
    if (levelString.match(/^\d*$/)) {
      setLevelLTE(e.target.value);
      setChanged(true);
    }
  };

  const onChangeLevelGte = (e) => {
    const levelString = e.target.value;
    if (levelString.match(/^\d*$/)) {
      setLevelGTE(e.target.value);
      setChanged(true);
    }
  };

  const resetFilter = () => {
    const filters = ["class", "ancestry", "level_gte", "level_lte"];
    for (const index of filters) {
      if (initFilter[filters[index]] === undefined) {
        initFilter[filters[index]] = "";
      }
    }
    const newInitFilter = createInitFilter(props.initFilter);
    setClass(newInitFilter.class);
    setAncestry(newInitFilter.ancestry);
    setLevelGTE(newInitFilter.levelString);
    setLevelLTE(newInitFilter.level_lte);
    setChanged(false);
  };

  const clearFilter = () => {
    props.setFilter({});
  };

  const applyFilter = () => {
    const newFilter = {};
    if (ancestry) {
      newFilter.ancestry = ancestry;
    }
    if (classChar) {
      newFilter.class = classChar;
    }
    if (level_gte) {
      newFilter.level_gte = level_gte;
    }
    if (level_lte) {
      newFilter.level_lte = level_lte;
    }
    props.setFilter(newFilter);
  };

  return (
    <Panel className={cssStyles.panelHeaderParent} defaultExpanded>
      <Panel.Heading className={cssStyles.panelHeader}>
        <Panel.Title className={cssStyles.panelHeaderText} toggle>Filter Characters</Panel.Title>
      </Panel.Heading>
      <Panel.Collapse>
        <Panel.Body>
          <Row>
            <Col xs={6} sm={4} md={3} lg={3}>
              <FormGroup>
                <ControlLabel>Class</ControlLabel>
                <FormControl
                  componentClass="select"
                  value={classChar}
                  onChange={onChangeClass}
                >
                  <option value="">Any</option>
                  <option value="Monk">Monk</option>
                  <option value="Ranger">Ranger</option>
                  <option value="Wizard">Wizard</option>
                  <option value="Druid">Druid</option>
                  <option value="Fighter">Fighter</option>
                  <option value="Paladin">Paladin</option>
                  <option value="Sorcerer">Sorcerer</option>
                  <option value="Rogue">Rogue</option>
                  <option value="Cleric">Cleric</option>
                  <option value="Warlock">Warlock</option>
                  <option value="Bard">Bard</option>
                  <option value="Barbarian">Barbarian</option>
                  <option value="Alchemist">Alchemist</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col xs={6} sm={4} md={3} lg={3}>
              <FormGroup>
                <ControlLabel>Ancestry</ControlLabel>
                <FormControl
                  componentClass="select"
                  value={ancestry}
                  onChange={onChangeAncestry}
                >
                  <option value="">Any</option>
                  <option value="Human">Human</option>
                  <option value="Dwarf">Dwarf</option>
                  <option value="Elf">Elf</option>
                  <option value="Gnome">Gnome</option>
                  <option value="Half-Elf">Half-Elf</option>
                  <option value="Half-Orc">Half-Orc</option>
                  <option value="Halfling">Halfling</option>
                  <option value="Goblin">Goblin</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col xs={6} sm={4} md={3} lg={3}>
              <FormGroup>
                <ControlLabel>Level</ControlLabel>
                <InputGroup>
                  <FormControl value={level_gte} onChange={onChangeLevelGte} />
                  <InputGroup.Addon>-</InputGroup.Addon>
                  <FormControl value={level_lte} onChange={onChangeLevelLte} />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <ButtonToolbar>
                  <Button bsStyle="primary" onClick={applyFilter}>Apply</Button>
                  <Button onClick={resetFilter} disabled={!changed}>Reset</Button>
                  <Button onClick={clearFilter}>Clear</Button>
                </ButtonToolbar>
              </FormGroup>
            </Col>
          </Row>
        </Panel.Body>
      </Panel.Collapse>
    </Panel>
  );
};

CharacterFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  initFilter: PropTypes.string.isRequired
};

export default withRouter(CharacterFilter);
