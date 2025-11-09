import React from 'react';

class Footer extends React.Component {
  render() {
    return (
     <div className="bg-red footer py-6">
  <div className="footer-inner max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    
    <div className="footer-logo text-center md:text-left">
      <p className="text-lg font-semibold">Encuentra tu bolo</p>
    </div>

    <ul className="footer-list flex flex-col md:flex-row gap-4 md:gap-8 text-center">
      <li className="cursor-pointer hover:underline">Servicios</li>
      <li className="cursor-pointer hover:underline">Soporte</li>
      <li className="cursor-pointer hover:underline">Contact</li>
    </ul>
    
  </div>
</div>

    );
  }
}

export default Footer;