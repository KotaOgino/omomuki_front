import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import logo from '../../img/logo.svg';
import { Layout, Menu, Row, Col } from 'antd';
import { Briefcase } from 'react-feather';
import { User } from 'react-feather';

const { Header } = Layout;

export default class Nav extends React.Component {
  render() {
    return (
      <Header>
      <Row type="flex" justify="space-between">
      <Col>
      <div className="nav-logo container-side">
      <img src={logo} className="logo" alt="logo" />
      </div>
      </Col>
      <Col>
      <Menu
        mode="horizontal"
        className="menu-items container-side pt-1"
      >
        <Menu.Item key="1" className="menu-item">
        <Link to="/cart">
        <Briefcase size={20} />
        <br />
        カート
        </Link>
        </Menu.Item>
        <Menu.Item key="2" className="menu-item">
        <Link to='/mypage'>
        <User size={20} />
        <br />
        マイページ
        </Link>
        </Menu.Item>
      </Menu>
      </Col>
      </Row>
       </Header>
    );
  }
}
