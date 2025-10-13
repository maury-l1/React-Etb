import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
//import './App.css';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

class App extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App
