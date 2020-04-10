import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../Components/Navs/Lower';
import Footer from '../Components/Footers';
import H2 from '../Components/Heading/Head2nd';

import { Form, Input, Steps, Button, Radio, PageHeader } from 'antd';

const { Step } = Steps;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

class UserForm extends React.Component {
  handleToPay = () => {
    this.props.history.push('/payment-form')
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
              <Steps size="small" current={0} style={{ marginBottom: '3rem' }}>
                <Step title="お客様情報" />
                <Step title="支払情報" />
                <Step title="ご確認" />
                <Step title="完了" />
              </Steps>
              <H2 title={"お客様情報"} />
              <Form {...layout} name="nest-messages">
                <Form.Item name={['user', 'name']} label="お名前" rules={[
                  {
                    required: true,
                  },
                ]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="メールアドレス" rules={[
                  {
                    required: true,
                    type: 'email',
                  },
                ]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'name']} label="電話番号" rules={[
                  {
                    required: true,
                    type: 'tel',
                  },
                ]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'sex']} label="性別">
                  <Radio.Group>
                    <Radio value={1}>女性</Radio>
                    <Radio value={2}>男性</Radio>
                  </Radio.Group>
                </Form.Item>
                <div style={{ textAlign: "center", marginTop: '2rem' }}>
                  <Button onClick={this.handleToPay} type="primary">次に進む</Button>
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
export default withRouter(UserForm);