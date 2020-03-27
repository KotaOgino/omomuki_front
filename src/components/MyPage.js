import React from 'react';
import {Link} from 'react-router-dom';
import Footers from './Footers';

export default class MyPage extends React.Component {
  render() {
    return (<div>
      <h1>This is MyPage</h1>
      <Link to="/">
        To Home
      </Link>
      <Footers/>
    </div>);
  }
}
