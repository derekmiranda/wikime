import React, { Component } from 'react';
import SourceContainer from './SourceContainer';
// import ParentContainer from './ParentContainer';
import fetch from 'node-fetch';
import { DATA_URL } from './../shared/config';

class Topic extends Component {
  constructor(props) {
    super();
    this.state = {
      numSources: 1
    };
  }

  addSource() {
    this.setState({
      numSources: this.state.numSources + 1
    });
  }

  render() {
    const numSources = this.state.numSources;
    const sources = [];

    for (let i = 1; i <= numSources; i += 1) {
      sources.push(
        newSource(i)
      );
    }

    return (
      <div id='topic'>
        <h1>{this.props.name}</h1>
        {sources}
        <button onClick={this.addSource.bind(this)}>Add Source</button>
      </div>
    );
  }
};

export default Topic;

function newSource(num) {
  return <SourceContainer key={num} num={num} />;
}

function handleErr(err) {
  console.log(err);
}