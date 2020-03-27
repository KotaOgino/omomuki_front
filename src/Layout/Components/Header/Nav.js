import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';

import { Row, Col } from 'antd';
import { Briefcase, User } from 'react-feather';

export default class Nav extends React.Component {
  render() {
    return (
      <header className="pc-header">
        <Row justify="space-between">
          <Col>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <Link to="/cart">
                  <Briefcase size={20} />
                  <span>カート</span>
                </Link>
              </Col>
              <Col>
                <Link to='/mypage'>
                  <User size={20} />
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
