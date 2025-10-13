import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>
            <p>Encuentra tu bolo</p>
          </div>
          <ul className='footer-list'>
            <li>Servicios</li>
            <li>Soporte</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;