import React from 'react';

import Header from '../Components/Navs/Lower';
import Footer from '../Components/Footers';
import H2 from '../Components/Heading/Head2nd';

import { Table } from 'antd';

export default class Cart extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section className="sec">
            <div className="container">
              <H2 title="カート" />
              <p>まだカートになにも入っていません。</p>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
