import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className='bg-brown p-5'>
        <nav className="w-64 ">
          <ul className="flex justify-between">
            <li><a className='text-amber-50' href="/main.jsx">Inicio</a></li>
            <li><a className='text-amber-50' href="/Perfil.jsx">Perfil</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
