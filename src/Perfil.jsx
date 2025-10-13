import React from 'react';
import Header from './Header';
import PerfilInfo from './PerfilInfo';
import Footer from './Footer';

class Perfil extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <PerfilInfo />
        <Footer />
      </div>
    );
  }
}

export default Perfil
