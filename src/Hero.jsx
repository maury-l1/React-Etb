import React from 'react';

class Hero extends React.Component {
    render() {
        return (
            <div className='flex justify-center items-center w-full h-80 bg-red' >
                <div className=' w-fit'>
                    <p className="font-nycd text-8xl text-amber-50">Encuentra tu bolo</p>
                </div>
            </div>
        );
    }
}

export default Hero;