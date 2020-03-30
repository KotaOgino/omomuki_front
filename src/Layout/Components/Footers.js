import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
// import logo from './images/logo_black.svg';

export default class Footers extends React.Component {
  render() {
    return (
      <footer className="footer sec">
        <div className="container">
          <Row>
            <Col md={8}>
              <h3>見出し</h3>
              <ul>
                <li>
                  <Link to="#">リンク</Link>
                </li>
                <li>
                  <Link to="#">リンク</Link>
                </li>
                <li>
                  <Link to="#">リンク</Link>
                </li>
                <li>
                  <Link to="#">リンク</Link>
                </li>
              </ul>
            </Col>
            <Col md={8}>
              <h3>見出し</h3>
              <ul>
                <li>
                  <Link to="#">リンク</Link>
                </li>
                <li>
                  <Link to="#">リンク</Link>
                </li>
                <li>
                  <Link to="#">リンク</Link>
                </li>
                <li>
                  <Link to="#">リンク</Link>
                </li>
              </ul>
            </Col>
            <Col md={8}>
              <h3>見出し</h3>
              <ul>
                <li>
                  <Link to="#">リンク</Link>
                </li>
                <li>
                  <Link to="#">リンク</Link>
                </li>
                <li>
                  <Link to="#">リンク</Link>
                </li>
                <li>
                  <Link to="#">リンク</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </footer>
    );
  }
}
