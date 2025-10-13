import React from 'react';

class PerfilInfo extends React.Component {
  render() {
    return (
      <div className='profile'>
        <div className='profile-inner'>
        <div className='profile-logo'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="" />
        </div>
        <div className='profile-info'>
            <p>Ejemplo de informacion de perfil.</p>
        </div>
        </div>
      </div>
    );
  }
}

export default PerfilInfo;