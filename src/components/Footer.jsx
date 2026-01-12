import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-brown border-t border-white/10" aria-label="Footer de la página">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-6 md:grid-cols-4">

          {/* Sección principal */}
          <section className="md:col-span-2">
            <h2 className="text-white font-bold text-lg mb-2">Encuentra tu bolo</h2>
            <p className="text-white">
              Amplía tus oportunidades musicales: publica tus bolos y descubre locales que vibran contigo.
            </p>
          </section>

          {/* Sección Contacto */}
          <section aria-label="Información de contacto">
            <h2 className="text-white font-bold text-lg mb-2">Contacto</h2>
            <ul>
              <li className="text-white">Correo: encuentratubolo@gmail.com</li>
            </ul>
          </section>

          {/* Sección Social */}
          <section aria-label="Redes sociales">
            <h2 className="text-white font-bold text-lg mb-2">Social</h2>
            <ul>
              <li className="text-white">Instagram</li>
              <li className="text-white">Youtube</li>
              <li className="text-white">X</li>
              <li className="text-white">Spotify</li>
            </ul>
          </section>

        </div>
      </footer>
    );
  }
}

export default Footer;
