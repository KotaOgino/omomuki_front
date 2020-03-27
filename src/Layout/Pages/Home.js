import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footers';
import MainVisual from '../Components/MainVisual';
import Section from '../Components/Sections/Section';
import Heading2nd from '../Components/Heading/Head2nd';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <MainVisual />
          <Section>
            <Heading2nd title={"おすすめのツアー"} />
          </Section>
        </main>
        <Footer />
      </>
    );
  }
}
