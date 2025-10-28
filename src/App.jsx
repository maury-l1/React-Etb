import React from 'react';
import Header from './Header';
import Artistas from './Artistas';
import Footer from './Footer';
import Hero from './Hero';
import Hosts from './Hosts';

class App extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Artistas />
        <Hosts />
        <Footer />
      </div>
    );
  }
}

export default App
