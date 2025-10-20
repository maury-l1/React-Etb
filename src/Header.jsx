import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='bg-red-800 p-4'>
        <nav className="">

          <ul className="flex justify-between">
            <li><a href="/main.jsx">Inicio</a></li>
            <li><a href="/Perfil.jsx">Perfil</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
