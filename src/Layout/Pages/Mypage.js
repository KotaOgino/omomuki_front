import React from 'react';
import Header from '../Components/Navs/Lower';
import Footer from '../Components/Footers';
import Section from '../Components/Sections/Section';

import { Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default class Mypage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Section>
            <div className="container">
              <Row>
                <Col md={12}>
                  <div className="user-name">
                    <UserOutlined />
                    <p>User Name</p>
                  </div>
                </Col>
                <Col md={12}>
                </Col>
              </Row>
            </div>
          </Section>
        </main>
        <Footer />
      </>
    );
  }
}
