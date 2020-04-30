import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Menu, Dropdown, Button, Space } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import logo from './images/logo_black.svg';

const language_menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export default class Footers extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Divider />
        </div>
        <footer className="footer">
          <div className="container">
            {/* <Row className="sec">
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
            </Row> */}
            <div className="sec">
              <div className="foot-logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              {/* <div className="language-menu">
                <Space>
                  <Dropdown overlay={language_menu} placement="topCenter">
                    <Button><GlobalOutlined /> 日本語</Button>
                  </Dropdown>
                  <Dropdown overlay={language_menu} placement="topCenter">
                    <Button>日本円 JPY</Button>
                  </Dropdown>
                </Space>
              </div> */}
              <div className="other-links">
                <Space>
                  {/* <Link to="/term"><small>利用規約</small></Link> */}
                  <Link to="/specified-commercial-transaction-act"><small>特定商取引法に基づく表示</small></Link>
                  <Link to="/privacypolicy"><small>プライバシーポリシー</small></Link>
                </Space>
              </div>
            </div>
            <p className="copyright">
              <small>©2020 LAMP.Co.,Ltd</small>
            </p>
          </div>
        </footer>
      </>
    );
  }
}
