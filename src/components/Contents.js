import React from 'react';
import Recomendation from './Contents/Recomendation';
import Tours from './Contents/Tours';
import Categories from './Contents/Categories';

import { Layout } from 'antd';

const { Content } = Layout;

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="App-contents">
      <Recomendation />
      <Categories />
      <Tours />
      </Content>
    );
  }
}
