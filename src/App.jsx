import React from 'react';
import Header from './Header';
import Items from './Items';
import Footer from './Footer';
import Hero from './Hero';
import artistsList from './artistsList'
import hostsList from './hostsList'


class App extends React.Component{
  
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Items title = "ARTISTAS" list={artistsList}/>
        <Items title = "HOSTS" list={hostsList}/>
        <Footer />
      </div>
    );
  }
}

export default App
