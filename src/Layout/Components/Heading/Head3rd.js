import React from 'react';

export default class Head3rd extends React.Component {
  render() {
    return (
      <h3 className={this.props.className}>{this.props.title}</h3>
    );
  }
}
