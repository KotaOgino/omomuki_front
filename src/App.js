import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Layout/Pages/Home';

import './sass/app.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" children={<Home />} />
      </Switch>ı
    </BrowserRouter>
  );
}

export default App;
