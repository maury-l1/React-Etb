import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='bg-sky-50'>
        <div className='header-logo'>
          <img src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/character_logo.svg' />
        </div>
        <nav className='header-options'>
          <ul className='header-list'>
            <li><a href="/main.jsx">Inicio</a></li>
            <li><a href="/Perfil.jsx">Perfil</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
