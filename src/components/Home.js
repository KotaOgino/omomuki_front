import React from 'react';
import Headers from './Header';
import MainVisual from './MainVisual';
import Tours from './Contents/Tours';
import Categories from './Contents/Categories';
import Footers from './Footers';

export default class Home extends React.Component {
  render() {
    return (<>
      <Headers/>
      <MainVisual/>
      <Categories/>
      <Tours/>
      <Footers/>
    </>);
  }
}
