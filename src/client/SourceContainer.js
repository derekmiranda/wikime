import React, { Component } from 'react';

class SourceContainer extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div className='source'>
        <h2>{this.props.name}</h2>
        <h3>Notes</h3>
        <input
          type='text'
          placeholder='Type your notes here'
          value={this.props.notes}
        />
        <h3>Link</h3>
        <input
          type='text'
          placeholder='Source link'
          value={this.props.url}
        />
      </div>
    );
  }
};

export default SourceContainer;