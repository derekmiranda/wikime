import React, { Component } from 'react';
import SourceContainer from './SourceContainer';
import ParentContainer from './ParentContainer';

function newSource(num) {
  return <SourceContainer key={num} num={num} />;
} 

class NotesContainer extends Component {
  constructor() {
    super();
    this.state = {
      numSources: 3
    };
  }

  addSource() {
    this.setState({
      numSources: this.state.numSources + 1
    });
  }

  render() {
    // const numSources = this.state.numSources;
    // const sources = [];
    
    // for (let i = 1; i <= numSources; i += 1) {
    //   sources.push(
    //     newSource(i)
    //   );
    // }

    return (
      <div id='notesContainer'>
        <ParentContainer />
        <h1>New Topic</h1>
        {newSource(1)}
        <button onClick={this.addSource.bind(this)}>Add Source</button>
      </div>
    );
  }
};

export default NotesContainer;