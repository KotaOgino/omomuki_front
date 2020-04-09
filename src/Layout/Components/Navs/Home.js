import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';
import logo_black from '../images/logo_black.svg';

import { Row, Col } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

export default class NavHome extends React.Component {
  render() {
    return (
      <header>
        <div className="home-sp-header">
          <Link to="/">
            <img src={logo_black} alt="logo" />
          </Link>
        </div>
        <Row className="home-pc-header" justify="space-between" align="middle">
          <Col>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </Col>
          <Col>
            <Row align="middle">
              <Col style={{ marginRight: '2rem' }}>
                <Link to="/cart" className="nav-link">
                  <ShoppingCartOutlined style={{ fontSize: '1.5rem' }} />
                  <span>カート</span>
                </Link>
              </Col>
              <Col>
                <Link to='/mypage' className="nav-link">
                  <UserOutlined style={{ fontSize: '1.5rem' }} />
                  <span>マイページ</span>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </header>
    );
  }
}
