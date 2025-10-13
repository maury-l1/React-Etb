import React from 'react';
import Lesson from './Lesson';

class Menu extends React.Component {
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
    const hostList = [
      {
        id: 1,
        name: 'Bar La Esquina',
        image: 'https://media.timeout.com/images/105396702/750/562/image.jpg',
        introduction: "Bar con ambiente íntimo que busca músicos acústicos y cantautores para ambientar las noches de los fines de semana.",
      },
      {
        id: 2,
        name: 'Museo Arte Vivo',
        image: 'https://content3.cdnprado.net/imagenes/Documentos/imgsem/3a/3ad8/3ad8caa6-4038-4548-bf1a-a44dbd309f29/81d690e3-c7cf-207e-cb0c-00361d54a75c.jpg',
        introduction: "Museo que ofrece espacios para presentaciones en vivo y está en búsqueda de artistas de música clásica y experimental.",
      },
      {
        id: 3,
        name: 'Tienda Vinyl Groove',
        image: 'https://inandoutbarcelona.net/wp-content/uploads/2022/06/El-Genio-Equivocado-tienda-discos.jpg',
        introduction: "Tienda de discos vinilos que quiere organizar sesiones con DJs y bandas locales para eventos especiales y lanzamientos.",
      },
      {
        id: 4,
        name: 'Café Cultural La Luna',
        image: 'https://www.krion.com/uploads/tmp/paredes_de_cafeteria_selva.jpg',
        introduction: "Café y espacio cultural que abre sus puertas a músicos de jazz, blues y fusión para actuaciones semanales en vivo.",
      },

    ];

    return (
      <div className="bg-sky-50">
        <div className='main'>
          <div className='copy-container'>
            <h1>Encuentra tu bolo</h1>
            <h2>Navega entre las distintas ofertas</h2>
          </div>
          <div className='lesson-container'>
            <h3>Artistas</h3>
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
          <div className='lesson-container'>
            <h3>Hosts</h3>
            {hostList.map((hostItem) => {
              return(
                <Lesson
                  key={hostItem.id}
                  name={hostItem.name}
                  image={hostItem.image}
                  introduction={hostItem.introduction}
                />
                )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;