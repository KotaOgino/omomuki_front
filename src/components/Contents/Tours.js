import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export default class Tours extends React.Component {
  render() {
    return (
      <div className="App-tours">
      <Content className="container">
      <h2>おすすめのツアー</h2>
      </Content>
      </div>
    );
  }
}
