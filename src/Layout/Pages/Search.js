import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../Components/Navs/Lower';
import Footer from '../Components/Footers';

import H2 from '../Components/Heading/Head2nd';

class Search extends React.Component {
  handleToHome = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <>
        <Header />
        <section className="sec">
            <div className="container">
              <H2 title="検索結果「」" />
            </div>
          </section>
        <Footer />
      </>
    );
  }
}
export default withRouter(Search);