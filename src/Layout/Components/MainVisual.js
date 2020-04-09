import React from 'react';
import { Card, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
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
            <Input size="large" placeholder="エリア・キーワードで探す" prefix={<SearchOutlined />} />
            <Button type="primary" size="large">ツアーを検索する</Button>
          </Card>
        </div>
      </section>
    );
  }
}
