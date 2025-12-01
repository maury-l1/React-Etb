import React from 'react';

class Hero extends React.Component {
    render() {
        return (
            <div className="w-full h-80 bg-red flex flex-col items-center justify-center">
                <div className=' w-fit'>
                    <h1 className="font-nothing text-8xl text-amber-50">Encuentra tu bolo</h1>
                </div>
                <div>
                    <p className='text-amber-50 mt-8'>Accede a bolos reales, publícalos y conecta con los locales ideales para tu estilo musical.</p>
                </div>
            </div>
        );
    }
}

export default Hero;