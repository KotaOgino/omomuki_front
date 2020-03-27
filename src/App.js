import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import MyPage from './Components/MyPage';
import Cart from './Components/Cart';
import './sass/app.scss';

function App() {
  return (<BrowserRouter>
    <Switch>
      <Route exact path="/" children={<Home />}/>
      <Route path="/mypage" children={<MyPage />}/>
      <Route path="/cart" children={<Cart />}/>
    </Switch>
  </BrowserRouter>);
}

export default App;
