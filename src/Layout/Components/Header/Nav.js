import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';

import { Row, Col } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

export default class Nav extends React.Component {
  render() {
    return (
      <header className="pc-header">
        <Row justify="space-between" align="middle">
          <Col>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </Col>
          <Col>
            <Row align="middle">
              <Col style={{ marginRight: '1rem' }}>
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
