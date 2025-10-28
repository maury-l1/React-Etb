import React from 'react';

class Hero extends React.Component {
    render() {
        return (
            <div className='flex justify-center items-center w-full h-80 bg-red' >
                <div className=' w-fit'>
                    <h1 className="font-nothing text-8xl text-amber-50">Encuentra tu bolo</h1>
                </div>
            </div>
        );
    }
}

export default Hero;