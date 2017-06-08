import React, { Component } from 'react';
import { DATA_URL } from './../shared/config';
import Topic from './Topic';

class App extends Component {

  constructor() {
    super();
    this.state = {
      topics: []
    };
  }

  componentDidMount() {
    // fetch topics from data server
    fetch(`${DATA_URL}/topic`, {'mode': 'no-cors'})
      .then(res => res.json(), handleErr)
      .then(topics => {
        if (!topics) throw 'Unable to fetch topics';

        const copiedTopics = topics.map(topic => {
          return {
            name: topic.name,
            _id: topic._id
          }
        });
        
        this.setState({ topics: copiedTopics });
      })
      .catch(handleErr);
  }

  render() {
    const topicComps = this.state.topics.map(
      (topic, i) => <Topic key={i} name={topic.name} id={topic._id} />
    );
    return (
      <div id='App'>
        {
          topicComps.length ?
            topicComps :
            <p>Topics currently loading...</p>
        }
      </div>
    );
  }
}

export default App;

function handleErr(err) {
  console.log(err);
}