import React from 'react';
import Recomendation from './Contents/Recomendation';
import Tours from './Contents/Tours';
import Categories from './Contents/Categories';

export default class Contents extends React.Component {
  render() {
    return (
      <div className="App-contents">
      <Recomendation />
      <Tours />
      <Categories />
      </div>
    );
  }
}
