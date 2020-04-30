import React from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

import Header from '../Components/Navs/Lower';
import Footer from '../Components/Footers';
import MediaQuery from 'react-responsive';
import H2 from '../Components/Heading/Head2nd';
import H3 from '../Components/Heading/Head3rd';

import { Row, Col, Carousel, Space, Timeline, Affix, Card, Button, Comment, List, Collapse } from 'antd';
import { ClockCircleOutlined, UserOutlined, CalendarOutlined, StarFilled } from '@ant-design/icons';

const { Panel } = Collapse;
const data = [
  // {
  //   title: 'めちゃめちゃ最高です',
  //   datetime: '2020-04-10',
  //   content: (
  //     <>
  //       <p className="color-primary">
  //         <StarFilled />
  //         <StarFilled />
  //         <StarFilled />
  //         <StarFilled />
  //         <StarFilled />
  //       </p>
  //       <p>京都旅行は初めてでしたが、本当にマジでめちゃめちゃ最高でした。</p>
  //     </>
  //   )
  // },
  // {
  //   title: 'めちゃめちゃ最高です',
  //   datetime: '2020-04-10',
  //   content: (
  //     <>
  //       <p className="color-primary">
  //         <StarFilled />
  //         <StarFilled />
  //         <StarFilled />
  //         <StarFilled />
  //       </p>
  //       <p>京都旅行は初めてでしたが、本当にマジでめちゃめちゃ最高でした。</p>
  //     </>
  //   )
  // },
  // {
  //   title: 'めちゃめちゃ最高です',
  //   datetime: '2020-04-10',
  //   content: (
  //     <>
  //       <p className="color-primary">
  //         <StarFilled />
  //         <StarFilled />
  //         <StarFilled />
  //       </p>
  //       <p>京都旅行は初めてでしたが、本当にマジでめちゃめちゃ最高でした。</p>
  //     </>
  //   )
  // },
];

class TourDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: '',
      area: '',
      count: '',
      time: '',
      description: '',
      thumbnail: '',
      waring: '',
      slide: [],
      timelineTime: [],
      timelinePlace: [],
      timelineContent: [],
    };
  }
  componentDidMount() {
    console.log(this.props.location.state.id);
    const url = '/tours.json';
    axios
      .get(url, {
        params: {
          tourId: this.props.location.state.id,
        },
      })
      .then((res) => {
        const data = res.data[this.props.location.state.id - 1];
        this.setState({
          title: data.title,
          price: data.price,
          area: data.area,
          count: data.count,
          time: data.time,
          description: data.description,
          thumbnail: data.thumbnail,
          waring: data.waring,
          slide: data.slide,
          timelineTime: data.timeline.time,
          timelinePlace: data.timeline.place,
          timelineContent: data.timeline.content,
        });
      });
  }
  handleToDateSelect = () => {
    this.props.history.push('/date-select');
  };
  render() {
    let setting = {
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      swipeToSlide: true,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    };
    console.log(this.props.location.state.id);
    return (
      <>
        <Header color={'black'} />
        <main>
          <section className="tour-detail">
            <div className="tour-detail-info">
              {/* <Carousel className="tour-detail-slide" {...setting}>
                {this.state.slide.map((data, index) => {
                  return <img key={index} src={data} />;
                })}
              </Carousel> */}
              <div className="sec color-white text-center">
                <div className="container">
                  <H2 className="color-white" title={this.state.title} />
                  <span className="omk__badge__white">{this.state.area}</span>
                  <p style={{ margin: '1rem auto', maxWidth: '768px' }}>{this.state.description}</p>
                  <Space>
                    <span className="tour-detail-time">
                      <ClockCircleOutlined /> {this.state.time}
                    </span>
                    <span className="tour-detail-count">
                      <UserOutlined /> {this.state.count}
                    </span>
                  </Space>
                  <p className="tour-detail-price" style={{ margin: '1rem 0 0' }}>
                    {this.state.price}
                  </p>
                </div>
              </div>
            </div>
            <div className="tour-content sec">
              <div className="container">
                <Row gutter={[32, 32]}>
                  <Col md={16}>
                    <div className="tour-detail-timeline sec">
                      <H2 title={'ツアーの内容'} />
                      <Timeline>
                        {this.state.timelineTime.map((data, index) => {
                          return (
                            <Timeline.Item key={index}>
                              <p>{data}~</p>
                              <H3 title={this.state.timelinePlace[index]} />
                              <p style={{ margin: '0' }}>{this.state.timelineContent[index]}</p>
                            </Timeline.Item>
                          );
                        })}
                      </Timeline>
                    </div>
                    <div className="tour-profile sec">
                      <H2 title="ツアー作成者情報" />
                      <div className="text-center">
                        <p>
                          <img src="./images/profile_icon.png" alt="" />
                        </p>
                        <H3 title="Omomuki運営局" />
                        <p style={{ margin: '0' }}>
                          自分好みの日本観光に出会えるオプショナルツアー作成サービスを提供します。
                        </p>
                      </div>
                    </div>
                    <div className="tour-review sec">
                      <H2 title="レビュー" />
                      <List
                        className="comment-list"
                        header={`${data.length} 件のレビュー`}
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                          <li>
                            <H3 title={item.title} />
                            <Comment content={item.content} datetime={item.datetime} />
                          </li>
                        )}
                      />
                    </div>
                    <div className="tour-overview sec">
                      <H2 title="ツアー情報" />
                      <Collapse bordered={false} expandIconPosition={'right'}>
                        <Panel header="お申込みについてのご注意">
                          <p>{this.state.waring}</p>
                        </Panel>
                      </Collapse>
                    </div>
                  </Col>
                  <MediaQuery minDeviceWidth={769}>
                    <Col md={8}>
                      <Affix offsetTop={10}>
                        <Card>
                          <H3 className="text-center" title={this.state.title} />
                          <div className="text-center">
                            <span className="omk__badge">{this.state.area}</span>
                          </div>
                          <p style={{ margin: '1rem 0' }}>{this.state.description}</p>
                          <div className="text-center">
                            <Space>
                              <span className="tour-detail-time">
                                <ClockCircleOutlined /> {this.state.time}
                              </span>
                              <span className="tour-detail-count">
                                <UserOutlined /> {this.state.count}
                              </span>
                            </Space>
                          </div>
                          <p className="tour-detail-price text-center" style={{ margin: '1rem 0' }}>
                            {this.state.price}
                          </p>
                          <Button type="primary" size="large" block>
                            <CalendarOutlined /> 準備中
                          </Button>
                        </Card>
                      </Affix>
                    </Col>
                  </MediaQuery>
                </Row>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <MediaQuery maxDeviceWidth={768}>
          <Affix offsetBottom={16}>
            <div className="container">
              <Button type="primary" size="large" block>
                <CalendarOutlined /> 準備中
              </Button>
            </div>
          </Affix>
        </MediaQuery>
      </>
    );
  }
}

export default withRouter(TourDetail);
