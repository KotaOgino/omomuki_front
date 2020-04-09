import React from 'react';
import Header from '../Components/Navs/Lower';
import Footer from '../Components/Footers';
// import Section from '../Components/Sections/Section';
import H2 from '../Components/Heading/Head2nd';
import H3 from '../Components/Heading/Head3rd';

import { Row, Col, Carousel, Space, Timeline, Affix, Card, Button, Comment, List, Collapse } from 'antd';
import { ClockCircleOutlined, UserOutlined, CalendarOutlined, StarFilled } from '@ant-design/icons';

const data = [
  {
    title: 'めちゃめちゃ最高です',
    datetime: '2020-04-10',
    content: (
      <>
        <p className="color-primary">
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
        </p>
        <p>京都旅行は初めてでしたが、本当にマジでめちゃめちゃ最高でした。</p>
      </>
    )
  },
  {
    title: 'めちゃめちゃ最高です',
    datetime: '2020-04-10',
    content: (
      <>
        <p className="color-primary">
          <StarFilled />
          <StarFilled />
          <StarFilled />
          <StarFilled />
        </p>
        <p>京都旅行は初めてでしたが、本当にマジでめちゃめちゃ最高でした。</p>
      </>
    )
  },
  {
    title: 'めちゃめちゃ最高です',
    datetime: '2020-04-10',
    content: (
      <>
        <p className="color-primary">
          <StarFilled />
          <StarFilled />
          <StarFilled />
        </p>
        <p>京都旅行は初めてでしたが、本当にマジでめちゃめちゃ最高でした。</p>
      </>
    )
  },
];

export default class Mypage extends React.Component {
  render() {
    let setting = {
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      swipeToSlide: true,
      infinite: true,
      autoplay: true,
    };
    return (
      <>
        <Header color={"black"} />
        <main>
          <section className="tour-detail">
            <div className="tour-detail-info">
              <Carousel className="tour-detail-slide" {...setting}>
                <img src="./images/detail_sample.png" alt="" />
                <img src="./images/detail_sample2.png" alt="" />
                <img src="./images/detail_sample.png" alt="" />
                <img src="./images/detail_sample2.png" alt="" />
                <img src="./images/detail_sample.png" alt="" />
                <img src="./images/detail_sample2.png" alt="" />
                <img src="./images/detail_sample.png" alt="" />
                <img src="./images/detail_sample2.png" alt="" />
                <img src="./images/detail_sample.png" alt="" />
                <img src="./images/detail_sample2.png" alt="" />
              </Carousel>
              <div className="sec color-white text-center">
                <div className="container">
                  <H2 className="color-white" title={"京都の寺社仏閣穴場めぐりツアー"} />
                  <span className="omk__badge__white">京都</span>
                  <p style={{ margin: '1rem auto', maxWidth: '768px' }}>素敵な素敵なガイドさんの最高に最高な案内で京都をとにかくはちゃめちゃに楽しむツアーです。地元のガイドならではの視点で、京都中の穴場という穴場を味わいつくすことができます。</p>
                  <Space>
                    <span className="tour-detail-time">
                      <ClockCircleOutlined /> 12時間
                    </span>
                    <span className="tour-detail-count">
                      <UserOutlined /> 1名〜
                    </span>
                  </Space>
                  <p className="tour-detail-price" style={{ margin: '1rem 0 0' }}>¥8,000/1名</p>
                </div>
              </div>
            </div>
            <div className="tour-content sec">
              <div className="container">
                <Row gutter={[32, 32]}>
                  <Col md={16}>
                    <div className="tour-detail-timeline sec">
                      <H2 title={"ツアーの内容"} />
                      <Timeline>
                        <Timeline.Item>
                          <p>8:00~</p>
                          <p><img src="./images/content_sample.png" alt="" /></p>
                          <H3 title={"三隆寺"} />
                          <p style={{ margin: '0' }}>本当に素晴らしい霊的パワー溢れる最高なお寺で、信じられないくらい素敵な体験ができます。</p>
                        </Timeline.Item>
                        <Timeline.Item>
                          <p>8:00~</p>
                          <p><img src="./images/content_sample.png" alt="" /></p>
                          <H3 title={"三隆寺"} />
                          <p style={{ margin: '0' }}>本当に素晴らしい霊的パワー溢れる最高なお寺で、信じられないくらい素敵な体験ができます。</p>
                        </Timeline.Item>
                        <Timeline.Item>
                          <p>8:00~</p>
                          <p><img src="./images/content_sample.png" alt="" /></p>
                          <H3 title={"三隆寺"} />
                          <p style={{ margin: '0' }}>本当に素晴らしい霊的パワー溢れる最高なお寺で、信じられないくらい素敵な体験ができます。</p>
                        </Timeline.Item>
                        <Timeline.Item>
                          <p>8:00~</p>
                          <p><img src="./images/content_sample.png" alt="" /></p>
                          <H3 title={"三隆寺"} />
                          <p style={{ margin: '0' }}>本当に素晴らしい霊的パワー溢れる最高なお寺で、信じられないくらい素敵な体験ができます。</p>
                        </Timeline.Item>
                      </Timeline>
                    </div>
                    <div className="tour-profile sec">
                      <H2 title="ツアー作成者情報" />
                      <div className="text-center">
                        <p>
                          <img src="./images/profile_icon.png" alt="" />
                        </p>
                        <H3 title="Omomuki運営局" />
                        <p style={{ margin: '0' }}>自分好みの日本観光に出会えるオプショナルツアー作成サービスを提供します。</p>
                      </div>
                    </div>
                    <div className="tour-review sec">
                      <H2 title="レビュー" />
                      <List
                        className="comment-list"
                        header={`${data.length} 件のレビュー`}
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                          <li>
                            <H3 title={item.title} />
                            <Comment content={item.content} datetime={item.datetime} />
                          </li>
                        )}
                      />
                    </div>
                    <div className="tour-overview sec">
                      <H2 title="ツアー情報" />
                      <Collapse>
                        <Panel header="料金に含まれるもの">
                        </Panel>
                      </Collapse>
                    </div>
                  </Col>
                  <Col md={8}>
                    <Affix offsetTop={10}>
                      <Card>
                        <H3 className="text-center" title={"京都の寺社仏閣穴場めぐりツアー"} />
                        <div className="text-center">
                          <span className="omk__badge">京都</span>
                        </div>
                        <p style={{ margin: '1rem 0' }}>素敵な素敵なガイドさんの最高に最高な案内で京都をとにかくはちゃめちゃに楽しむツアーです。地元のガイドならではの視点で、京都中の穴場という穴場を味わいつくすことができます。</p>
                        <div className="text-center">
                          <Space>
                            <span className="tour-detail-time"><ClockCircleOutlined /> 12時間</span>
                            <span className="tour-detail-count"><UserOutlined /> 1名〜</span>
                          </Space>
                        </div>
                        <p className="tour-detail-price text-center" style={{ margin: '1rem 0' }}>¥8,000/1名</p>
                        <Button type="primary" size="large" block>
                          <CalendarOutlined />日程を確認する
                        </Button>
                      </Card>
                    </Affix>
                  </Col>
                </Row>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
