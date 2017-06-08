import React, { Component } from 'react';
import SourceContainer from './SourceContainer';
import { DATA_URL } from './../shared/config';

class Topic extends Component {
  constructor(props) {
    super();
    this.state = { sources: [] };
    this.topicId = props.id;
  }

  componentDidMount() {
    // fetch sources from data server
    fetch(`${DATA_URL}/source?topic=${this.topicId}`)
      .then(res => res.json(), handleErr)
      .then(sources => {

        if (!sources) throw 'Unable to fetch sources';

        const copiedSources = sources.map(source => {
          return {
            name: source.name,
            notes: source.notes,
            url: source.url,
            _id: source._id
          }
        });

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

  newSource(source, num) {
    return (
      <SourceContainer
        key={num}
        name={source.name}
        notes={source.notes}
        url={source.url}
        topic={this.topicId}
        id={source._id}
      />
    );
  }

  render() {
    return (
      <div id='topic'>
        <h1 className='topicTitle'>{this.props.name}</h1>
        <hr className='topicSeparator' />
        {
          this.state.sources.map(
            (source, i) => this.newSource(source, i)
          )
        }
        <button className='addSource' onClick={this.addSource.bind(this)}>Add Source</button>
      </div>
    );
  }
};

export default Topic;

function handleErr(err) {
  console.log(err);
}