import React from 'react';

export default class Head2nd extends React.Component {
  render() {
    return (
      <h2 className={this.props.className}>{this.props.title}</h2>
    );
  }
}
