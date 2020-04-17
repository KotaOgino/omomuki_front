import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './Layout/Components/ScrollToTop';

/* ページ */
import Home from './Layout/Pages/Home'; // ホーム
import Mypage from './Layout/Pages/Mypage'; // マイページ
import TourDetail from './Layout/Pages/TourDetail'; // ツアー詳細
import DateSelect from './Layout/Pages/DateSelect'; // 日時指定
import UserForm from './Layout/Pages/UserForm'; // 会員フォーム
import PaymentForm from './Layout/Pages/PaymentForm'; // 支払い方法
import ConfirmForm from './Layout/Pages/Confirm'; // 確認
import SendForm from './Layout/Pages/SendForm'; // 送信
import Scta from './Layout/Pages/Scta'; // 特定商取引法表示

import './sass/app.scss';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/mypage" children={<Mypage />} />
        <Route path="/tour-detail" children={<TourDetail />} />
        <Route path="/date-select" children={<DateSelect />} />
        <Route path="/user-form" children={<UserForm />} />
        <Route path="/payment-form" children={<PaymentForm />} />
        <Route path="/confirm-form" children={<ConfirmForm />} />
        <Route path="/send-form" children={<SendForm />} />
        <Route path="/specified-commercial-transaction-act" children={<Scta />} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
