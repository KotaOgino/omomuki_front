import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../Components/Navs/Lower';
import Footer from '../Components/Footers';
import H2 from '../Components/Heading/Head2nd';

import { Form, Input, Steps, Button, PageHeader } from 'antd';

const { Step } = Steps;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

class PaymentForm extends React.Component {
  handleToConfirm = () => {
    this.props.history.push('/confirm-form')
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
              <Steps size="small" current={1} style={{ marginBottom: '3rem' }}>
                <Step title="お客様情報" />
                <Step title="支払情報" />
                <Step title="ご確認" />
                <Step title="完了" />
              </Steps>
              <H2 title={"支払情報"} />
              <p>お支払いにはクレジットカードをご利用いただけます。</p>
              <p>
                <img src="./images/cards_icon.png" alt="" />
              </p>
              <Form {...layout} name="nest-messages" style={{ marginTop: '3rem' }}>
                <Form.Item name={['user', 'num']} label="カード番号">
                  <Input style={{ width: 200 }} />
                </Form.Item>
                <Form.Item name={['user', 'name']} label="カード名義">
                  <Input style={{ width: 200 }} />
                </Form.Item>
                <Form.Item label="有効期限/CVV">
                  <Form.Item
                    name="year"
                    style={{ display: 'inline-block', width: 90 }}
                  >
                    <Input placeholder="MM/YY" />
                  </Form.Item>
                  <Form.Item
                    name="month"
                    style={{ display: 'inline-block', width: 90, margin: '0 8px' }}
                  >
                    <Input />
                  </Form.Item>
                </Form.Item>
                <div style={{ textAlign: "center", marginTop: '2rem' }}>
                  <Button onClick={this.handleToConfirm} type="primary">次に進む</Button>
                </div>
              </Form>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
export default withRouter(PaymentForm);