import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../Components/Navs/Lower';
import Footer from '../Components/Footers';

import { Result, Button } from 'antd';

class SendForm extends React.Component {
  handleToHome = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <>
        <Header />
        <main>
          <Result
            status="success"
            title="ご予約が完了しました"
            subTitle="ご入力いただいたメールアドレスにメールを送信いたしましたので内容をご確認ください。"
            extra={
              <Button onClick={this.handleToHome} type="primary">TOPへ戻る</Button>
            }
          />
        </main>
        <Footer />
      </>
    );
  }
}
export default withRouter(SendForm);