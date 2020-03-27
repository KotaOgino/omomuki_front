import React from 'react';

export default class Section extends React.Component {
  render() {
    return (
      <section className="sec">
        <div className="container">
          {this.props.children}
        </div>
      </section>
    );
  }
}
