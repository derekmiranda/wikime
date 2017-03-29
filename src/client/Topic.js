import React, { Component } from 'react';
import SourceContainer from './SourceContainer';
// import ParentContainer from './ParentContainer';
import fetch from 'node-fetch';
import { DATA_URL } from './../shared/config';

class Topic extends Component {
  constructor(props) {
    super();
    this.state = { sources: [] };
    this.topicId = props.id;
  }

  componentDidMount() {
    // fetch sources from data server
    fetch(`${DATA_URL}/source?topic=${this.topicId}`, { 'mode': 'no-cors' })
      .then(res => res.json(), handleErr)
      .then(sources => {

        if (!sources) throw 'Unable to fetch sources';

        const copiedSources = sources.map(source => {
          return {
            name: source.name,
            _id: source._id
          }
        });

        console.log(copiedSources);

        this.setState({ sources: copiedSources });
      })
      .catch(handleErr);
  }

  addSource() {
    // this.setState({
    //   numSources: this.state.numSources + 1
    // });
    console.log('Sup homieeeeeeeees!');
  }

  render() {
    return (
      <div id='topic'>
        <h1>{this.props.name}</h1>
        {
            this.state.sources.map(
              (source, i) => newSource(source, i)
            )
        }
        <button onClick={this.addSource.bind(this)}>Add Source</button>
      </div>
    );
  }
};

export default Topic;

function newSource(source, num) {
  return (
    <SourceContainer
      key={num}
      name={source.name}
      id={source._id}
    />
  );
}

function handleErr(err) {
  console.log(err);
}