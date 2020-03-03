import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import MyPage from './components/MyPage';
import Cart from './components/Cart';
import './App.scss';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact children={<Home />} />
        <Route path="/mypage" children={<MyPage />} />
        <Route path="/cart" children={<Cart />} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
