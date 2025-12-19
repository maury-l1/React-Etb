import { Routes, Route } from 'react-router-dom'
import React from 'react';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Perfil from './components/Perfil'
import Contacto from './components/Contacto'


class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    );
  }
}

export default App
