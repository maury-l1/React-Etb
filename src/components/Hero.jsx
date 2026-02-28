import React from 'react';
import './Hero.scss'; // <-- Aquí importas tu archivo SCSS

class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Encuentra tu bolo</h1>
                </div>
                <div>
                    <p className="hero-text">
                        Accede a bolos reales, publícalos y conecta con los locales ideales para tu estilo musical.
                    </p>
                </div>
            </div>
        );
    }
}

export default Hero;