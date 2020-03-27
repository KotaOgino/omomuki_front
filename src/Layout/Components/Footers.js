import React from 'react';
import { Layout, Menu, Dropdown, Row, Col, Button } from 'antd';
import logo from '../../img/logo_black.svg';

const { Footer } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      English
    </Menu.Item>
    <Menu.Item>
      中文
    </Menu.Item>
    <Menu.Item>
      한국어
    </Menu.Item>
  </Menu>
);

export default class Footers extends React.Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        <img src={logo} className="footer-logo mb-1" alt="logo" />
        <Row type="flex" justify="center">
          <Col span={2}>
            <Dropdown overlay={menu} placement="topCenter">
              <Button>日本語(JP)</Button>
            </Dropdown>
          </Col>
          <Col span={2}>
            <Button>日本円 JPY</Button>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Menu mode="horizontal" className="footer-menu">
            <Menu.Item>利用規約</Menu.Item>
            <Menu.Item>特定商取引法に基づく表示</Menu.Item>
            <Menu.Item>プライバシーポリシー</Menu.Item>
          </Menu>
        </Row>
        <p className="company">
          ©2020 Lamp.Co.,Ltd
      </p>
      </Footer>
    );
  }
}
