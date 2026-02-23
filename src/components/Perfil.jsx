import { useRef } from 'react';
import AudioPlayer from './AudioPlayer';
import VideoPlayer from './VideoPlayer';

export default function Perfil() {
  const demosRef = useRef(null);

  const handleFocusDemos = () => {
    demosRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    demosRef.current.focus();
  };

  const handleContact = () => {
    console.log("Boton de contacto")
    alert('Abrir formulario de contacto'); // lógica temporal
  };

  return (
    <main className="bg-red flex flex-col items-center justify-start min-h-screen px-4 py-8 space-y-8 text-center">

      {/* Sección Perfil */}
      <section className="w-full max-w-4xl mx-auto p-8 font-sans">
        <header className="flex flex-col md:flex-row items-center gap-6">
          {/* Avatar */}
          <img
            src="images/user.webp"
            alt="Foto de perfil del artista"
            className="w-56 h-56 rounded-full border border-gray-300 object-cover"
          />

          {/* Stats y nombre */}
          <div className="mt-4 md:mt-0 md:ml-0 w-full md:w-3/5 text-center bg-gray-300 p-4 rounded-lg">
            <h1 className="font-semibold text-xl mb-2">Nombre</h1>

            <div className="flex justify-between text-center w-full md:w-full">
              <div>
                <h2 className="font-semibold text-lg">1,234</h2>
                <p className="text-sm text-gray-600">Publicaciones</p>
              </div>
              <div>
                <h2 className="font-semibold text-lg">5,678</h2>
                <p className="text-sm text-gray-600">Seguidores</p>
              </div>
              <div>
                <h2 className="font-semibold text-lg">321</h2>
                <p className="text-sm text-gray-600">Siguiendo</p>
              </div>
            </div>
          </div>
        </header>

        {/* Bio */}
        <div className="mt-4 text-left">
          <h2 className="font-semibold text-base">Descripción</h2>
          <p className="text-sm text-gray-700 leading-tight mb-2">
            Bio del usuario <br />
            🌐 enlace.com
          </p>
        </div>

        {/* Botones Contactar y ver demos */}
        <div className="flex flex-col sm:flex-row justify-start space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
          {/* Contactar */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Contactar al artista por mensaje"
            onClick={handleContact}
            keyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleContact(e);
            }}
            className="border border-gray-300 rounded-md px-4 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 cursor-pointer flex justify-center items-center"
          >
            Contactar
          </div>

          {/* Ver Demos */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Ir a la sección de demos"
            onClick={handleFocusDemos}
            keyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleFocusDemos(e);
            }}
            className="border border-gray-300 rounded-md px-4 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 cursor-pointer flex justify-center items-center"
          >
            Ver Demos
          </div>
        </div>
      </section>

      {/* Sección Demos */}
      <section
        ref={demosRef}
        tabIndex={-1}
        aria-labelledby="demos-title"
        className="w-full max-w-4xl flex flex-col items-center space-y-8 px-4 md:px-0"
      >
         <div className="bg-orange w-full h-16 flex justify-center items-center mb-8">
                <div className="w-3/5 flex justify-start">
                    <h1 className="text-amber-50 text-4xl font-bold">Demos</h1>
                </div>
            </div>

        <p className="max-w-xl text-lg text-amber-200 text-center">
          Escucha algunos de mis últimos trabajos musicales. Puedes reproducir los demos de audio y video directamente desde aquí.
        </p>

        {/* Sub-sección Video */}
        <article className="w-full flex flex-col items-center space-y-4" aria-labelledby="video-title">
          <h2 id="video-title" className="text-2xl font-semibold text-amber-100">
            Video
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full items-center justify-center">
            <VideoPlayer />
          </div>
        </article>

        {/* Sub-sección Audio */}
        <article className="w-full flex flex-col items-center space-y-4" aria-labelledby="audio-title">
          <h2 id="audio-title" className="text-2xl font-semibold text-amber-100">
            Audio
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full items-center justify-center">
            <AudioPlayer />
          </div>
        </article>
      </section>
    </main>
  );
}