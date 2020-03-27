import React from 'react';
import { Card, Input, Button } from 'antd';
import { Search } from 'react-feather';
import mainvisual from './images/mainvisual.svg';
import bg_mv from './images/bg_mv.png';

const styles = {
  backgroundImage: `url(${bg_mv})`
};

export default class MainVisual extends React.Component {
  render() {
    return (
      <section className="mv" style={styles}>
        <div className="container">
          <Card>
            <h2>ツアーを検索</h2>
            <img src={mainvisual} alt="mainvisual" />
            <Input placeholder="エリア・キーワードで探す" prefix={<Search />} />
            <Button type="primary" size="large" className="mt-05">日程を確定する</Button>
          </Card>
        </div>
      </section>
    );
  }
}
