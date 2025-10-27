import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Hero from './Hero';

class App extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App
