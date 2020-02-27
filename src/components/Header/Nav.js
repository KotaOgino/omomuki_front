import React from 'react';
import logo from '../../img/logo.svg';
import { Layout, Menu } from 'antd';
import { Briefcase } from 'react-feather';
import { User } from 'react-feather';

const { Header } = Layout;

export default class Nav extends React.Component {
  render() {
    return (
      <Header>
      <div className="App-logo">
      <img src={logo} className="logo" alt="logo" />
      </div>
      <Menu
        mode="horizontal"
        style={{ lineHeight: '64px' }}
        className="menu-items"
      >
        <Menu.Item key="1" className="menu-item">
        <Briefcase size={20} />
        <br />
        カート
        </Menu.Item>
        <Menu.Item key="2" className="menu-item">
        <User size={20} />
        <br />
        マイページ
        </Menu.Item>
      </Menu>
      </Header>
    );
  }
}
