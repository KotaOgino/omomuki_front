import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footers';
import MainVisual from '../Components/MainVisual';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <MainVisual />
        </main>
        <Footer />
      </>
    );
  }
}
