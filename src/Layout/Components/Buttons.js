import React from 'react';
import { Button } from 'antd';

export default class BtnCommon extends React.Component {
  render() {
    return (
      <Button type={this.props.type} size={this.props.size}>
        {this.props.children}
        {this.props.label}
      </Button>
    );
  }
}
