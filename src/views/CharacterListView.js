import React from "react";
import { connect } from "react-redux";
import {getPeople} from '../actions/index';
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  state = {
    characters: [],
    inProgress: false,
    error: ''
  }

  componentDidMount() {
    // call our action
    this.props.getPeople()
  }

  render() {
    if (this.props.inProgress) {
      // return something here to indicate that you are fetching data
      <h3>Loading People...</h3>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state =>({
  characters: state.charsReducer.characters,
  inProgress: state.charsReducer.inProgress,
  error: state.charsReducer.error
});

export default connect(
  mapStateToProps,
  {getPeople}
)(CharacterListView);
