import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-brown footer border-t border-white/10">
        <div className='max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-6 md:grid-cols-4'>
   
            <div className='md:col-span-2'>
              <div>
                <span className='text-white font-bold'>Encuentra tu bolo</span>
              </div>
              <p className='text-white'>Amplía tus oportunidades musicales: publica tus bolos y descubre locales que vibran contigo.</p>
            </div>
            <div>
              <div>
                <span className='text-white font-bold'>Contacto</span>
                <ul>
                  <li className='text-white'>Correo: encuentratubolo@gmail.com</li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <span className='text-white font-bold'>Social</span>
                  <ul>
                  <li className='text-white'>Instagram </li>
                  <li className='text-white'>Youtube </li>
                  <li className='text-white'>X </li>
                  <li className='text-white'>Spotify </li>
                </ul>
              </div>
            </div>
         
        </div>
      </footer>

    );
  }
}

export default Footer;