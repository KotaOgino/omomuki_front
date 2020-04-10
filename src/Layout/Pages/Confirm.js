import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../Components/Navs/Lower';
import Footer from '../Components/Footers';
import H2 from '../Components/Heading/Head2nd';
import H3 from '../Components/Heading/Head3rd';

import { Row, Col, Card, Steps, Button, Divider, PageHeader } from 'antd';
import { CalendarOutlined, UserOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Step } = Steps;
const { Meta } = Card;

class ConfirmForm extends React.Component {
  handleToSend = () => {
    this.props.history.push('/send-form')
  }
  render() {
    return (
      <>
        <Header />
        <PageHeader
          className="site-page-header"
          ghost={false}
          title="戻る"
          onBack={() => window.history.back()}
        />
        <main>
          <section className="sec">
            <div className="container" style={{ maxWidth: 768 }}>
              <Steps size="small" current={2} style={{ marginBottom: '3rem' }}>
                <Step title="お客様情報" />
                <Step title="支払情報" />
                <Step title="ご確認" />
                <Step title="完了" />
              </Steps>
              <H2 title={"確認とお支払い"} />
              <p>ご予約はまだ完了していません。内容をご確認の上、ご予約を確定してください。</p>
              <Divider />
              <div className="confirm-tour">
                <H3 title="ツアー情報" />
                <Card>
                  <Meta
                    avatar={
                      <img src="./images/confirm_smaple.png" alt="" />
                    }
                    title="京都の寺社仏閣穴場めぐりツアー"
                    description={
                      <p style={{ margin: 0 }}>
                        <CalendarOutlined /> 2020-04-20
                        <br /><UserOutlined /> 1人
                      </p>
                    }
                  />
                </Card>
                <Row style={{ marginTop: '1rem' }}>
                  <Col span={12}>ツアー料金</Col>
                  <Col span={12} style={{ textAlign: "right" }}>¥8,000</Col>
                </Row>
                <Row>
                  <Col span={12}>合計(税込み)</Col>
                  <Col span={12} style={{ textAlign: "right" }}><b style={{ fontSize: "120%" }}>¥8,000</b></Col>
                </Row>
              </div>
              <Divider />
              {/* <div className="confirm-payment">
                <H3 title="お支払い情報" />
              </div> */}
              <div className="confirm-user">
                <H3 title="お客様情報" />
                <h4>お名前</h4>
                <p style={{ margin: 0 }}>オモムキ タロウ</p>
                <Divider style={{ margin: '1rem 0' }} />
                <h4>メールアドレス</h4>
                <p style={{ margin: 0 }}>info@example.com</p>
                <Divider style={{ margin: '1rem 0' }} />
                <h4>電話番号</h4>
                <p style={{ margin: 0 }}>0800000000</p>
                <Divider style={{ margin: '1rem 0' }} />
                <h4>性別</h4>
                <p style={{ margin: 0 }}>男性</p>
              </div>
              <div style={{ textAlign: "center", marginTop: '2rem' }}>
                <Button onClick={this.handleToSend} type="primary" size="large"><CheckCircleOutlined />予約を確定する</Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
export default withRouter(ConfirmForm);