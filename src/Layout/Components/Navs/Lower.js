import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo_black.svg';
import logo_white from '../images/logo.svg';

import { Row, Col, Input } from 'antd';
import { ShoppingCartOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';

export default class LowerNav extends React.Component {
  render() {
    return (
      <header className={this.props.color}>
        <Row className="lower-pc-header" justify="space-between" align="middle">
          <Col>
            <div className="logo">
              <Link to="/">
                {(() => {
                  if (this.props.color === 'black') {
                    return <img src={logo_white} alt="logo" />;
                  } else {
                    return <img src={logo} alt="logo" />;
                  }
                })()}
              </Link>
            </div>
          </Col>
          <Col>
            <Row align="middle">
              <Col style={{ marginRight: '2rem' }}>
                <Input size="large" placeholder="エリア・キーワードで探す" prefix={<SearchOutlined />} />
              </Col>
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
