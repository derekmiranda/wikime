import React, { Component } from 'react';
import fetch from 'node-fetch';
import queryString from 'query-string';
import { DATA_URL } from '../shared/config';

class SourceContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      notes: props.notes,
      url: props.url,
      notesSaved: false,
    };
  }

  // if 5 seconds has passed since updating either notes or url,
  // autosave
  updateAutosave() {
    // prevent saving again after autosaving while before new input
    if (this.state.notesSaved) return;

    const timeSinceUpdate = Date.now() - this.lastNotesUpdate;
    if (timeSinceUpdate > 5000) {
      this.saveInput('notes');
    }
  }

  componentWillUnmount() {
    clearInterval(this.notesTimer);
  }

  handleTyping(input, event) {
    this.setState({
      [input]: event.target.value,
      notesSaved: false,
    });
    this.lastNotesUpdate = Date.now();

    // start interval for checking autoupdates
    if (!this.notesTimer) {
      this.notesTimer = setInterval(
        this.updateAutosave.bind(this),
        2000);
    }
  }

  handleKeyPress(input, event) {
    // only works for notes if Ctrl+Enter pressed
    if (input === 'notes' && !event.ctrlKey) return;

    if (event.key === 'Enter' && this.state[input]) {
      this.saveInput(input);
    }
  }

  saveInput(input) {
    if (this.state.notesSaved) return;

    const updatedSource = {
      name: this.state.name,
      url: this.state.url,
      notes: this.state.notes,
      topic: this.props.topic,
      _id: this.props.id,
    };
    const body = queryString.stringify(updatedSource);

    fetch(`${DATA_URL}/source`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded'
      },
      body
    })
      .then(res => res.json(), handleErr)
      .then(resObj => {
        console.log(input + ' saved!');
        this.setState({ notesSaved: true });
      }, handleErr);

  }

  render() {
    return (
      <div className='source'>
        <input
          className='sourceTitle'
          type='text'
          placeholder='Source Title'
          value={this.state.name}
          onChange={this.handleTyping.bind(this, 'name')}
          onKeyPress={this.handleKeyPress.bind(this, 'name')}
        />
        <h3 className='inputTitle'>Notes</h3>
        <textarea
          className='notesInput'
          type='text'
          placeholder='Type your notes here'
          value={this.state.notes}
          onChange={this.handleTyping.bind(this, 'notes')}
          onKeyPress={this.handleKeyPress.bind(this, 'notes')}
        />
        <p className='caption'>Ctrl+Enter to save notes</p>
        {this.state.notesSaved &&
          <p className="saveMsg">Notes saved!</p>
        }
        <h3 className='inputTitle'>Link</h3>
        <input
          className='urlInput'
          type='text'
          placeholder='Source link'
          value={this.state.url}
          onChange={this.handleTyping.bind(this, 'url')}
          onKeyPress={this.handleKeyPress.bind(this, 'url')}
        />
      </div>
    );
  }
};

export default SourceContainer;

function handleErr(err) {
  console.log(err);
}