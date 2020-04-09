import React from 'react';
import NavHome from '../Components/Navs/Home';
import Footer from '../Components/Footers';
import MainVisual from '../Components/MainVisual';
import Section from '../Components/Sections/Section';
import Heading2nd from '../Components/Heading/Head2nd';
import Btn from '../Components/Buttons';

import { Card, Col, Row } from 'antd';
import { ClockCircleOutlined, UserOutlined } from '@ant-design/icons';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <NavHome />
        <main>
          <MainVisual />
          <Section>
            <Heading2nd title={"おすすめのツアー"} />
            <Row gutter={[32, 32]} className="tours-list">
              <Col md={8}>
                <Card hoverable cover={<img src="/images/tour_sample.png" alt="example" />}>
                  <span className="tours-area">京都</span>
                  <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                  <p>
                    <span className="tours-time">
                      <ClockCircleOutlined /> 12時間
                    </span>
                    <span className="tours-count">
                      <UserOutlined /> 1名〜
                    </span>
                    <span className="tours-price">¥8,000/1名</span>
                  </p>
                </Card>
              </Col>
              <Col md={8}>
                <Card hoverable cover={<img src="/images/tour_sample.png" alt="example" />}>
                  <span className="tours-area">京都</span>
                  <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                  <p>
                    <span className="tours-time">
                      <ClockCircleOutlined /> 12時間
                    </span>
                    <span className="tours-count">
                      <UserOutlined /> 1名〜
                    </span>
                    <span className="tours-price">¥8,000/1名</span>
                  </p>
                </Card>
              </Col>
              <Col md={8}>
                <Card hoverable cover={<img src="/images/tour_sample.png" alt="example" />}>
                  <span className="tours-area">京都</span>
                  <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                  <p>
                    <span className="tours-time">
                      <ClockCircleOutlined /> 12時間
                    </span>
                    <span className="tours-count">
                      <UserOutlined /> 1名〜
                    </span>
                    <span className="tours-price">¥8,000/1名</span>
                  </p>
                </Card>
              </Col>
              <Col md={8}>
                <Card hoverable cover={<img src="/images/tour_sample.png" alt="example" />}>
                  <span className="tours-area">京都</span>
                  <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                  <p>
                    <span className="tours-time">
                      <ClockCircleOutlined /> 12時間
                    </span>
                    <span className="tours-count">
                      <UserOutlined /> 1名〜
                    </span>
                    <span className="tours-price">¥8,000/1名</span>
                  </p>
                </Card>
              </Col>
              <Col md={8}>
                <Card hoverable cover={<img src="/images/tour_sample.png" alt="example" />}>
                  <span className="tours-area">京都</span>
                  <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                  <p>
                    <span className="tours-time">
                      <ClockCircleOutlined /> 12時間
                    </span>
                    <span className="tours-count">
                      <UserOutlined /> 1名〜
                    </span>
                    <span className="tours-price">¥8,000/1名</span>
                  </p>
                </Card>
              </Col>
              <Col md={8}>
                <Card hoverable cover={<img src="/images/tour_sample.png" alt="example" />}>
                  <span className="tours-area">京都</span>
                  <h3>京都をとにかく楽しむ素敵な素敵なガイドツアー</h3>
                  <p>
                    <span className="tours-time">
                      <ClockCircleOutlined /> 12時間
                    </span>
                    <span className="tours-count">
                      <UserOutlined /> 1名〜
                    </span>
                    <span className="tours-price">¥8,000/1名</span>
                  </p>
                </Card>
              </Col>
            </Row>
            <div style={{ textAlign: "center" }}>
              <Btn label={"もっと見る"} type={"default"} size={"large"} />
            </div>
          </Section>
          <Section>
            <Heading2nd title={"カテゴリー"} />
            <Row gutter={[32, 32]} className="category-list">
              <Col xs={12} sm={12} md={4}>
                <div className="category">
                  <img src="/images/interest_img01.png" alt="example" />
                  <h3>文化体験</h3>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div className="category">
                  <img src="/images/interest_img01.png" alt="example" />
                  <h3>文化体験</h3>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div className="category">
                  <img src="/images/interest_img01.png" alt="example" />
                  <h3>文化体験</h3>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div className="category">
                  <img src="/images/interest_img01.png" alt="example" />
                  <h3>文化体験</h3>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div className="category">
                  <img src="/images/interest_img01.png" alt="example" />
                  <h3>文化体験</h3>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div className="category">
                  <img src="/images/interest_img01.png" alt="example" />
                  <h3>文化体験</h3>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div className="category">
                  <img src="/images/interest_img01.png" alt="example" />
                  <h3>文化体験</h3>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div className="category">
                  <img src="/images/interest_img01.png" alt="example" />
                  <h3>文化体験</h3>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div className="category">
                  <img src="/images/interest_img01.png" alt="example" />
                  <h3>文化体験</h3>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4}>
                <div className="category">
                  <img src="/images/interest_img01.png" alt="example" />
                  <h3>文化体験</h3>
                </div>
              </Col>
            </Row>
            <div style={{ textAlign: "center" }}>
              <Btn label={"もっと見る"} type={"default"} size={"large"} />
            </div>
          </Section>
          <Section>
            <Heading2nd title={"おすすめのツアー"} />
            <Row gutter={[32, 32]} className="recommend-tours">
              <Col xs={12} sm={12} md={4}>
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
              <Col xs={12} sm={12} md={4}>
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
              <Col xs={12} sm={12} md={4}>
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
              <Col xs={12} sm={12} md={4}>
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
              <Col xs={12} sm={12} md={4}>
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
              <Col xs={12} sm={12} md={4}>
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
              <Col xs={12} sm={12} md={4}>
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
              <Col xs={12} sm={12} md={4}>
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
              <Col xs={12} sm={12} md={4}>
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
              <Col xs={12} sm={12} md={4}>
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
              <Col xs={12} sm={12} md={4}>
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
              <Col xs={12} sm={12} md={4}>
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
            <div style={{ textAlign: "center" }}>
              <Btn label={"もっと見る"} type={"default"} size={"large"} />
            </div>
          </Section>
        </main>
        <Footer />
      </>
    );
  }
}
