import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export default class Tours extends React.Component {
  render() {
    return (
      <div className="App-tours">
      <Content style={{ margin: '2rem 9.5rem'}}>
      this is tour
      </Content>
      </div>
    );
  }
}
