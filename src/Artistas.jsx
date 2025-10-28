import React from 'react';
import Lesson from './Lesson';

class Artistas extends React.Component {
  render() {
    const artistList = [
      {
        id: 1,
        name: 'Lucía',
        image: 'https://cdn4.vectorstock.com/i/1000x1000/96/43/avatar-photo-default-user-icon-picture-face-vector-48139643.jpg',
        introduction: "Soy cantante y compositora de música indie, toco en solitario con guitarra acústica y me encanta contar historias a través de mis canciones.",
      },
      {
        id: 2,
        name: 'Diego',
        image: 'https://cdn4.vectorstock.com/i/1000x1000/96/43/avatar-photo-default-user-icon-picture-face-vector-48139643.jpg',
        introduction: "Baterista en una banda de rock alternativo, apasionado por crear ritmos potentes que hacen vibrar a la audiencia en cada concierto.",
      },
      {
        id: 3,
        name: 'Marina',
        image: 'https://cdn4.vectorstock.com/i/1000x1000/96/43/avatar-photo-default-user-icon-picture-face-vector-48139643.jpg',
        introduction: "Pianista y cantante de jazz, disfruto improvisando y llevando la música a otro nivel con mi trío musical.",
      },
      {
        id: 4,
        name: 'Carlos',
        image: 'https://cdn4.vectorstock.com/i/1000x1000/96/43/avatar-photo-default-user-icon-picture-face-vector-48139643.jpg',
        introduction: "Músico de hip hop, rapero y productor en solitario, me dedico a transmitir mensajes reales y contundentes a través de mis letras.",
      },

    ];

    return (
      <div>
        <div className='bg-orange h-14 flex items-center'>
          <h2 className=' ml-10 text-amber-50 text-4xl'>ARTISTAS</h2>
        </div>
        <div className="h-auto flex justify-center space-x-24 bg-red">


          {artistList.map((artistItem) => {
            return (
              <Lesson
                key={artistItem.id}
                name={artistItem.name}
                image={artistItem.image}
                introduction={artistItem.introduction}
              />
            );
          })}

        </div>
      </div>
    );
  }
}

export default Artistas;