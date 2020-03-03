import React from 'react';
import { Card, Row, Col } from 'antd';

import category1 from '../../img/categories_1.svg';

const { Meta } = Card;

export default class Categories extends React.Component {
  render() {
    return (
      <div className="App-tours">
      <div className="container">
      <h2>カテゴリー</h2>
      <Row type="flex" justify="start">
      <Col span={4} className="posi-r">
      <Card
        hoverable
        style={{ width: 159.7, height: 159.7 }}
        cover={<img alt="example" src={category1} />}
        className="mb-2"
      >
      <Meta title="文化体験" className="category-name"/>
      </Card>
      </Col>
      <Col span={4}>
      <Card
        hoverable
        style={{ width: 159.7, height: 159.7 }}
        cover={<img alt="example" src={category1} />}
        className="mb-2"
      >
      <Meta title="文化体験" className="category-name"/>
      </Card>
      </Col>
      <Col span={4}>
      <Card
        hoverable
        style={{ width: 159.7, height: 159.7 }}
        cover={<img alt="example" src={category1} />}
        className="mb-2"
      >
      <Meta title="文化体験" className="category-name"/>
      </Card>
      </Col>
      <Col span={4}>
      <Card
        hoverable
        style={{ width: 159.7, height: 159.7 }}
        cover={<img alt="example" src={category1} />}
        className="mb-2"
      >
      <Meta title="文化体験" className="category-name"/>
      </Card>
      </Col>
      <Col span={4}>
      <Card
        hoverable
        style={{ width: 159.7, height: 159.7 }}
        cover={<img alt="example" src={category1} />}
        className="mb-2"
      >
      <Meta title="文化体験" className="category-name"/>
      </Card>
      </Col>
      <Col span={4}>
      <Card
        hoverable
        style={{ width: 159.7, height: 159.7 }}
        cover={<img alt="example" src={category1} />}
        className="mb-2"
      >
      <Meta title="文化体験" className="category-name"/>
      </Card>
      </Col>
      <Col span={4}>
      <Card
        hoverable
        style={{ width: 159.7, height: 159.7 }}
        cover={<img alt="example" src={category1} />}
        className="mb-2"
      >
      <Meta title="文化体験" className="category-name"/>
      </Card>
      </Col>
      <Col span={4}>
      <Card
        hoverable
        style={{ width: 159.7, height: 159.7 }}
        cover={<img alt="example" src={category1} />}
        className="mb-2"
      >
      <Meta title="文化体験" className="category-name"/>
      </Card>
      </Col>
      </Row>
      </div>
      </div>
    );
  }
}
