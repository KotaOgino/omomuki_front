import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* ページ */
import Home from './Layout/Pages/Home'; // ホーム
import Mypage from './Layout/Pages/Mypage'; // マイページ
import TourDetail from './Layout/Pages/TourDetail'; // ツアー詳細

import './sass/app.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route exact path="/mypage" children={<Mypage />} />
        <Route exact path="/tour-detail" children={<TourDetail />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
