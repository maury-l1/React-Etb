import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-brown footer border-t border-white/10">
        <div className='grid gap-6 md:grid-cols-4 w-3/5'>
          <div className='w-3/5'>
            <div className='md:col-span-2'>
              <div>
                <span className='text-white'>Encuentra tu bolo</span>
              </div>
              <p className='text-white'>Amplía tus oportunidades musicales: publica tus bolos y descubre locales que vibran contigo.</p>
            </div>
            <div>
              <div>
                <span className='text-white'>Contacto</span>
              </div>
            </div>
            <div>
              <div>
                <span className='text-white'>Social</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;