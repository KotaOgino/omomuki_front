import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../Components/Navs/Lower';
import Footer from '../Components/Footers';
import H2 from '../Components/Heading/Head2nd';
import H3 from '../Components/Heading/Head3rd';

import { Row, Col, Calendar, Select, Form, Divider, Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';

import moment from 'moment';
import 'moment/locale/ja';
moment.locale('ja');

class DateSelect extends React.Component {
  handleToForm = () => {
    this.props.history.push('/user-form')
  }
  render() {
    return (
      <>
        <Header />
        <main>
          <section className="sec">
            <div className="container" style={{ maxWidth: 768 }}>
              <H2 title={"京都の寺社仏閣穴場めぐりツアー"} />
              <Row gutter={[32, 32]} style={{ marginTop: '3rem' }}>
                <Col sm={24} md={12}>
                  <div className="date">
                    <H3 title={"日程"} />
                    <div className="site-calendar-demo-card">
                      <Calendar locale="ja" fullscreen={false} />
                    </div>
                  </div>
                  <div className="number-persons" style={{ marginTop: '3rem' }}>
                    <H3 title={"人数"} />
                    <Form.Item>
                      <Select defaultValue="1人" style={{ width: 120 }}>
                        <Select.Option value="1人">1人</Select.Option>
                        <Select.Option value="2人">2人</Select.Option>
                        <Select.Option value="3人">3人</Select.Option>
                        <Select.Option value="4人">4人</Select.Option>
                        <Select.Option value="5人">5人</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <div className="price">
                    <H3 title={"料金"} />
                    <p style={{ textAlign: 'right', margin: 0 }}>
                      <b style={{ fontSize: '120%' }}>¥8,000</b>
                      <br />×1人
                    </p>
                    <Divider />
                    <p style={{ textAlign: 'right', margin: 0 }}>合計 <b style={{ fontSize: '120%' }}>¥8,000</b></p>
                  </div>
                  <div style={{ textAlign: "center", marginTop: '2rem' }}>
                    <Button onClick={this.handleToForm} type="primary" size="large" block><FormOutlined />予約に進む</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
export default withRouter(DateSelect);