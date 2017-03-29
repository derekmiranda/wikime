import React, { Component } from 'react';
import SourceContainer from './SourceContainer';
import ParentContainer from './ParentContainer';
import fetch from 'node-fetch';
import { DATA_URL } from './../shared/config';

function newSource(num) {
  return <SourceContainer key={num} num={num} />;
}

function handleErr(err) {
  console.log(err);
}

class NotesContainer extends Component {
  constructor() {
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

  componentDidMount() {
    fetch(`${DATA_URL}/topic`)
      .then(res => res.json(), handleErr)
      .then(body => {
        if (!body) throw 'Unable to fetch topic';
        this.setState({
          topicName: body.name,
          topicId: body._id,
        });
      })
      .catch(handleErr);
  }

  render() {
    const numSources = this.state.numSources;
    const sources = [];

    for (let i = 1; i <= numSources; i += 1) {
      sources.push(
        newSource(i)
      );
    }

    return ( this.state.topicName ?

      <div id='notesContainer'>
        <ParentContainer />
        <h1>{this.state.topicName}</h1>
        {sources}
        <button onClick={this.addSource.bind(this)}>Add Source</button>
      </div>

      :

      <div id='topicLoading'>
        <p>Topic currently loading...</p>
      </div>
    );
  }
};

export default NotesContainer;