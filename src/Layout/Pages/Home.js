import React from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

import NavHome from '../Components/Navs/Home';
import Footer from '../Components/Footers';
import Header from '../Components/Navs/Lower';
import MainVisual from '../Components/MainVisual';
import Section from '../Components/Sections/Section';
import Heading2nd from '../Components/Heading/Head2nd';
import Btn from '../Components/Buttons';

import { Card, Col, Row } from 'antd';
import { ClockCircleOutlined, UserOutlined } from '@ant-design/icons';

const title = 'Omomuki - ここにしかない地方ツアー専門の予約サイト';
const description = '旅プロがつくる日本旅へ出かけよう。';
// title
document.title = title;
// title以外のmeta
const headData = document.head.children;
for (let i = 0; i < headData.length; i++) {
  const nameVal = headData[i].getAttribute('name');
  if (nameVal !== null) {
    if (nameVal.indexOf('description') != -1) {
      headData[i].setAttribute('content', description);
    }
    if (nameVal.indexOf('robots') != -1) {
      headData[i].setAttribute('content', 'index');
    }
  }
}

class Home extends React.Component {
  constructor() {
    super();
    this.state = { tours: [], id: '' };
  }
  componentDidMount() {
    const url = '/tours.json';
    axios.get(url).then((res) => {
      const data = res.data;
      this.setState({
        tours: data,
      });
    });
  }
  handleToDetail = (e) => {
    this.props.history.push({
      pathname: '/tour-detail',
      state: { id: e.currentTarget.getAttribute('data-id') },
    });
  };
  render() {
    return (
      <>
        <Header />
        <main>
          <Section>
            <Heading2nd title={'おすすめのツアー'} />
            <Row gutter={[32, 32]} className="tours-list">
              {this.state.tours.map((data) => {
                return (
                  <Col key={data.tourId} md={8}>
                    <Card
                      data-id={data.tourId}
                      hoverable
                      cover={<img src={data.thumbnail} alt="example" />}
                      onClick={this.handleToDetail}
                    >
                      <span className="tours-area">{data.area}</span>
                      <h3>{data.title}</h3>
                      <p>
                        <span className="tours-time">
                          <ClockCircleOutlined /> {data.time}
                        </span>
                        <span className="tours-count">
                          <UserOutlined /> {data.count}
                        </span>
                        <span className="tours-price">{data.price}</span>
                      </p>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            {/* <div style={{ textAlign: 'center' }}>
              <Btn label={'もっと見る'} type={'default'} size={'large'} />
            </div> */}
          </Section>
          <Section>
            <Heading2nd title={'エリア'} />
            <Row gutter={[32, 32]} className="category-list">
              <Col xs={12} sm={12} md={4}>
                <div className="category">
                  <img src="/images/interest_img01.jpg" alt="example" />
                  <h3>京都</h3>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div className="category">
                  <img src="/images/interest_img02.jpg" alt="example" />
                  <h3>滋賀</h3>
                </div>
              </Col>
            </Row>
            {/* <div style={{ textAlign: 'center' }}>
              <Btn label={'もっと見る'} type={'default'} size={'large'} />
            </div> */}
          </Section>
          {/* <Section>
            <Heading2nd title={'おすすめのツアー'} />
            <Row gutter={[32, 32]} className="recommend-tours">
              <Col xs={12} sm={12} md={4} onClick={this.handleToDetail}>
                <div className="thumbnail">
                  <img src="/images/recommend_sample.png" alt="example" />
                </div>
                <span className="tours-area">京都</span>
                <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                <p>
                  <span className="tours-time">
                    <ClockCircleOutlined /> 12時間
                  </span>
                  <span className="tours-count">
                    <UserOutlined /> 1名〜
                  </span>
                </p>
                <p className="tours-price">¥8,000/1名</p>
              </Col>
              <Col xs={12} sm={12} md={4} onClick={this.handleToDetail}>
                <div className="thumbnail">
                  <img src="/images/recommend_sample.png" alt="example" />
                </div>
                <span className="tours-area">京都</span>
                <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                <p>
                  <span className="tours-time">
                    <ClockCircleOutlined /> 12時間
                  </span>
                  <span className="tours-count">
                    <UserOutlined /> 1名〜
                  </span>
                </p>
                <p className="tours-price">¥8,000/1名</p>
              </Col>
              <Col xs={12} sm={12} md={4} onClick={this.handleToDetail}>
                <div className="thumbnail">
                  <img src="/images/recommend_sample.png" alt="example" />
                </div>
                <span className="tours-area">京都</span>
                <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                <p>
                  <span className="tours-time">
                    <ClockCircleOutlined /> 12時間
                  </span>
                  <span className="tours-count">
                    <UserOutlined /> 1名〜
                  </span>
                </p>
                <p className="tours-price">¥8,000/1名</p>
              </Col>
              <Col xs={12} sm={12} md={4} onClick={this.handleToDetail}>
                <div className="thumbnail">
                  <img src="/images/recommend_sample.png" alt="example" />
                </div>
                <span className="tours-area">京都</span>
                <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                <p>
                  <span className="tours-time">
                    <ClockCircleOutlined /> 12時間
                  </span>
                  <span className="tours-count">
                    <UserOutlined /> 1名〜
                  </span>
                </p>
                <p className="tours-price">¥8,000/1名</p>
              </Col>
              <Col xs={12} sm={12} md={4} onClick={this.handleToDetail}>
                <div className="thumbnail">
                  <img src="/images/recommend_sample.png" alt="example" />
                </div>
                <span className="tours-area">京都</span>
                <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                <p>
                  <span className="tours-time">
                    <ClockCircleOutlined /> 12時間
                  </span>
                  <span className="tours-count">
                    <UserOutlined /> 1名〜
                  </span>
                </p>
                <p className="tours-price">¥8,000/1名</p>
              </Col>
              <Col xs={12} sm={12} md={4} onClick={this.handleToDetail}>
                <div className="thumbnail">
                  <img src="/images/recommend_sample.png" alt="example" />
                </div>
                <span className="tours-area">京都</span>
                <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                <p>
                  <span className="tours-time">
                    <ClockCircleOutlined /> 12時間
                  </span>
                  <span className="tours-count">
                    <UserOutlined /> 1名〜
                  </span>
                </p>
                <p className="tours-price">¥8,000/1名</p>
              </Col>
              <Col xs={12} sm={12} md={4} onClick={this.handleToDetail}>
                <div className="thumbnail">
                  <img src="/images/recommend_sample.png" alt="example" />
                </div>
                <span className="tours-area">京都</span>
                <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                <p>
                  <span className="tours-time">
                    <ClockCircleOutlined /> 12時間
                  </span>
                  <span className="tours-count">
                    <UserOutlined /> 1名〜
                  </span>
                </p>
                <p className="tours-price">¥8,000/1名</p>
              </Col>
              <Col xs={12} sm={12} md={4} onClick={this.handleToDetail}>
                <div className="thumbnail">
                  <img src="/images/recommend_sample.png" alt="example" />
                </div>
                <span className="tours-area">京都</span>
                <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                <p>
                  <span className="tours-time">
                    <ClockCircleOutlined /> 12時間
                  </span>
                  <span className="tours-count">
                    <UserOutlined /> 1名〜
                  </span>
                </p>
                <p className="tours-price">¥8,000/1名</p>
              </Col>
              <Col xs={12} sm={12} md={4} onClick={this.handleToDetail}>
                <div className="thumbnail">
                  <img src="/images/recommend_sample.png" alt="example" />
                </div>
                <span className="tours-area">京都</span>
                <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                <p>
                  <span className="tours-time">
                    <ClockCircleOutlined /> 12時間
                  </span>
                  <span className="tours-count">
                    <UserOutlined /> 1名〜
                  </span>
                </p>
                <p className="tours-price">¥8,000/1名</p>
              </Col>
              <Col xs={12} sm={12} md={4} onClick={this.handleToDetail}>
                <div className="thumbnail">
                  <img src="/images/recommend_sample.png" alt="example" />
                </div>
                <span className="tours-area">京都</span>
                <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                <p>
                  <span className="tours-time">
                    <ClockCircleOutlined /> 12時間
                  </span>
                  <span className="tours-count">
                    <UserOutlined /> 1名〜
                  </span>
                </p>
                <p className="tours-price">¥8,000/1名</p>
              </Col>
              <Col xs={12} sm={12} md={4} onClick={this.handleToDetail}>
                <div className="thumbnail">
                  <img src="/images/recommend_sample.png" alt="example" />
                </div>
                <span className="tours-area">京都</span>
                <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                <p>
                  <span className="tours-time">
                    <ClockCircleOutlined /> 12時間
                  </span>
                  <span className="tours-count">
                    <UserOutlined /> 1名〜
                  </span>
                </p>
                <p className="tours-price">¥8,000/1名</p>
              </Col>
              <Col xs={12} sm={12} md={4} onClick={this.handleToDetail}>
                <div className="thumbnail">
                  <img src="/images/recommend_sample.png" alt="example" />
                </div>
                <span className="tours-area">京都</span>
                <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                <p>
                  <span className="tours-time">
                    <ClockCircleOutlined /> 12時間
                  </span>
                  <span className="tours-count">
                    <UserOutlined /> 1名〜
                  </span>
                </p>
                <p className="tours-price">¥8,000/1名</p>
              </Col>
            </Row>
            <div style={{ textAlign: 'center' }}>
              <Btn label={'もっと見る'} type={'default'} size={'large'} />
            </div>
          </Section> */}
        </main>
        <Footer />
      </>
    );
  }
}

export default withRouter(Home);
