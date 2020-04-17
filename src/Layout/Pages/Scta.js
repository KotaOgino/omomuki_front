import React from 'react';

import Header from '../Components/Navs/Lower';
import Footer from '../Components/Footers';
import H2 from '../Components/Heading/Head2nd';

import { Table } from 'antd';

const columns = [
  {
    title: '項目名',
    dataIndex: 'name',
    key: 'name',
    className: 'th',
  },
  {
    title: '内容',
    dataIndex: 'content',
    key: 'content',
  },
];

const data = [
  {
    key: '1',
    name: '販売業者',
    content: '株式会社ランプ',
  },
  {
    key: '2',
    name: '販売責任者',
    content: '代表取締役 河野 匠',
  },
  {
    key: '3',
    name: '所在地',
    content: '〒604-8136 京都府京都市中京区梅忠町２４−１ 加藤ビル 2F',
  },
  {
    key: '4',
    name: '支払方法',
    content: 'クレジットカード決済',
  },
  {
    key: '6',
    name: '商品引渡時期',
    content: (
      <>
        決済完了後、24時間以内に申込受付完了のメールを送信いたします。
        <br />
        参加権利の移転は申込受付完了メールをお受け取りされた時点となります。
        <br />
        申込受付完了メールが届かない場合は、お手数ですがメールにてお問い合わせください。
        <br />
        お問い合わせ先：info@omomuki.me
      </>
    ),
  },
  {
    key: '7',
    name: '商品以外の必要料金',
    content: '消費税（消費税が課税される場合）',
  },
  {
    key: '8',
    name: 'キャンセルについて',
    content:
      '所定の取消料をお支払いただくことにより、いつでも契約の解除をすることができます。この場合、収受している旅行代金から所定の取消料を差し引き、払い戻しをいたします。もしくは入金済み金額にて取消料がまかなえないときは、その金額を申し受けます。なお、取消日とは、お客様が当社の営業日、営業時間に解約する旨をお申し出いただいた日とします。',
  },
];

export default class Scta extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section className="sec">
            <div className="container">
              <H2 title="特定商取引法に基づく表記" />
              <Table columns={columns} dataSource={data} showHeader={false} pagination={false} />
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
