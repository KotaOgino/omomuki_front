import React from 'react';
import { Layout, Menu } from 'antd';

const { Footer } = Layout;

export default class Footers extends React.Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
      <p className="company">
      ©2020 Lamp.Co.,Ltd
      </p>
      </Footer>
    );
  }
}
