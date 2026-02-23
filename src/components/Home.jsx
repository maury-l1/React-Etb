import React from 'react';
import Items from './Items';
import Hero from './Hero';
import artistsList from './artistsList'
import hostsList from './hostsList'

function Home() {
    return(
        <div>
            <Hero />
            <Items title="ARTISTAS" list={artistsList} />
            <Items title="HOSTS" list={hostsList} />
        </div>
    )
}

export default Home