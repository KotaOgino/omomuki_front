import React from 'react';
import Headers from './Header';
import MainVisual from './MainVisual';
import Contents from './Contents';
import Footers from './Footers';

export default class Home extends React.Component {
  render(){
    return (
      <div>
      <Headers />
      <MainVisual />
      <Contents />
      <Footers />
      </div>
    );
  }
}
