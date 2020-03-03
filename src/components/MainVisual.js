import React from 'react';
import { Card, Input, Button } from 'antd';
import { Search } from 'react-feather';
import mainvisual from '../img/mainvisual.svg';

export default class MainVisual extends React.Component {
  render() {
    return (
      <div className="App-header">
      <div className="container">
      <Card className="top-form container-2">
        <h2>ツアーを検索</h2>
        <img src={mainvisual} className="mainvisual" alt="mainvisual" />
        <Input size="large" placeholder="  エリア・キーワードで探す" prefix={ <Search /> } />
        <Button type="primary" size="large" className="mt-05">
          日程を確定する
        </Button>
      </Card>
      </div>
      </div>
    );
  }
}
