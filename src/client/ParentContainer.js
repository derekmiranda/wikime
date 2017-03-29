import React, { Component } from 'react';

class ParentContainer extends Component {
  render() {
    return (
      <div id='parentContainer'>
        <h1>Parent Topics</h1>
        <ol>
          <li>Operating Systems</li>
          <li>Mac OSX</li>
        </ol>
      </div>
    );
  }
}

export default ParentContainer;