import React, { Component } from 'react';
import fetch from 'node-fetch';

class SourceContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      notes: props.notes,
      url: props.url,
      saved: false,
    };
  }

  // if 5 seconds has passed since updating either notes or url,
  // autosave
  updateAutosave() {
    // prevent saving again after autosaving while before new input
    if (this.state.saved) return;

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
      saved: false,
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
    if (event.ctrlKey && event.key === 'Enter' && this.state[input]) {
      this.saveInput(input);
    }
  }

  saveInput(input) {
    if (this.state.saved) return;

    this.setState({ saved: true });
    console.log(this.state[input]);
  }

  render() {
    return (
      <div className='source'>
        <h2>{this.state.name}</h2>
        <h3>Notes</h3>
        <textarea
          className='notesInput'
          type='text'
          placeholder='Type your notes here'
          value={this.state.notes}
          onChange={this.handleTyping.bind(this, 'notes')}
          onKeyPress={this.handleKeyPress.bind(this, 'notes')}
        />
        <p className='caption'>Ctrl+Enter to save notes</p>
        {this.state.saved &&
          <p className="saveMsg">Notes saved!</p>
        }
        <h3>Link</h3>
        <input
          className='urlInput'
          type='text'
          placeholder='Source link'
          value={this.state.url}
          onChange={this.handleTyping.bind(this, 'url')}
        />
      </div>
    );
  }
};

export default SourceContainer;