import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Table } from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import CharacterRow from "./CharacterRow.jsx";
import * as cssStyles from "../../../styles/Styles.css";

const LoaderContainer = styled.div`
  margin-left: 40%;
`;

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    color: '#df691a',
  },
});

export const CharacterTable = (props) => {
  const { classes, characters, isLoading } = props;
  if (!characters) {
    return null;
  }
  const characterRows = characters.map(character => (
    <CharacterRow
      key={character._id}
      character={character}
      deleteCharacter={props.deleteCharacter}
      isLoading={props.isLoading}
    />
  ));

  const renderBody = () => {
    if (isLoading) {
      return (
        <LoaderContainer>
          <CircularProgress className={classes.progress} size={70} thickness={6} />
        </LoaderContainer>
      );
    }
    return (
      <Table bordered condensed hover responsive className={cssStyles.characterTableParent}>
        <thead className={cssStyles.characterTableHeader}>
          <tr>
            <th className={cssStyles.HTRtextAt}>Type</th>
            <th className={cssStyles.HTRtextAt}>Name</th>
            <th className={cssStyles.HTRtextAt}>Class</th>
            <th className={cssStyles.HTRtextAt}>Ancestry</th>
            <th className={cssStyles.HTRtextAt}>Level</th>
            <th className={cssStyles.HTRtextAt}>XP</th>
            <th className={cssStyles.HTRtextAt}>HP</th>
            <th className={cssStyles.HTRtextAt}>STR</th>
            <th className={cssStyles.HTRtextAt}>DEX</th>
            <th className={cssStyles.HTRtextAt}>CON</th>
            <th className={cssStyles.HTRtextAt}>INT</th>
            <th className={cssStyles.HTRtextAt}>WIS</th>
            <th className={cssStyles.HTRtextAt}>CHA</th>
          </tr>
        </thead>
        <tbody className={cssStyles.characterTableRow}>{characterRows}</tbody>
      </Table>
    );
  };

  return (
    <React.Fragment>
      {renderBody()}
    </React.Fragment>
  );
};

CharacterTable.propTypes = {
  characters: PropTypes.array.isRequired,
  deleteCharacter: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(CharacterTable));
